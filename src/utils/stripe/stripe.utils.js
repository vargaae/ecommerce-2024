import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);
