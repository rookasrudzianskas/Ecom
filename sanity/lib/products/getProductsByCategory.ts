import {defineQuery} from "groq";
import {sanityFetch} from "@/sanity/lib/live";

export const getProductsByCategory = async (categorySlug: string)=> {
  const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`
    *[
      _type == "product"
      && references(*[_type == "category" && slug.current == $categorySlug]._id)
    ] | order(name asc)
  `);

  try {
    const products = await sanityFetch({
      query: PRODUCTS_BY_CATEGORY_QUERY,
      params: {
        category: categorySlug,
      },
    });

    return products.data || [];
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
}
