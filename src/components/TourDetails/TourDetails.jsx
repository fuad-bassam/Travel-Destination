import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../ Footer/Footer";
import { useParams } from 'react-router-dom';
import data from '../../data/db.json'

function tourdetal() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let { id } = useParams();

    return (
        <>
            <Navbar />

            {data.filter(data2 => data2.id === id).map(tour => {
                return (

                    <div id={data.id} key={data.id} className="city">


                        <h1>Name:- {tour.name}</h1>
                        <br />
                        <img id='cityImg' src={tour.image} alt="" />
                        <h2>price: {tour.price}</h2>
                        <h4>info: {tour.info}</h4>
                    </div>
                )

            }
            )
            }

            <Footer />
        </>
    )
}
export default tourdetal;