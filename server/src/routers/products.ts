import express from "express";
import {
  getProducts,
  postProduct,
  getProduct,
  unlistProduct,
  updateProduct,
  deleteAllProducts,
} from "../controllers/product-controller";

export default function productsRouter(router: express.Router) {
  router.post("/product", postProduct); // mvp 1 done
  router.get("/products/:id", getProduct); // mvp 2 done
  router.get("/products", getProducts); // mvp 3 done
  router.delete("/products/:id", unlistProduct); // mvp 4 done

  router.delete("/products", deleteAllProducts);
  router.put("/products/:id", updateProduct); // not mvp and not integrated with current flow
}
