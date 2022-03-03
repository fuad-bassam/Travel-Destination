
import Tour from './tour/Tour'

function Tours({tour}) {
 
    return(
        <div id='divFather'>
       
        {
           tour.map(tour => {
                return(
                  <Tour tour={tour}  />  
                )
                
            })
        }

        </div>
        
        
    )
};

export default Tours;