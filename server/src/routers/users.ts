import express from "express";
import {
  postUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/user-controller";

//import controllers

export default function usersRouter(router: express.Router) {
  router.get("/users", getUsers);
  router.get("/user/:id", getUser);
  router.post("/user", postUser);
  router.delete("/user/:id", deleteUser);
  router.put("/user/:id", updateUser);
}
