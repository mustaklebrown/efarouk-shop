import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setAddItemToCart } from '../features/CartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    // <div className="min-w-xs shadow-sm shadow-green-300 max-w-sm max-h-96 hover:bg-blue-900 hover:scale-105 duration-300 transition-all ">
    //   <Link href={`/products/${product.id}`} passHref>
    //     <div className="w-full h-auto max-h-52 block overflow-hidden cursor-pointer">
    //       <Image
    //         src={product?.imgs}
    //         alt={product?.name}
    //         width={800}
    //         height={700}
    //         quality={100}
    //         className="object-cover object-center  w-full h-full"
    //       />
    //     </div>
    //   </Link>
    //   <Link href={`/products/${product.id}`} passHref>
    //     <div className="flex justify-between px-6 md:px-3 my-4 cursor-pointer ">
    //       <h4 className="text-xl font-bold uppercase text-gray-200 ">
    //         {product?.name}
    //       </h4>
    //       <p className="text-xl font-bold uppercase text-gray-200 ">
    //         {' '}
    //         $ {product?.price}
    //       </p>
    //     </div>
    //   </Link>
    //   <div className="px-3">
    //     <button
    //       onClick={() => dispatch(setAddItemToCart(product))}
    //       className=" mb-3 w-full  uppercase  py-2 rounded-xl bg-yellow-400 hover:text-white font-semibold duration-300 transition hover:bg-yellow-700 text-black"
    //     >
    //       buy now
    //     </button>
    //   </div>
    // </div>
    <a href="#" className="group relative block overflow-hidden">
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <img
        src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
          New
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>

        <p className="mt-1.5 text-sm text-gray-700">$14.99</p>

        <form className="mt-4">
          <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
            Add to Cart
          </button>
        </form>
      </div>
    </a>
  );
};

export default Product;
