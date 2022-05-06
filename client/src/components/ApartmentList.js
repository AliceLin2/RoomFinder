import React from "react";
import {useParams} from "react-router-dom"
import Apartment from "./Apartment";

function ApartmentList({apartments, onDeleteApartment, onUpdateApartment, edit}) {
  const {typeId} = useParams()
  let displayApartments
  if(typeId)
    {displayApartments=apartments.filter(a=>a.type_id===parseInt(typeId))}
  else
    {displayApartments=apartments}
  console.log(displayApartments.length)
  return (
    displayApartments.length === 0 ? "No this type of apartment available" :
    displayApartments.map((apartment) => 
    (<Apartment 
        apartment={apartment} 
        key={apartment.id} 
        onDeleteApartment={onDeleteApartment}
        onUpdateApartment={onUpdateApartment}
        edit={edit}
    />))
  );
}

export default ApartmentList;