"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const initialItems = [
  {
    id: 1,
    name: "iPhone 17",
    description: "256GB • Mist Blue • 1 Year Warranty",
    price: 81999,
    image:
      "https://res.cloudinary.com/ddp5x6jrx/image/upload/f_auto,q_auto/iphon17-mist-blue_rz2xth",
    quantity: 1,
  },
  {
    id: 2,
    name: "AirPods Pro",
    description:
      "Active Noise Cancellation, Transparency mode, and up to 24 hours of battery life.",
    price: 24999,
    image:
      "https://res.cloudinary.com/ddp5x6jrx/image/upload/v1780403719/airpod_ejizqh.jpg",
    quantity: 1,
  },
];

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function Home() {
  async function handleCheckout() {
    const response = await fetch(
      "/api/create-checkout-session",
      {
        method: "POST",
      }
    );

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error);
    }
  }

  const [items, setItems] = useState(initialItems);

  const updateQuantity = (id: number, type: "inc" | "dec") => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        const quantity =
          type === "inc"
            ? item.quantity + 1
            : Math.max(1, item.quantity - 1);

        return { ...item, quantity };
      })
    );
  };

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [items]
  );

  const shipping = 0;
  const total = subtotal + shipping;

  return (


    <div className="min-h-screen bg-gray-50">
      
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-[#022c22] via-[#064e3b] to-[#065f46] p-8 text-white shadow-2xl">
          <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
            Demo Project
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Stripe Payment Demo
          </h1>

          <p className="mt-3 text-base leading-relaxed text-indigo-100 sm:text-lg">
            Stripe payment integration using Next.js and Stripe Checkout for a secure payment.
          </p>
      </div>


        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Shopping Cart
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-6 lg:col-span-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="relative h-32 w-32 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center rounded-lg border border-gray-300">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, "dec")
                          }
                          className="px-4 py-2 text-lg hover:bg-gray-100"
                        >
                          −
                        </button>

                        <span className="min-w-[40px] text-center font-medium">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, "inc")
                          }
                          className="px-4 py-2 text-lg hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatPrice(item.price)} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <button 
              onClick={handleCheckout}
              className="mt-6 w-full rounded-xl bg-black py-3 font-medium text-white transition hover:bg-gray-800">
                Proceed to Checkout
              </button>

              <p className="mt-4 text-center text-sm text-gray-500">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


