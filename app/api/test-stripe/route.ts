import { stripe } from "../../lib/stripe";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const account = await stripe.accounts.retrieve(null);

    return NextResponse.json({
      success: true,
      id: account.id,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}