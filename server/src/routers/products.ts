import express from "express";

export default function productsRouter(router: express.Router) {
  router.get("/products", (req, res) => {
    res.json("all products here");
  });
  router.get("/products/:id", (req, res) => {
    res.json("get a specific product here");
  });
  router.put("products/:id", (req, res) => {
    res.json("update a product by id here");
  });
  router.post("/product", (req, res) => {
    res.json("post a product here and product will recieve id");
  });
  router.delete("products/:id", (req, res) => {
    res.json("delete a product by id here");
  });
}
