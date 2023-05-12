import { default as ShoppingCart } from "../models/shopping-cart-model";
import { Request, Response } from "express";
import User from "../models/user-model";

export async function addToShoppingCart(req: Request, res: Response): Promise<void> {
  console.log("add product to shopping cart endpoint reached", req.body);
  try {
    const product = await ShoppingCart.create(req.body);
    res.status(201);
    res.json(product);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error while adding product to the cart");
    }
  }
}

export async function deleteFromShoppingCart(req: Request, res: Response): Promise<void> {
  console.log("delete product from shopping cart endpoint reached", req.body);
  try {
    const product = await ShoppingCart.destroy({
      where: {
        id: req.params.id
      }
    });
    if (product) {
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
      res.json("ran into error while deleting product from the cart");
    }
  }
}