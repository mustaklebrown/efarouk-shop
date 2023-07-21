// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import data from '../../data/data.json';
// import { useDispatch } from 'react-redux';
// import { setAddItemToCart } from '../../features/CartSlice';

// const AllProducts = () => {
//   const [products, setProducts] = useState(data);
//   const categoryfilter = (g) => {
//     const result = data.filter((p) => p.genre == g);
//     setProducts(result);
//   };
//   const dispatch = useDispatch();

//   const onAddToCart = () => {
//     dispatch(setAddItemToCartt(product));
//   };

//   if (!products) {
//     return <div>loading .....</div>;
//   }

//   return (
//     <section className="max-w-6xl mx-auto p-10">
//       <div className="my-16">
//         <div>
//           <button
//             onClick={() => setProducts(data)}
//             className="px-4 py-2 border bg-indigo-800 text-gray-100 uppercase hover:bg-rose-700 duration-300 transition-all"
//           >
//             All
//           </button>
//           {['woman', 'man'].map((btn, i) => (
//             <button
//               key={i}
//               onClick={() => categoryfilter(btn)}
//               className="px-4 py-2 border bg-indigo-800 text-gray-100 uppercase hover:bg-rose-700 duration-300 transition-all"
//             >
//               {btn}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div>
//         <div className="w-full gap-8 grid grid-cols-1 sm:grid-cols-2 items-center justify-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  ">
//           {products.map((product) => {
//             return (
//               <div
//                 key={product.id}
//                 className="hover:-translate-y-1 duration-300 hover:shadow-yellow-800  shadow-md shadow-gray-400 border bg-gray-300  w-full rounded-xl flex flex-col justify-between items-center space-y-2 overflow-hidden"
//               >
//                 <div className="w-full p-3">
//                   <Link href={`/products/${product.id}`} passHref>
//                     <Image
//                       src={product.imgs}
//                       width={520}
//                       height={300}
//                       alt={product.title}
//                       className="object-cover w-full h-full bg-center cursor-pointer"
//                     />
//                   </Link>
//                   <Link href={`/products/${product.id}`} passHref>
//                     <div className="flex justify-between w-full py-4 cursor-pointer">
//                       <h3 className="text-lg text-gray-900 font-semibold uppercase ">
//                         {product.name}
//                       </h3>
//                       <p className="text-xl font-medium text-gray-900">
//                         ${product.price}{' '}
//                       </p>
//                     </div>
//                   </Link>
//                   <div className="w-full">
//                     <button
//                       onClick={() => dispatch(setAddItemToCart(product))}
//                       className="bg-yellow-500 w-full px-4 py-2 rounded-lg text-gray-900 uppercase font-semibold hover:text-gray-200 tracking-wider hover:bg-yellow-800 transition-all duration-300"
//                     >
//                       add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllProducts;

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import data from '../../data/data.json';
import { useDispatch } from 'react-redux';
import { setAddItemToCart } from '../../features/CartSlice';
import CardProduct from '../../components/Card';

const AllProducts = () => {
  const [products, setProducts] = useState(data);

  const categoryFilter = (g) => {
    const result = data.filter((p) => p.genre === g);
    setProducts(result);
  };

  const dispatch = useDispatch();

  const onAddToCart = (product) => {
    dispatch(setAddItemToCart(product));
  };

  if (!products) {
    return <div>loading .....</div>;
  }

  return (
    <section className="max-w-6xl mx-auto p-10">
      <div className="my-16">
        <div>
          <button
            onClick={() => setProducts(data)}
            className="px-4 py-2 border bg-indigo-800 text-gray-100 uppercase hover:bg-rose-700 duration-300 transition-all"
          >
            All
          </button>
          {['woman', 'man'].map((btn, i) => (
            <button
              key={i}
              onClick={() => categoryFilter(btn)}
              className="px-4 py-2 border bg-indigo-800 text-gray-100 uppercase hover:bg-rose-700 duration-300 transition-all"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="w-full gap-8 grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:grid-cols-3 ">
          {products.map((product) => {
            return (
              // <div
              //   key={product.id}
              //   className="hover:-translate-y-1 duration-300 hover:shadow-yellow-800 shadow-md shadow-gray-400 border bg-gray-300 w-full rounded-xl flex flex-col justify-between items-center space-y-2 overflow-hidden"
              // >
              //   <div className="w-full p-3">
              //     <Link href={`/products/${product.id}`} passHref>
              //       <Image
              //         src={product.imgs}
              //         width={520}
              //         height={300}
              //         alt={product.title}
              //         className="object-cover w-full h-full bg-center cursor-pointer"
              //       />
              //     </Link>
              //     <Link href={`/products/${product.id}`} passHref>
              //       <div className="flex justify-between w-full py-4 cursor-pointer">
              //         <h3 className="text-lg text-gray-900 font-semibold uppercase">
              //           {product.name}
              //         </h3>
              //         <p className="text-xl font-medium text-gray-900">
              //           ${product.price}
              //         </p>
              //       </div>
              //     </Link>
              //     <div className="w-full">
              //       <button
              //         onClick={() => onAddToCart(product)}
              //         className="bg-yellow-500 w-full px-4 py-2 rounded-lg text-gray-900 uppercase font-semibold hover:text-gray-200 tracking-wider hover:bg-yellow-800 transition-all duration-300"
              //       >
              //         add to cart
              //       </button>
              //     </div>
              //   </div>
              // </div>
              <CardProduct
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
