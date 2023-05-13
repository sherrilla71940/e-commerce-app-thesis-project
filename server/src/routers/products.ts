import express from "express";
import {
  getListedProducts,
  postProduct,
  getProduct,
  unlistProduct,
  updateProduct,
  deleteAllProducts,
  getSellerProducts,
  getAllProducts,
} from "../controllers/product-controller";

export default function productsRouter(router: express.Router) {
  router.get("/allproducts", getAllProducts);
  router.post("/product", postProduct); // mvp 1 done
  router.get("/products/:id", getProduct); // mvp 2 done
  router.get("/products", getListedProducts); // mvp 3 done
  router.delete("/products/:id", unlistProduct); // mvp 4 done
  router.get("/sellers/:sid", getSellerProducts);
  router.put("/products/:id", updateProduct); // added mvp so we can update seller product

  router.delete("/products", deleteAllProducts);
}
