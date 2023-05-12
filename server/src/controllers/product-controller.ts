import { Product as ProductModel, User as UserModel } from "../models/models";
import { Request, Response } from "express";
import { Op } from "sequelize";

export async function postProduct(req: Request, res: Response): Promise<void> {
  console.log("post product endpoint reached", req.body);
  try {
    const product = await ProductModel.create(req.body);
    const User = await UserModel.findOne({
      where: {
        id: req.body.sellerId,
      },
    });
    User.set({
      isSeller: true,
    });
    await User.save();
    res.status(201);
    res.json(product);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error while creating product");
    }
  }
}

export async function getProducts(req: Request, res: Response): Promise<void> {
  try {
    const products = await ProductModel.findAll({
      where: {
        sellerId: {
          [Op.ne]: null,
        },
      },
    });
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
    const product = await ProductModel.findOne({
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
  console.log("delete product by id endpoint reached");
  try {
    const foundProduct = await ProductModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (foundProduct) {
      foundProduct.set({
        sellerId: null,
      });
      await foundProduct.save();
      const userHasMoreProducts = await ProductModel.findOne({
        where: {
          sellerId: req.params.sellerId,
        },
      });
      if (!userHasMoreProducts) {
        const user = await UserModel.findOne({
          where: {
            id: req.params.sellerId,
          },
        });
        user.set({ isSeller: false });
        await user.save();
      }
      res.status(200);
      res.json(`successfully unlisted product for seller: ${req.params.id}`);
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
    const foundProduct = await ProductModel.findOne({
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
