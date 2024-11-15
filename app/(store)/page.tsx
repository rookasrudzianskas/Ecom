import Image from "next/image";
import {Button} from "@/components/ui/button";
import {getAllProducts} from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/products-view";
import {getAllCategories} from "@/sanity/lib/products/getAllCategories";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  // console.log(crypto.randomUUID().slice(0, 5) + `>>>> Rendered the home page with cache ${products.length} products and ${categories.length} categories`);

  return (
    <div className="">
      {/* render all the products */}
      <div className={'flex flex-col items-center justify-top min-h-screen bg-gray-100'}>
        <ProductsView products={products} />
      </div>
    </div>
  );
}
