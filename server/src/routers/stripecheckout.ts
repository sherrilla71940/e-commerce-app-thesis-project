import express from "express";
import { stripeCheckout } from '../controllers/stripe-controller'

//import controllers

export default function stripeRouter(router: express.Router) {

  router.post("/checkout", stripeCheckout);

}
