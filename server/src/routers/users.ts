import express from "express";
import {
  postUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  getSellers,
} from "../controllers/user-controller";

//import controllers

export default function usersRouter(router: express.Router) {
  router.get("/users", getUsers); // get all users including sellers and non-sellers
  router.get("/user/:id", getUser); // get user by user id
  router.post("/user", postUser); // ** Alejandra done **  add new user, in frontend remember to set isSeller to false as default
  router.delete("/users/:id", deleteUser); // deletes user, and sets sellerid of products listed by this seller to null in products table
  router.put("/users/:id", updateUser); // update user info
  router.get("/sellers", getSellers); // get all users where isSeller is true, meaning they have at least one product listed for sale
}
