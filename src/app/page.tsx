import React from 'react';
import FirstPage from './Components/Firstpage/Firstpage';
import Listings from './Components/Listing/Listing';
import Features from './Components/Features/Features';
import EmailSignUp from './Components/Emailsignup/Emailsignup';
import Moreinfo from './Components/Moreinfo/Moreinfo';

export default function Home() {
  return (
    <div>
  
      <FirstPage/>
      <Features/>
      <Listings/>
      <EmailSignUp/>
      <Moreinfo/>
    </div>
  );
}
