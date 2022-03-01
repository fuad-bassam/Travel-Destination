import React from 'react';
import data from '/home/fuad/asac/tour-app/src/data/db.json'
import Header from '/home/fuad/asac/tour-app/src/components/header/Header.jsx'
import Tours from '/home/fuad/asac/tour-app/src/components/tours/Tours.jsx'
import Footer from '/home/fuad/asac/tour-app/src/components/ Footer/Footer.jsx'



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