import express from "express";
const { getAllUsers, postOneUser } = require('../controllers/usersController');


//import controllers

export default function usersRouter(router: express.Router) {
  router.get("/users", getAllUsers);

  router.post("/users", postOneUser);
}
