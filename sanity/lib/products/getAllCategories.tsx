import {defineQuery} from "groq";
import {sanityFetch} from "@/sanity/lib/live";

export const getAllCategories = async () => {
  const ALL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"] | order(name asc)
  `
  );

  try {
    const categories = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
    });

    return categories.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
