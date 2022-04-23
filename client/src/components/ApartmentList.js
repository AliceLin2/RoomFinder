import React, {useState} from "react";
import {useParams} from "react-router-dom"
import Apartment from "./Apartment";

function ApartmentList({apartments, onChangeApartments}) {
  const {ownerId} = useParams()

  function handleAddApartment(newApartment) {
    onChangeApartments([...apartments, newApartment])
  }

  function handleDeleteApartment(id) {
    const updatedApartments = apartments.filter((apartment) => apartment.id !== id)
    onChangeApartments(updatedApartments)
  }

  function handleUpdateApartment(updatedApartment) {
      const updatedApartments = apartments.map((apartment) => {
          if (apartment.id === updatedApartment.id) {
          return updatedApartment;
          } else {
          return apartment;
          }
      });
      onChangeApartments(updatedApartments)
  }

  /*const displayApartments = apartments
  .filter((apartment) => {
    if(ownerId===undefined){
      return apartment
    }else{
      return apartment.owner_id === parseInt(ownerId)
    }
  })
  .filter((apartment) => apartment.name.toLowerCase().includes(search.toLowerCase()))*/

  return (
    apartments.map((a) => 
    (<Apartment 
        apartments={a} 
        key={a.id} 
        onUpdateApartment={handleUpdateApartment} 
        onDeleteApartment={handleDeleteApartment}
    />))
  );
}

export default ApartmentList;