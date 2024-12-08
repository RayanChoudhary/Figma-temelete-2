import React from 'react';
import FirstPage from './Components/Firstpage/Firstpage';
import Header from './Components/Firstpage/Header/Header';
import Footer from './Components/Firstpage/Footer/Footer';
import Listings from './Components/Listing/Listing';
import ProductDetails from './Components/Productdetail/productdetail';
import Features from './Components/Features/Features';
import Banners from './Components/Banner/Banner';
import ShoppingBasket from './Components/Shopingbaskit/Shopingbaskit';

export default function Home() {
  return (
    <div>
      <Banners/>
      <Header/>
      <FirstPage/>
      <Features/>
      <Listings/>
      <ProductDetails/>
      <ShoppingBasket/>
      <Footer/>
    </div>
  );
}
