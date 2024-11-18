import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";
import stripe from "@/lib/stripe";
import Stripe from "stripe";
import {Metadata} from "@/actions/createCheckoutSession";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const headersList = await headers();
  const sig = headersList.get("stripe-signature");

  if(!sig) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if(!webhookSecret) {
    console.log("No webhook secret");
    return NextResponse.json({ error: "No webhook secret" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (error) {
    console.error("Error constructing event:", error);
    return NextResponse.json({ error: "Error constructing event" }, { status: 400 });
  }

  if(event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      const order = await createOrderInSanity(session);
      console.log("Order created in Sanity:", order);
    } catch (error) {
      console.error("Error creating order in Sanity:", error);
      return NextResponse.json({ error: "Error creating order in Sanity" }, { status: 400 });
    };
  }

  return NextResponse.json({ received: true });

}

async function createOrderInSanity(session: Stripe.Checkout.Session) {
  const {
    id,
    amount_total,
    currency,
    metadata,
    payment_intent,
    customer,
    total_details,
  } = session;

  const { orderNumber, customerName, customerEmail, clerkUserId } = metadata as Metadata;

  const lineItemsWithProduct = await stripe.checkout.sessions.listLineItems(
    id,
    {
      expand: ["data.price.product"],
    }
  );


}
