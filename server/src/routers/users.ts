import express from "express";

//import controllers

export default function usersRouter(router: express.Router) {
  router.get("/users", (req, res) => {
    res.send("what's up doc ?!");
  });
}
