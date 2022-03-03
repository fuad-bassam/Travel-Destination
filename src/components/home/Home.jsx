import './Home.css'
import React from 'react';
import data from '../../data/db.json'
import Header from '../header/Header'
import Tours from '../tours/Tours'
import Footer from '../ Footer/Footer'



 function Home() {
  return (
    <>
       {/* <h1>hiiiiii</h1> */}
    <Header />
    <Tours tour={data} />
    <Footer />
   
    </>
  )
}

export default Home;