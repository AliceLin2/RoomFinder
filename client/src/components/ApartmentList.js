import React from "react";
import {useParams, useHistory} from "react-router-dom"
import Apartment from "./Apartment";

function ApartmentList({apartments, onDeleteApartment, onUpdateApartment, edit}) {
  const {typeId} = useParams()
  let displayApartments
  if(typeId)
    {displayApartments=apartments.filter(a=>a.type_id===parseInt(typeId))}
  else
    {displayApartments=apartments}

  return (
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