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
      res.json("could not create product in db");
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
      res.json("Error in finding products");
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
      throw new Error("product not found");
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json(`could not find product by id: ${req.params.id}`);
    }
  }
}
