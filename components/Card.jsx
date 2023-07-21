import Link from 'next/link';
import React from 'react';

const CardProduct = ({ product, onAddToCart }) => {
  const divStyle = {
    backgroundImage: `url(${product.imgs})`,
    width: '100%',
    height: '300px', // Set the desired height for the image container
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className="flex max-w-[450px]  flex-col items-center justify-center w-full ">
      <Link href={`/products/${product.id}`} className="cursor-pointer">
        <div
          className="w-full h-64 bg-gray-300 bg-center cursor-pointer bg-cover rounded-lg shadow-md"
          style={divStyle}
        ></div>
      </Link>

      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {product.name}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200">
            ${product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="px-3 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-yellow-600 rounded hover:bg-yellow-700 dark:hover:bg-yellow-600 focus:bg-yellow-700 dark:focus:bg-gray-600 focus:outline-none"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
