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
  router.get("/product/:id", getProduct);
  router.put("/product/:id", updateProduct);
  router.delete("/product/:id", deleteProduct);
}
