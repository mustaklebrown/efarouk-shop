import React from 'react';
import { FiStar } from 'react-icons/fi';
import { GiRunningShoe } from 'react-icons/gi';
import { AiFillCar } from 'react-icons/ai';
import { FaMailBulk } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'commande',
      icon: <FaMailBulk />,
      desc: 'lorem upson mon ecole est tous pres de ici',
    },
    {
      title: 'self service',
      icon: <GiRunningShoe />,
      desc: 'lorem upson mon ecole est tous pres de ici',
    },
    {
      title: 'enbalage',
      icon: <AiFillCar />,
      desc: 'lorem upson mon ecole est tous pres de ici',
    },
  ];
  return (
    <div id="services" className="max-w-5xl mx-auto px-10 py-20">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold  uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-400  to-rose-700   ">
          services
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full items-center justify-center ">
          {services.map((service, i) => {
            return (
              <div
                key={i}
                className="min-w-[220px] rounded-xl bg-black/30 p-10 w-full flex flex-col justify-between items-center gap-4 shadow-sm shadow-gray-200 hover:-translate-y-1 duration-200 transition-all hover:shadow-yellow-400"
              >
                <div className="text-5xl text-yellow-400">{service.icon}</div>
                <h1 className="text-xl md:text-2xl uppercase font-serif font-semibold bg-clip-text text-transparent bg-gradient-to-tr from-yellow-500 via-indigo-500 to-rose-600 ">
                  {service.title}
                </h1>
                <p className="max-w-[250px] text-center tracking-wider first-letter:text-xl first-letter:text-rose-600">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
