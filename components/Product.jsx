import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setAddItemToCart } from '../features/CartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="min-w-xs shadow-sm shadow-green-300 max-w-sm max-h-96 hover:bg-blue-900 hover:scale-105 duration-300 transition-all ">
      <Link href={`/products/${product.id}`} passHref>
        <div className="w-full h-auto max-h-52 block overflow-hidden cursor-pointer">
          <Image
            src={product?.imgs}
            alt={product?.name}
            width={800}
            height={700}
            quality={100}
            className="object-cover object-center  w-full h-full"
          />
        </div>
      </Link>
      <Link href={`/products/${product.id}`} passHref>
        <div className="flex justify-between px-6 md:px-3 my-4 cursor-pointer ">
          <h4 className="text-xl font-bold uppercase text-gray-200 ">
            {product?.name}
          </h4>
          <p className="text-xl font-bold uppercase text-gray-200 ">
            {' '}
            $ {product?.price}
          </p>
        </div>
      </Link>
      <div className="px-3">
        <button
          onClick={() => dispatch(setAddItemToCart(product))}
          className=" mb-3 w-full  uppercase  py-2 rounded-xl bg-yellow-400 hover:text-white font-semibold duration-300 transition hover:bg-yellow-700 text-black"
        >
          buy now
        </button>
      </div>
    </div>
  );
};

export default Product;
