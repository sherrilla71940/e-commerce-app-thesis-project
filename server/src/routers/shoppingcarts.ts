import express from "express";
import { addShoppingCart, deleteShoppingCart } from "../controllers/shopping-cart-controller";
import { addProductToShoppingCart, deleteProductFromShoppingCart, getAllProductsFromShoppingCart, getOneShoppingCart } from "../controllers/shopping-cart-product-controller";
//import controllers

export default function shoppingCartsRouter(router: express.Router) {
  router.get("/shoppingcarts", (req, res) => {
    res.json("all shoppingcarts here");
  });

  router.put("shoppingcarts/:id", (req, res) => {
    res.json("update a shopping cart by id here");
  });

  // get one specific shopping cart
  router.post("/getoneshoppingcart", getOneShoppingCart);

  // Add Product to shopping cart
  router.post("/shoppingcart", addProductToShoppingCart);

  // Add Product to shopping cart
  router.delete("/shoppingcart", deleteProductFromShoppingCart);

  // Get all Products from shopping cart
  router.get("/shoppingcart", getAllProductsFromShoppingCart);

}
