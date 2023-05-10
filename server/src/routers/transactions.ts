import express from "express";
const { getAllTransactions, postOneTransaction, findOneTransaction, updateOneTransaction } = require('../controllers/transactionsController');

//import controllers

export default function transactionsRouter(router: express.Router) {
  router.get("/transactions", getAllTransactions);

  router.post("/transactions", postOneTransaction);

  router.post("/transactions/:id", findOneTransaction);

  router.put("/transactions/:id", updateOneTransaction);

  router.delete("/transactions/:id", (req, res) => {
    res.json("delete a transaction by id here");
  });
}
