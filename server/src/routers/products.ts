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
  router.get("/allproducts", getAllProducts); // gets all products including products whose seller has been deleted
  router.post("/product", postProduct); // mvp 1 done: gets a single product
  router.get("/products/:id", getProduct); // mvp 2 done: gets a product by product id, and only if seller still exists
  router.get("/products", getListedProducts); // mvp 3 done: gets all products where seller still exists
  router.delete("/products/:id", unlistProduct); // mvp 4 done: sets sellerid of a product to null, so products can still be accessed in transaction but are no longer listed
  router.get("/sellers/:sid", getSellerProducts); // gets all products a seller has listed, and searches by seller/user id
  router.put("/products/:id", updateProduct); // added mvp so we can update seller product by product id

  router.delete("/products", deleteAllProducts); // deleting ALL products in the database
}
