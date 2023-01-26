import Link from 'next/link';
import React from 'react';

const Success = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-8xl font-bold">Thank You</h1>
        <p className="text-center text-2xl mb-4">Order Placed Successfully</p>

        <Link href="/" passHref>
          <a className="bg-yellow-400 text-center uppercase font-semibold text-white py-4 px-12 mt-4 hover:bg-yellow-600 cursor-pointer">
            Continue Shopping
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Success;
