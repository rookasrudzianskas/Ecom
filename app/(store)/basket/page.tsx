"use client";

import React, {useState} from 'react';
import useBasketStore from "@/store/store";
import {useAuth, useUser} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import AddToBasketButton from "@/components/add-to-basket-button";
import Image from "next/image";
import {imageUrl} from "@/lib/imageUrl";

const BasketPage = ({}) => {
  const groupedItems = useBasketStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if(groupedItems.length === 0) {
    return (
      <div className={'container mx-auto p-4 flex flex-col items-center justify-center min-h-[50vh]'}>
        <h1 className={'text-2xl font-bold mb-6 text-gray-800'}>Your Basket</h1>
        <p className={'text-gray-600 text-lg'}>Your basket is empty</p>
      </div>
    )
  }

  return (
    <div className={'container mx-auto p-4 max-w-6xl'}>
      <h1 className={'text-2xl font-bold mb-4'}>Your Basket</h1>
      <div className={'flex flex-col lg:flex-row gap-8'}>
        <div className={'flex-grow'}>
          {groupedItems?.map((item) => (
            <div key={item.product._id} className={'mb-4 p-4 border rounded flex items-center justify-between'}>
              <div className={'flex items-center cursor-pointer flex-1 min-w-0'} onClick={() => router.push(`/product/${item.product.slug?.current}`)}>
                <div className={'w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 mr-4'}>
                  {item.product.image && (
                    <Image
                      src={imageUrl(item.product.image).url()}
                      alt={item.product.image ?? "Product Image"}
                      className={'w-full h-full object-cover rounded'}
                      width={96}
                      height={96}
                    />
                  )}
                </div>
                <div className={'min-w-0'}>
                  <h2 className={'text-lg sm:text-xl font-semibold truncate'}>{item.product.name}</h2>
                  <p className={'text-sm sm:text-base'}>
                    Price: $
                    {((item.product.price ?? 0) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className={'flex items-center ml-4 flex-shrink-0'}>
                <AddToBasketButton product={item.product}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
// by Rokas with ❤️
