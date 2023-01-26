import React from 'react';
// import data from '../data/data';
import Product from './Product';
import data from '../data/data.json';

const Products = () => {
  return (
    <div id="products" className="max-w-6xl mx-auto px-20 my-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold  uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-400  to-rose-700   ">
          our products
        </h1>
      </div>
      <div className=" w-full gap-6 md:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto items-center justify-center">
        {data?.slice(0, 6).map((product) => {
          return <Product key={product?.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
