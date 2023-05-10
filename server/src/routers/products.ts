import express from "express";
import { getProducts } from "../controllers/product-controller";
import { postProduct } from "../controllers/product-controller";
import { getProduct } from "../controllers/product-controller";

export default function productsRouter(router: express.Router) {
  router.get("/products", getProducts);
  router.post("/product", postProduct);
  router.get("/products/:id", getProduct);

  router.put("products/:id", (req, res) => {
    res.json("update a product by id here");
  });
  router.delete("products/:id", (req, res) => {
    res.json("delete a product by id here");
  });
}
