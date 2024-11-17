import React from 'react';
import {Category, Product} from "@/sanity.types";
import ProductGrid from "@/components/product-grid";
import {CategorySelectorComponent} from "@/components/ui/category-selector";

interface ProductsViewProps {
  products: Product[];
  categories: Category[]; // replace with actual category type when available from Sanity schema
}

const ProductsView = ({products, categories}: ProductsViewProps) => {
  return (
    <div className={'flex flex-col'}>
      <div className={'w-full sm:w-[200px]'}>
        <CategorySelectorComponent categories={categories} />
      </div>
      <div className={'flex-1'}>
        <div>
          <ProductGrid products={products} />
          <hr className={'w-1/2 sm:w-3/4'} />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
// by Rokas with ❤️
