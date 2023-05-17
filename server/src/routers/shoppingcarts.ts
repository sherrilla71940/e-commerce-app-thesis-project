import express from "express";
import {
  addShoppingCart,
  deleteShoppingCart,
} from "../controllers/shopping-cart-controller";
import {
  addProductToShoppingCart,
  deleteProductFromShoppingCart,
  getAllProductsFromShoppingCart,
  getOneShoppingCart,
  getAllShoppingCarts,
  productFinder,
} from "../controllers/shopping-cart-product-controller";
//import controllers

export default function shoppingCartsRouter(router: express.Router) {
  router.put("shoppingcarts/:id", (req, res) => {
    res.json("update a shopping cart by id here");
  });

  // get all shopping carts
  router.get("/getallshoppingcarts", getAllShoppingCarts);

  // get one specific shopping cart
  // router.post("/getoneshoppingcart", getOneShoppingCart);
  router.get("/getoneshoppingcart/:uid", getOneShoppingCart); // mvp

  // Add Product to shopping cart
  router.post("/shoppingcart", addProductToShoppingCart); //mvp  ** Alejandra done **

  // Delete Product from shopping cart
  router.delete("/shoppingcart", deleteProductFromShoppingCart); // ** Alejandra done **
  // need to checkout how the front end requests this endpoint, because a cart should be
  // deleted when there are no more products in cart, or after checkout, or when user is deleted

  // Get all Products from shopping cart
  router.get("/shoppingcartproducts/:uid", getAllProductsFromShoppingCart); // ** Alejandra done **

  // Get one Product
  // router.post("/shoppingcartproduct", productFinder);
  router.get("/shoppingcartproduct/:pid", productFinder);
}
