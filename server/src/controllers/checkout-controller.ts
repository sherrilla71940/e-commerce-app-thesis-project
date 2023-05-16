import {
  Product as ProductModel,
  User as UserModel,
  TransactionBasket as TransactionBasketModel,
  TransactionBasketProduct as TransactionBasketProductModel,
} from "../models/models";
import { Request, Response } from "express";
import { Op } from "sequelize";

// step 1
async function createTransaction(buyerId: string) {
  // buyerId extracted from req.body
  try {
    const transaction = await TransactionBasketModel.create({
      buyerId: buyerId,
    });
  } catch (e) {
    console.log(e.message);
    console.log("error in createTransaction function");
  }
}

// step 2
async function createTransactionProduct(
  transactionId: number,
  productId: number
) {
  try {
    const transactionProduct = await TransactionBasketProductModel.create({
      transactionId: transactionId,
      productId: productId,
    });
  } catch (e) {
    console.log(e.message);
    console.log("error in createTransactionProduct function");
  }
}
// step 3
async function updateProductQuantityAfterTransaction(product: ProductModel) {
  // once quantity is 0, make 'inStock' to false <--- should add inStock properties to all products and when viewing seller products only view products that are inStock: true
  return;
}

// step 4 delete cart for user
