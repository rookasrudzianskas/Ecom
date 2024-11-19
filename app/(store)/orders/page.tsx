import React from 'react';
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

const Orders = async ({}) => {
  const {userId} = await auth();

  if(!userId) {
    return redirect('/')
  }

  return (
    <div>

    </div>
  );
};

export default Orders;
// by Rokas with ❤️
