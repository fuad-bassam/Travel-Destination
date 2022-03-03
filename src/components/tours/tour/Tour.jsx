

import {Link} from 'react-router-dom';

function ture({ tour }) {

    return(
        <div id={tour.id} key={tour.id} className="citys" > 
      
          <Link  to={`/city/${tour.id}`}>
        <h1>Name:- {tour.name}</h1>
        <br />
    <img id='citysImgs' src={tour.image} alt="" />
     
     </Link> 
    </div>
    )
}

export default ture;