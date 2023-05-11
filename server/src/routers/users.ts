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
  router.get("/users/:id", getUser);
  router.post("/user", postUser);
  router.delete("/users/:id", deleteUser);
  router.put("/users/:id", updateUser);
}
