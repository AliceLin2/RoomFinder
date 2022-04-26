import React, {useState} from "react";

const style = {
    display: "inline-block",
    width: "500px",
    padding: "20px",
    margin: "0 10px 10px",
    color: "black",
    fontSize: "20px",
};

function Apartment({apartment, onDeleteApartment, onUpdateApartment, edit}) {
    const [isUpdating, setIsUpdating] = useState(false);

    function handleUpdate(apartment){
        setIsUpdating(false)
        onUpdateApartment(apartment)
    }
    function handleDelete(id){
      fetch(`/apartments/${id}`,{
          method:"DELETE"
      })
      .then(()=>onDeleteApartment(id))
    }

    function handleRate(){
        console.log("rate")
    }

    function handleReview(){
        console.log("review")
    }
 
    return (
        <div style={style}>
            <div>
                <h2>{apartment.location}</h2>
                <p>rent per month: ${apartment.rent}</p>
                <p>number of bedrooms: {apartment.num_of_bedrooms}</p>
                <p>number of bathrooms: {apartment.num_of_bathrooms}</p>
            </div>
            {edit?<button id='update' onClick={() => setIsUpdating((isUpdating) => !isUpdating)}>update</button>:null}
            {edit?<button id='delete' onClick={e=>handleDelete(apartment.id)}>delete</button>:null}
            {edit?null:<button id='rate' onClick={e=>handleRate(apartment.id)}>rate</button>} 
            {edit?null:<button id='review' onClick={e=>handleReview(apartment.id)}>review</button>}        
        </div>
    );
}

export default Apartment;