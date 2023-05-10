import { default as ProductModel } from "../models/product-model";
import { Request, Response } from "express";

export async function postProduct(req: Request, res: Response) {
  console.log("post product endpoint reached", req.body);
  try {
    const product = await ProductModel.create(req.body);
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

export async function getProducts(req: Request, res: Response) {
  try {
    const products = await ProductModel.findAll({});
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

export async function getProduct(req: Request, res: Response) {
  try {
    const product = await ProductModel.findOne({
      where: {
        id: req.params.id,
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

export async function deleteProduct(req: Request, res: Response) {
  console.log("delete product by id endpoint reached");
  try {
    const deletedProduct = await ProductModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedProduct) {
      res.status(200);
      res.json(`successfully deleted product: ${req.params.id}`);
    } else {
      res.status(404);
      res.json("cannot delete non-existent product");
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("error encountered when deleting product");
    }
  }
}

export async function updateProduct(req: Request, res: Response) {
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
