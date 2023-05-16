import {
  Product as ProductModel,
  User as UserModel,
  TransactionBasket as TransactionBasketModel,
  TransactionBasketProduct as TransactionBasketProductModel,
} from "../models/models";
import { Request, Response } from "express";
import { Op } from "sequelize";
import { ShoppingCartProductType } from "../../../global-types/index";

type requestCheckoutCart = {
  buyerId: string;
  cart: ShoppingCartProductType[];
};

// step 1
// note in frontend when checkout, send request to be with array of products to checkout
async function createTransaction({
  buyerId,
  cart,
}: requestCheckoutCart): Promise<number | Error> {
  // buyerId extracted from req.body
  try {
    // make sure that no product has an order count that exceeds quantity in stock
    cart.forEach(async (productObj) => {
      const product = await ProductModel.findOne({
        where: {
          id: productObj.productId,
        },
      });
      const productQuantity = product.quantity;
      if (productQuantity < productObj.productQuantity) {
        throw new Error("can't buy more of same product than what is in stock");
      }
    });

    const transaction = await TransactionBasketModel.create({
      buyerId: buyerId,
    });
    return transaction.id;
  } catch (e: unknown) {
    if (e instanceof Error) return e;
  }
}

// step 2, run this function for each product together with step 3
async function createTransactionProduct(
  transactionId: number,
  productId: number,
  purchaseQuantity: number
): Promise<TransactionBasketProductModel | Error> {
  try {
    const transactionProduct = await TransactionBasketProductModel.create({
      transactionId: transactionId,
      productId: productId,
      quantity: purchaseQuantity,
    });
    return transactionProduct;
  } catch (e: unknown) {
    if (e instanceof Error) return e;
  }
}
// step 3, run this function for each product
async function updateProductQuantityAfterTransaction(
  productId: number,
  purchaseQuantity: number
): Promise<ProductModel | Error> {
  // once quantity is 0, make 'inStock' to false <--- should add inStock properties to all products and when viewing seller products only view products that are inStock: true
  try {
    const product = await ProductModel.findOne({
      where: {
        id: productId,
      },
    });
    const preTransactionQuantity = product.quantity;
    product.set({
      quantity: preTransactionQuantity - purchaseQuantity,
    });
    const savedProduct = await product.save();
    return savedProduct;
  } catch (e: unknown) {
    // console.log(e.message);
    // console.log("error in updateProductQuantityAfterTransaction function");
    if (e instanceof Error) return e;
  }
}

// step 4 delete cart for user

// when users checkouts, he will send an array of products to buy
export async function checkout(req: Request, res: Response): Promise<void> {
  const cartToCheckout: requestCheckoutCart = req.body;
  try {
    const transactionId = await createTransaction(cartToCheckout);
    cartToCheckout.cart.forEach(async (product) => {
      await createTransactionProduct(
        transactionId as number,
        product.productId,
        product.productQuantity
      );
      await updateProductQuantityAfterTransaction(
        product.productId,
        product.productQuantity
      );

      // should delete cart
    });
  } catch (e) {
    console.log(e.message);
    res.status(400);
    res.json("ran into error in checkout");
  }
}
