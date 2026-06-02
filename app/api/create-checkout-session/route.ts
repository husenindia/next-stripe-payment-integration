import { stripe } from "../../lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      custom_text: {
        submit: {
          message:
            "Enter 4242 4242 4242 4242 Sample Card Details, Expiry future month and year, CVV any 3 digit code.",
        },
      },
      customer_email: "customeremail@prefetch.com",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "iPhone 17",
              description: "256GB • Mist Blue • 1 Year Warranty",
              images: [
                "https://res.cloudinary.com/ddp5x6jrx/image/upload/f_auto,q_auto/iphon17-mist-blue_rz2xth",
              ],

            },            
            unit_amount: 81999 * 100, 
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "AirPods Pro",
              description: "Active Noise Cancellation, Transparency mode, and up to 24 hours of battery life.",
              images: [
                "https://res.cloudinary.com/ddp5x6jrx/image/upload/v1780403719/airpod_ejizqh.jpg",
              ],
            },
            unit_amount: 24999 * 100,            
          },
          quantity: 1,
          
      },
      
      ],
      success_url: "${origin}/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "${origin}/cancel",
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}