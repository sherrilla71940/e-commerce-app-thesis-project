import express from "express";
import {
  getProducts,
  postProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product-controller";

export default function productsRouter(router: express.Router) {
  router.get("/products", getProducts);
  router.post("/product", postProduct);
  router.get("/products/:id", getProduct);
  router.put("/products/:id", updateProduct);
  router.delete("/products/:id", deleteProduct);
}
