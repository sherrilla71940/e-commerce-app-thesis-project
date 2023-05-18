import { Request, Response } from "express";
import { stripe } from "../app";

const checkout = async (priceId) => {
  const SUCCESS_DOMAIN = 'http://localhost:5173/'
  const FAIL_DOMAIN = 'http://localhost:5173/checkoutfail'

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 3,
        },
      ],
      mode: 'payment',

      success_url: `${SUCCESS_DOMAIN}?success=true`,
      cancel_url: `${FAIL_DOMAIN}?canceled=true`,
    });

    // res.json(session);
    return session
  } catch (error) {
    console.log(error)
    // res.json('error on checkout')
    return 'error on checkout'
  }
}

const price = async (productPrice) => {
  try {
    const price = await stripe.prices.create({
      unit_amount: productPrice,
      currency: 'usd',
      product_data: {
        name: 'testing product'
      }
    });

    return price
  } catch (error) {
    return 'error on price'
  }
}

export async function  stripeCheckout(req: Request, res: Response) {
  const priceRes = await price(req.body.price)
  const checkoutRes = await checkout(priceRes.id)
  res.json(checkoutRes)
}