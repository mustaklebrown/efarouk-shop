import Head from 'next/head';
import Image from 'next/image';
import Fproducts from '../components/Fproducts';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Services from '../components/Services';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Farouk | shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Fproducts />
      <About />
      <Products />
      <Services />
      <Gallery />
    </div>
  );
}