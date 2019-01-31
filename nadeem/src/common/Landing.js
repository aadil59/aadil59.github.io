import React from 'react';
import Header from './Header';
import BodyTop from '../components/BodyTop';
import './Landing.css';
import Footer from './Footer';
import Listing from '../pages/Listing';

export default function Landing() {

  return (
    <React.Fragment>
        <Header />
        <BodyTop />
        <Listing />
        <Footer />
    </React.Fragment>
  )
}
