import express from "express";
import {
  getProducts,
  postProduct,
  getProduct,
  unlistProduct,
  updateProduct,
} from "../controllers/product-controller";

export default function productsRouter(router: express.Router) {
  router.post("/product", postProduct); // mvp 1
  router.get("/products/:id", getProduct); // mvp 2
  router.get("/products", getProducts); // mvp 3
  router.delete("/products/:id", unlistProduct); // mvp 4

  router.put("/products/:id", updateProduct);
}
