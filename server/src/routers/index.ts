import express from "express";

import usersRouter from "./users";
import productsRouter from "./products";
import shoppingCartsRouter from "./shoppingcarts";
import transactionsRouter from "./transactions";
import stripeRouter from "./stripecheckout"

const router = express.Router();

export default function configuredRouterGenerator(): express.Router {
  usersRouter(router);
  productsRouter(router);
  shoppingCartsRouter(router);
  transactionsRouter(router);
  stripeRouter(router);
  return router;
}
