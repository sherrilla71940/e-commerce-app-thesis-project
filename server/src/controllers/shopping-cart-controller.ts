import { default as ShoppingCart } from "../models/shopping-cart-model";
import { Request, Response } from "express";
import User from "../models/user-model";

// export async function addShoppingCart(req: Request, res: Response): Promise<void> {
//   console.log("add shopping cart endpoint reached", req.body);
//   try {
//     const product = await ShoppingCart.create(req.body);
//     res.status(201);
//     res.json(product);
//   } catch (e: unknown) {
//     if (e instanceof Error) {
//       console.log(e.message);
//       res.status(400);
//       res.json("ran into error while adding shopping cart");
//     }
//   }
// }

export async function addShoppingCart(userId: string): Promise<ShoppingCart | Error> {
  try {
    const newShoppingCart = await ShoppingCart.create({userId: userId});
    if (newShoppingCart) {
      return newShoppingCart
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      return e
    }
  }
}

export async function deleteShoppingCart(req: Request, res: Response): Promise<void> {
  console.log("delete shopping cart endpoint reached", req.body);
  try {
    const product = await ShoppingCart.destroy({
      where: {
        id: req.params.id
      }
    });
    if (product) {
      res.status(200);
      res.json(`successfully deleted shopping cart: ${req.params.id}`);
    } else {
      res.status(404);
      res.json("cannot delete non-existent shopping cart");
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error while deleting shopping cart");
    }
  }
}