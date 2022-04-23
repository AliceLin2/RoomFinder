import React, {useState} from "react";

const style = {
    display: "inline-block",
    width: "500px",
    padding: "20px",
    margin: "0 10px 10px",
    color: "black",
    fontSize: "20px",
};

function Apartment({apartment, onDeleteApartment, onUpdateApartment}) {
    const [isUpdating, setIsUpdating] = useState(false);

    function handleUpdate(apartment){
        setIsUpdating(false)
        onUpdateApartment(apartment)
    }
    function handleDelete(id){
      fetch(`/apartments/${id}`,{
          method:"DELETE"
      })
      .then(r=>r.json())
      .then(data=>{
        onDeleteApartment(id)
      })
    } 
    return (
        <div style={style}>
            <div>
                <h2>location: {apartment.location}</h2>
                <p>rent: {apartment.rent}</p>
                <p>number of bedrooms: {apartment.num_of_bedrooms}</p>
                <p>number of bathrooms: {apartment.num_of_bathrooms}</p>
            </div>
            <button id='update' onClick={() => setIsUpdating((isUpdating) => !isUpdating)}>update</button> 
            <button id='delete' onClick={e=>handleDelete(apartment.id)}>delete</button>        
        </div>
    );
}

export default Apartment;