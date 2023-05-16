import { default as ShoppingCart } from "../models/shopping-cart-model";
import { Request, Response } from "express";
import { addShoppingCart, deleteShoppingCart } from "./shopping-cart-controller";

import ShoppingCartProduct from "../models/shopping-cart-product-model";
import Product from "../models/product-model";

async function shoppingCartFinder(userId: string) {
  const shoppingCart = await ShoppingCart.findOne({
    where: {
      userId: userId
    }
  });

  return shoppingCart
}


export async function getOneShoppingCart(req: Request, res: Response) {
  const shoppingCart = await shoppingCartFinder(req.body.userId)
  res.json(shoppingCart)
  return shoppingCart
}

export async function getAllShoppingCarts(req: Request, res: Response) {
  const shoppingCarts = await ShoppingCart.findAll({})
  res.json(shoppingCarts)
  return shoppingCarts
}

async function addToShoppingCart(product: { shoppingCartId: number, productId: number, productQuantity: number }) {
  // console.log('adding product to shopping cart')
  try {
    const newShoppingCartProduct = await ShoppingCartProduct.create(product)
    return newShoppingCartProduct
  } catch (error) {
    return error
  }
}

export async function productFinder(req: Request, res: Response) {
  // console.log('adding product to shopping cart')

  try {
    const product = await Product.findOne({
      where: {
        id: req.body.productId
      }
    })

    // console.log(product)

    if (product.id) {
      res.json(product)
    }

    throw new Error('Cannot find product for this shopping cart')

  } catch (error) {
    return error
  }
}

// 1. find shopping cart based on userId
// 2. if shopping cart does not exist, i.e. it is the first product being added to the shopping cart
// 2.1. create shopping cart
// 2.2. add product to just created shopping cart
// 3. if shopping cart does exist, i.e. there already is a product in that shopping cart
// 3.1. add product to existing shopping cart


async function deleteFromShoppingCart(ids: { shoppingCartId: number, productId: number }) {
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

// export async function deleteProductFromShoppingCart(req: Request, res: Response): Promise<void> {

//   try {
//     const shoppingCart = await shoppingCartFinder(req.body.userId)
//     // console.log(shoppingCart)

//     if (shoppingCart) {

//       const allProductsInCart = await ShoppingCartProduct.findAll({
//         where: {
//           shoppingCartId: shoppingCart.id
//         }
//       })
//       console.log('TOTAL ITEMS: ', allProductsInCart.length)

//       const deletedBoolean = await deleteFromShoppingCart({shoppingCartId: shoppingCart.id, productId: req.body.productId})
//       // console.log(deletedBoolean)

//       if (allProductsInCart.length > 1) {
//         // 1. delete product from shopping cart
//         if (deletedBoolean === 0) {
//           console.log('there was more then 1 item in the card, but something went wrong')
//           res.status(400)
//           res.json('something went wrong when deleting from shopping cart')
//         } else if (deletedBoolean === 1) {
//           console.log('there was more then 1 item. Deleted with seccess.')
//           res.status(200)
//           res.json('successfully deleted from your shopping cart')
//         }
//       } else {
//         // 1. delete last product from shopping cart
//         // 2. delete shopping cart
//         if (deletedBoolean === 0) {
//           console.log('there was 1 item only, but something went wtrong')
//           res.status(400)
//           res.json('something went wrong when deleting from shopping cart')
//         } else if (deletedBoolean === 1) {
//           deleteShoppingCart(shoppingCart.id)
//           console.log('deleted last item from existing shopping cart')
//           res.status(200)
//           res.json('deleted last product from your shopping cart')
//         }
//       }
//     } else {
//       res.status(200)
//       res.json('there was no shoppping cart with no products')
//     }
//   } catch (e: unknown) {
//     if (e instanceof Error) {
//       console.log(e.message);
//       res.status(400);
//       res.json("ran into error while deleting product");
//     }
//   }
// }


// export async function getAllProductsFromShoppingCart (req: Request, res: Response) {
//   console.log('STAGE: 1')
//   try {
//     const shoppingCart = await shoppingCartFinder(req.body.userId)

//     const allShoppingCartProducts = await ShoppingCartProduct.findAll({
//       where: {
//         shoppingCartId: shoppingCart.id
//       }
//     })

//     res.status(200)
//     console.log('STAGE: 2')
//     res.send(allShoppingCartProducts)
//     return allShoppingCartProducts

//   } catch (error) {
//     return error
//   }
// }

export async function addProductToShoppingCart(req: Request, res: Response): Promise<void> {
  try {

    let shoppingCartId = null;

    const existingShoppingCart = await ShoppingCart.findOne({
      where: {
        userId: "1" // here comes userID
      }
    })

    shoppingCartId = existingShoppingCart?.id

    const hasShoppingCartId = shoppingCartId >= 1
    // console.log({hasShoppingCartId})

    if (!hasShoppingCartId) {
      // if shopping cart does NOT exist

      const newShoppingCart = await ShoppingCart.create({
        userId: "1"
      })
      // console.log('Shopping Cart does NOT exist', newShoppingCart.id)
      if (newShoppingCart.id) {
        shoppingCartId = newShoppingCart.id
      } else {
        throw new Error('error while creating shopping cart')
      }

    }

    // if shopping cart exists
    // maybe add here a check -> check if product id already exists in that shopping cart
    // if it does, do not allow repeated items
    // if it doesn't, add new item
    const newShoppingCartProduct = await addToShoppingCart({
      shoppingCartId, // id from shoppping cart
      productId: 1,
      productQuantity: 1
    })

    // console.log('NEW SC: ', newShoppingCartProduct)

    if (newShoppingCartProduct.id) {
      // console.log('Shopping Cart ID does exist', newShoppingCartProduct.id)
      res.json(newShoppingCartProduct)
    } else {
      throw new Error('error while adding product to shopping cart')
    }

  } catch (error) {
    console.log(error)
  }
}

export async function deleteProductFromShoppingCart(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
  try {

    let hasShoppingCartID = null;

    const shoppingCart = await ShoppingCart.findOne({
      include: [ShoppingCartProduct],
      where: {
        userId: "1" // here comes userID
      }
    })

    // console.log('SHOPPING CART: ', shoppingCart.id)

    hasShoppingCartID = shoppingCart?.id >= 1
    // console.log(hasShoppingCartID)

    if (hasShoppingCartID) {
      const isDeleted = await ShoppingCartProduct.destroy({
        where: {
          shoppingCartId: 1,
          productId: 1
        }
      })

      // console.log('isDeleted: ', isDeleted)
      return res.json(isDeleted)
    }

    throw new Error('Shopping Cart not found')

  } catch (error) {
    // send a response
    console.log(error)
    res.send(error)
  }
}

export async function getAllProductsFromShoppingCart(req: Request, res: Response) {
  try {

    let hasShoppingCartID = null;

    const shoppingCart = await ShoppingCart.findOne({
      include: [ShoppingCartProduct],
      where: {
        userId: "1" // here comes userID
      }
    })

    hasShoppingCartID = shoppingCart?.id >= 1
    // console.log(hasShoppingCartID)

    if (hasShoppingCartID) {
      const { shoppingCartProducts } = shoppingCart
      return res.json(shoppingCartProducts)
    }

    // send a response
    // code runs only if shopping cart DOES exist
    // console.log('CASE')
    res.json([])

  } catch (error) {
    // send a response
    console.log(error)
    res.json([])
  }
}