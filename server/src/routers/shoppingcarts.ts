import express from "express";

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
  router.post("/shoppingcarts", (req, res) => {
    res.json("post a shopping cart here and shoppingcarts will recieve id");
  });
  router.delete("shoppingcarts/:id", (req, res) => {
    res.json("delete a shopping cart by id here");
    // use-case: maybe when user is deleted also delete shopping cart?
  });
}
