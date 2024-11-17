import {sanityFetch} from "@/sanity/lib/live";

export const getProductBySlug = async (slug: string) => {
  const PRODUCT_BY_ID_QUERY = `*[_type == "product" && slug.current == $slug] | order(name asc) [0]`;

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_ID_QUERY,
      params: {
        slug,
        },
      });

      return product.data || [];
    } catch (error) {
      console.error("Error fetching product by slug:", error);
      return [];
  }
}
