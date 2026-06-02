import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { stripe } from "../lib/stripe";

export default async function SuccessPage(
    { searchParams, }: 
    { searchParams: Promise<{ session_id?: string }>;}
  ) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return <div>Invalid Session</div>;
  }

const session = await stripe.checkout.sessions.retrieve(session_id);

const transactionId =
  typeof session.payment_intent === "string" ? 
      session.payment_intent : session.payment_intent?.id;
    
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="rounded-full bg-green-100 p-4 animate-pulse">
              <CheckCircle className="h-20 w-20 text-green-600" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold text-gray-900">
            Payment Successful 🎉
          </h1>

          <p className="mt-3 text-gray-600">
            Thank you for your purchase. Your payment has been processed
            successfully and your account has been activated.
          </p>

          {/* Order Card */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 text-left">
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Transaction ID</span>
              <span className="font-medium">{transactionId}</span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-gray-500">Amount Paid</span>
              <span className="font-semibold text-green-600">
                {(session.amount_total ?? 0) / 100} {session.currency?.toUpperCase()}
              </span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-gray-500">Status</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                {session.payment_status}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="flex-1 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Go to Dashboard
            </Link>

            <Link
              href="/invoice"
              className="flex-1 rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              View Invoice
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            A confirmation email has been sent to your registered email
            address.
          </p>
        </div>
      </div>
    </div>
  );
}