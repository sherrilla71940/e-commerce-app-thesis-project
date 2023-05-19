import {
  Product as ProductModel,
  User as UserModel,
  TransactionBasket as TransactionBasketModel,
  TransactionBasketProduct as TransactionBasketProductModel,
  // ShoppingCartProduct as ShoppingCartProductModel,
  ShoppingCart as ShoppingCartModel,
  ShoppingCartProduct as ShoppingCartProductModel,
} from "../models/models";
import { Request, Response } from "express";
import { Op } from "sequelize";
import { ShoppingCartProductType } from "../../../global-types/index";

import {
  type requestCheckoutCart,
  createTransaction,
  createTransactionProduct,
  updateProductQuantityAfterTransaction,
  deleteShoppingCart,
} from "./checkout-controller-helpers";

// when users checkouts, he will send req.body to backend that matches requestCheckoutCart type
// set up shoppingcartmodel to use cascade affect in sequelize to delete all shopping cart product when shopping cart is deleted
export default async function checkOutCart(
  req: Request,
  res: Response
): Promise<void> {
  const cartToCheckout: requestCheckoutCart = req.body;
  try {
    if (!cartToCheckout.cartId) throw new Error("missing cart id");
    // loop through products in cart and create transaction if no products in cart quantity > quantity in stock
    const transactionId = await createTransaction(cartToCheckout);
    // for each product in cart to checkout, run two helper functions
    const cartToCheckoutProducts = await ShoppingCartProductModel.findAll({
      where: {
        shoppingCartId: cartToCheckout.cartId,
      },
    });
    if (!cartToCheckoutProducts.length) {
      throw new Error("no products in cart, cannot checkout empty cart");
    }
    cartToCheckoutProducts.forEach(async (product) => {
      // creates transaction product in transaction product table
      await createTransactionProduct(
        transactionId as number,
        product.productId,
        product.productQuantity
      );
      // update quantity of product in products table
      await updateProductQuantityAfterTransaction(
        product.productId,
        product.productQuantity
      );

      // deletes shopping cart now that transaction is complete
      await deleteShoppingCart(cartToCheckout.cartId);
    });
    res.status(200);
    res.json(
      `created transaction: ${transactionId} with products: ${cartToCheckoutProducts}`
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error in checkout");
    }
  }
}
