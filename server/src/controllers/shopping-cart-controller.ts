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

export async function deleteShoppingCart(shoppingCartId): Promise<number | Error> {
  
  try {
    const deletedShoppingCart = await ShoppingCart.destroy({
      where: {
        id: shoppingCartId
      }
    });
    if (deletedShoppingCart) {
      return deletedShoppingCart
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      return e
      // console.log(e.message);
      // res.status(400);
      // res.json("ran into error while deleting shopping cart");
    }
  }
}