# Stripe Payment Integration Demo with Next.js

A simple and secure payment integration demo built using **Next.js** and **Stripe Checkout**.

## Live Demo

🌐 **Demo URL:** https://next-stripe-payment-integration.vercel.app

## Overview

This project demonstrates how to integrate **Stripe Payments** into a **Next.js** application using Stripe's hosted Checkout page. Instead of collecting payment details directly within the application, users are redirected to Stripe's secure, PCI-compliant checkout experience for payment processing.

## Features

* ✅ Built with Next.js
* ✅ Secure Stripe Checkout integration
* ✅ Hosted payment page powered by Stripe
* ✅ PCI-compliant payment flow
* ✅ Fast and responsive user experience
* ✅ Easy deployment on Vercel

## How It Works

1. User clicks the payment button.
2. The application creates a Stripe Checkout Session on the server.
3. User is redirected to Stripe's secure hosted checkout page.
4. Payment is processed securely by Stripe.
5. User is redirected back to the application after successful payment or cancellation.

## Tech Stack

* Next.js
* Stripe Checkout
* TypeScript / JavaScript
* Vercel

## Security

This demo uses Stripe's hosted Checkout page, ensuring that sensitive payment information is handled directly by Stripe rather than the application. This approach simplifies PCI compliance requirements and follows industry best practices for online payments.

## Local Development

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key
```

### Run the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Deployment

Deploy easily using Vercel:

```bash
vercel deploy
```

## Live Preview

👉 https://next-stripe-payment-integration.vercel.app

## Developer Information

**Developer:** Husen Telwala

* Full Stack Developer
* Specialized in Next.js, React, Node.js, and Payment Gateway Integrations
* Experience with Stripe, Razorpay, REST APIs, and Cloud Deployments

## License

This project is available for educational, learning, and demonstration purposes.


## Developer Information

**Husen Telwala**
Full Stack Developer specializing in modern web applications, payment gateway integrations, and cloud deployments.

### Connect With Me

* 🌐 Portfolio: https://husentelwalainfo.github.io/
* 💻 GitHub: https://github.com/husenindia

### Projects & Contributions

Feel free to explore my repositories and projects on GitHub:

👉 https://github.com/husenindia

For more information about my work, experience, and portfolio:

👉 https://husentelwalainfo.github.io/
