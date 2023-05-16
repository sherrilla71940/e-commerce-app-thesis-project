import {
  Product as ProductModel,
  User as UserModel,
  TransactionBasket as TransactionBasketModel,
  TransactionBasketProduct as TransactionBasketProductModel,
} from "../models/models";
import { Request, Response } from "express";
import { Op } from "sequelize";
import { ShoppingCartProductType } from "../../../global-types/index";

// type cart {
//   id: number,

// }

// step 1
// note in frontend when checkout, send request to be with array of products to checkout
async function createTransaction(
  buyerId: string,
  cart: ShoppingCartProductType[]
) {
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
  } catch (e) {
    console.log(e.message);
    console.log("error in createTransaction function");
  }
}

// step 2, run this function for each product together with step 3
async function createTransactionProduct(
  transactionId: number,
  productId: number,
  purchaseQuantity: number
) {
  try {
    const transactionProduct = await TransactionBasketProductModel.create({
      transactionId: transactionId,
      productId: productId,
      quantity: purchaseQuantity,
    });
  } catch (e) {
    console.log(e.message);
    console.log("error in createTransactionProduct function");
  }
}
// step 3, run this function for each product
async function updateProductQuantityAfterTransaction(
  productId: number,
  purchaseQuantity: number
) {
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
    await product.save();
  } catch (e) {
    console.log(e.message);
    console.log("error in updateProductQuantityAfterTransaction function");
  }
}

// step 4 delete cart for user
