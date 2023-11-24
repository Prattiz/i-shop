import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";
import { ProductProps } from "../../context/context";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const { product } = req.body as {product: ProductProps[]};

    if(req.method !== 'POST'){
        return res.status(405).json({
            error: 'Method not allowed'
        })
    };
    if(!product){
        return res.status(408).json({
            error: 'Price not found'
        })
    }
    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_URL}`

    const checkOutSection = await stripe.checkout.sessions.create({

        success_url: successUrl,
        cancel_url: cancelUrl,
        mode:'payment',

        line_items: product.map(product => ({
            quantity: 1,
            price: product.defaultPriceId
        }))
    })
    return res.status(201).json({
        checkOutUrl: checkOutSection.url,
    })
      
    
}