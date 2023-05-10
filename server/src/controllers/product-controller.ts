import { default as ProductModel } from "../models/product-model";
import { Request, Response } from "express";

export async function postProduct(req: Request, res: Response) {
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
      res.json("could not find tutors");
    }
  }
}
