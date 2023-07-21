import React from 'react';
// import data from '../data/data';
import Product from './Product';
import data from '../data/data.json';
import CardProduct from './Card';
import { useDispatch } from 'react-redux';
import { setAddItemToCart } from '../features/CartSlice';

const Products = () => {
  const dispatch = useDispatch();
  const onAddToCart = (product) => {
    dispatch(setAddItemToCart(product));
  };
  return (
    <div id="gallery" className="max-w-7xl mx-auto px-20 my-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold  uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-400  to-rose-700   ">
          our products
        </h1>
      </div>
      <div className=" w-full gap-4 place-content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto items-center justify-center">
        {data?.slice(0, 6).map((product) => {
          return (
            <CardProduct
              key={product?.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
