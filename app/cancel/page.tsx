import Link from "next/link";
import { XCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          {/* Cancel Icon */}
          <div className="flex justify-center">
            <div className="rounded-full bg-red-100 p-4">
              <XCircle className="h-20 w-20 text-red-600" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold text-gray-900">
            Payment Cancelled
          </h1>

          <p className="mt-3 text-gray-600">
            Your payment was not completed. Don't worry — no charges have
            been processed and you can try again anytime.
          </p>

          {/* Status Card */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 text-left">
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Status</span>
              <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                Cancelled
              </span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-gray-500">Payment</span>
              <span className="font-medium text-gray-800">
                Not Completed
              </span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-gray-500">Charges</span>
              <span className="font-medium text-green-600">
                ₹0.00
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="flex-1 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Try Again
            </Link>

            <Link
              href="/"
              className="flex-1 rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Back to Home
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            If you experienced any issues during checkout, please contact
            support for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}