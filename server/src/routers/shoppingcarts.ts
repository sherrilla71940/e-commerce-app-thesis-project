import express from "express";
import { addToShoppingCart, deleteFromShoppingCart } from "../controllers/shopping-cart-controller";

//import controllers

export default function shoppingCartsRouter(router: express.Router) {
  router.get("/shoppingcarts", (req, res) => {
    res.json("all shoppingcarts here");
  });
  router.get("/shoppingcarts/:id", (req, res) => {
    res.json("get a specific shoppingcarts here");
  });
  router.put("shoppingcarts/:id", (req, res) => {
    res.json("update a shopping cart by id here");
  });
  
  router.post("/shoppingcarts", addToShoppingCart);

  router.delete("/shoppingcarts/:id", deleteFromShoppingCart);
}
