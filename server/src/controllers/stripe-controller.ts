import { Request, Response } from "express";
import { stripe } from "../app";

export async function  stripeCheckout(req: Request, res: Response) {
  // console.log('adding product to shopping cart')

  const SUCCESS_DOMAIN = 'http://localhost:5173/checkoutsuccess'
  const YOUR_DOMAIN = 'http://localhost:5173/checkoutfail'

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: 'price_1N8iEJJKkXA9mV6aAybJZKKK',
          quantity: 3,
        },
      ],
      mode: 'payment',

      success_url: `${SUCCESS_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.json(session);
  } catch (error) {
    console.log(error)
    res.json('error on checkout')
  }
}