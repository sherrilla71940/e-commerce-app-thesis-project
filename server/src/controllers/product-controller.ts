import { Product as ProductModel, User as UserModel } from "../models/models";
import { Request, Response } from "express";
import { Op } from "sequelize";

export async function getAllProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const allProducts: ProductModel[] | [] = await ProductModel.findAll({});
    if (allProducts.length) {
      res.status(200);
      res.json(allProducts);
    } else {
      res.status(404);
      res.json("no products exist");
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error while finding all products");
    }
  }
}

export async function deleteAllProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    await ProductModel.destroy({ truncate: true });
    res.status(200);
    res.json("all products from products table deleted");
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error while deleting all products");
    }
  }
}

export async function postProduct(req: Request, res: Response): Promise<void> {
  console.log("post product endpoint reached", req.body);
  try {
    const product: ProductModel | null = await ProductModel.create(req.body);
    console.log(product);
    const User: UserModel | null = await UserModel.findOne({
      where: {
        id: req.body.sellerId,
      },
    });
    if (User !== null) {
      User.set({
        isSeller: true,
      });
      await User.save();
      res.status(201);
      res.json(product);
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error while creating product");
    }
  }
}

export async function getListedAndInStockProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const products: ProductModel[] | [] = await ProductModel.findAll({
      where: {
        [Op.and]: [
          {
            sellerId: {
              [Op.ne]: null,
            },
          },
          {
            quantity: {
              [Op.gt]: 0,
            },
          },
        ],
      },
    });
    // const products = await ProductModel.findAll();
    res.status(200);
    res.json(products);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error while fetching products");
    }
  }
}

export async function getProduct(req: Request, res: Response): Promise<void> {
  try {
    const product: ProductModel | null = await ProductModel.findOne({
      where: {
        id: req.params.id,
        sellerId: {
          [Op.ne]: null,
        },
      },
    });
    if (product) {
      res.status(200);
      res.json(product);
    } else {
      res.status(404);
      res.json(`product ${req.params.id} not found`);
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json(`could not find product by id: ${req.params.id}`);
    }
  }
}

export async function unlistProduct(
  req: Request,
  res: Response
): Promise<void> {
  let sellerIdReference: string | null;
  console.log("delete product by id endpoint reached");
  try {
    const foundProduct: ProductModel | null = await ProductModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (foundProduct) {
      sellerIdReference = foundProduct.sellerId;
      console.log(sellerIdReference);
      if (sellerIdReference !== null) {
        console.log("selleridreference is not null");
        foundProduct.set({
          sellerId: null,
        });
        await foundProduct.save();
        const userHasMoreProducts: ProductModel | null =
          await ProductModel.findOne({
            where: {
              sellerId: sellerIdReference,
            },
          });
        console.log(userHasMoreProducts);
        if (!userHasMoreProducts) {
          console.log("user has no more products reached");
          const user: UserModel | null = await UserModel.findOne({
            where: {
              id: sellerIdReference,
            },
          });
          console.log("user: ", user);
          if (user !== null) {
            user.set({
              isSeller: false,
            });
            await user.save();
            res.status(200);
            res.json(
              `successfully unlisted product: ${req.params.id} for seller: ${sellerIdReference}`
            );
          }
        }
      }
    } else {
      res.status(404);
      res.json("cannot unlist non-existent product");
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("error encountered when unlisting product for seller");
    }
  }
}

export async function updateProduct(
  req: Request,
  res: Response
): Promise<void> {
  console.log("update product by id endpoint reached");
  try {
    const foundProduct: ProductModel | null = await ProductModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (foundProduct) {
      foundProduct.set(req.body);
      await foundProduct.save();
      res.status(200);
      res.json(`successfully updated product: ${req.params.id}`);
    } else {
      res.status(404);
      res.json("cannot update non-existent product");
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("error encountered when updating product");
    }
  }
}

export async function getSellerProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const products: ProductModel[] | [] = await ProductModel.findAll({
      where: {
        sellerId: req.params.sid,
      },
    });
    if (products.length) {
      res.status(200);
      res.json(products);
    } else {
      res.status(404);
      res.json(`could not find any products for seller ${req.params.sid}`);
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("Ran into error while trying to find seller products");
    }
  }
}

export async function getSellerInStockProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const products: ProductModel[] | [] = await ProductModel.findAll({
      where: {
        [Op.and]: [
          { sellerId: req.params.sid },
          {
            quantity: {
              [Op.gt]: 0,
            },
          },
        ],
      },
    });
    if (products.length) {
      res.status(200);
      res.json(products);
    } else {
      res.status(404);
      res.json(`could not find any products for seller ${req.params.sid}`);
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("Ran into error while trying to find seller products");
    }
  }
}
