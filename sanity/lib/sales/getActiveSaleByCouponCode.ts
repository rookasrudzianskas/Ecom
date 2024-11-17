import {CouponCode} from "@/sanity/lib/sales/coupon-codes";
import {defineQuery} from "groq";
import {sanityFetch} from "@/sanity/lib/live";

export const getActiveSaleByCouponCode = async (couponCode: CouponCode) => {
  const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
    *[_type == "sale" && couponCode == $couponCode && isActive == true]
    | order(validFrom desc)[0]
  `);

  try {
    const activeSale = await sanityFetch({
      query: ACTIVE_SALE_BY_COUPON_QUERY,
      params: {
        couponCode,
      },
    });

    return activeSale ? activeSale.data : null;
  } catch (error) {
    console.error("Error fetching active sale by coupon code:", error);
    return null;
  }

}
