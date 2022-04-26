import React from "react";
import Apartment from "./Apartment";

function ApartmentList({displayApartments, onDeleteApartment, onUpdateApartment, edit}) {

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