import { defineQuery } from "groq";
import { sanityFetch } from "@/sanity/lib/live";

export async function getMyOrders(userId: string) {
  if (!userId) {
    throw new Error("Invalid user ID");
  }

  const MY_ORDERS_QUERY = defineQuery(`
    *[_type == "order" && clerkUserId == $userId] | order(orderDate desc) {
      ...,
      products[] {
        ...,
        product-> {
          ...
        }
      }
    }
  `);

  try {
    // Execute the query using sanityFetch
    const result = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    });

    // Return the data or an empty array
    return result || [];
  } catch (error) {
    console.error("Error fetching my orders:", error);
    throw new Error("Error fetching my orders");
  }
}
