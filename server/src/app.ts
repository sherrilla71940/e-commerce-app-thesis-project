// testing git workflow

import express from "express";
import router from "./routers";
// import db from './database/db'

export const app = express();
export const port = 3000;

app.use(router());
