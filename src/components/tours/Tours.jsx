


function Tours(paramsTour) {
 
    return(
        <>
       
        {
            paramsTour.tour.map(tour => {
                return(
                    <div id={tour.id} key={tour.id}>
                        <h1>Name :{tour.name}</h1>
                        <img src={tour.image} alt="" />
                    </div>
                )
                
            })
        }

        </>
        
        
    )
};

export default Tours;