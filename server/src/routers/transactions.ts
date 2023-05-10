import express from "express";
const { getAllTransactions, postOneTransaction } = require('../controllers/transactionsController');

//import controllers

export default function transactionsRouter(router: express.Router) {
  router.get("/transactions", getAllTransactions
  // (req, res) => {
  //   res.json("all transactions here");
  // }
  );
  router.get("/transactions/:id", (req, res) => {
    res.json("get a specific transaction here");
  });
  router.put("transactions/:id", (req, res) => {
    // probably shouldnt change
    res.json("update a transaction by id here");
  });
  router.post("/transactions", postOneTransaction
  // (req, res) => {
  //   res.json("post a transaction here and transaction will recieve id");
  // }
  );
  router.delete("transactions/:id", (req, res) => {
    res.json("delete a transaction by id here");
  });
}
