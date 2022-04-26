import React from "react";
import Apartment from "./Apartment";

function ApartmentList({displayApartments, onDeleteApartments, onUpdateApartments, edit}) {

  return (
    displayApartments.map((apartment) => 
    (<Apartment 
        apartment={apartment} 
        key={apartment.id} 
        onDeleteApartments={onDeleteApartments}
        onUpdateApartments={onUpdateApartments}
        edit={edit}
    />))
  );
}

export default ApartmentList;