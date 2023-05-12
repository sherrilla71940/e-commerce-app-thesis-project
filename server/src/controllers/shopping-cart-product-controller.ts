import { default as ShoppingCart } from "../models/shopping-cart-model";
import { Request, Response } from "express";
import { addShoppingCart } from "./shopping-cart-controller";

import ShoppingCartProduct from "../models/shopping-cart-product-model";

async function shoppingCartFinder (userId: string) {
  const shoppingCart = await ShoppingCart.findOne({
    where: {
      userId: userId
    }
  });

  return shoppingCart
}

async function addToShoppingCart (product: { shoppingCartId: number, productId: number, productQuantity: number}) {
  // console.log('adding product to shopping cart')
  try {
    const newShoppingCartProduct = await ShoppingCartProduct.create(product)
    return newShoppingCartProduct
  } catch (error) {
    return error
  }
}



export async function addProductToShoppingCart(req: Request, res: Response): Promise<void> {
  // console.log("add product to shopping cart endpoint reached", req.body);

  // 1. find shopping cart based on userId
  // 2. if shopping cart does not exist, i.e. it is the first product being added to the shopping cart
  // 2.1. create shopping cart
  // 2.2. add product to just created shopping cart
  // 3. if shopping cart does exist, i.e. there already is a product in that shopping cart
  // 3.1. add product to existing shopping cart

  console.log(req.body.userId)

  try {
    const shoppingCart = await shoppingCartFinder(req.body.userId)

    if (shoppingCart) {
      await addToShoppingCart({
        shoppingCartId: shoppingCart.id,
        productId: req.body.productId,
        productQuantity: req.body.productQuantity
      })
      console.log('added successfully in existing shopping cart')
      res.status(200)
      res.send('added successfully to your shopping cart')
    } else {
      const newShoppingCart = await addShoppingCart(req.body.userId)
      if ('id' in newShoppingCart) {
        await addToShoppingCart({
          shoppingCartId: newShoppingCart.id,
          productId: req.body.productId,
          productQuantity: req.body.productQuantity
        })
        console.log('added successfully in newly created shopping cart')
        res.status(200)
        res.send('added successfully to your shopping cart')
      }
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error while adding product to the cart");
    }
  }
}


async function deleteFromShoppingCart (ids: {shoppingCartId: number, productId: number}) {
  try {
    const res = await ShoppingCartProduct.destroy({
      where: {
        shoppingCartId: ids.shoppingCartId,
        productId: ids.productId,
      }
    })
    return res
  } catch (error) {
    return error
  }
}

export async function deleteProductFromShoppingCart(req: Request, res: Response): Promise<void> {

  try {
    const shoppingCart = await shoppingCartFinder(req.body.userId)
    // console.log(shoppingCart)

    if (shoppingCart) {
      const deletedBoolean = await deleteFromShoppingCart({shoppingCartId: shoppingCart.id, productId: req.body.productId})
      // console.log(deletedBoolean)
      if (deletedBoolean === 0) {
        console.log('something went wrong when deleting from shopping cart')
        res.status(400)
        res.send('something went wrong when deleting from shopping cart')
      } else if (deletedBoolean === 1) {
        console.log('deleted successfully from existing shopping cart')
        res.status(200)
        res.send('deleted successfully from your shopping cart')
      }
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error while deleting product");
    }
  }
}


export async function getAllProductsFromShoppingCart (req: Request, res: Response) {
  // console.log('adding product to shopping cart')
  try {
    const shoppingCart = await shoppingCartFinder(req.body.userId)

    const allShoppingCartProducts = await ShoppingCartProduct.findAll({
      where: {
        shoppingCartId: shoppingCart.id
      }
    })

    res.status(200)
    res.send(allShoppingCartProducts)
    return allShoppingCartProducts

  } catch (error) {
    return error
  }
}