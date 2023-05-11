// testing git workflow

import express from "express";
// import router from "./routers";
import configuredRouterGenerator from "./routers";
import cors from "cors";
// import db from './database/db'
export const app = express();
export const port = 3000;

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  // credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(configuredRouterGenerator());
