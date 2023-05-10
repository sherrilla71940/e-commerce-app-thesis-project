import express from "express";
import { postUser, getUsers } from "../controllers/user-controller";

//import controllers

export default function usersRouter(router: express.Router) {
  router.get("/users", getUsers);
  router.post("/user", postUser);
}
