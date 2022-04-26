import React from "react";
import ApartmentList from "./ApartmentList";

function MyList({user, apartments, onDeleteApartments, onUpdateApartments}) {

  const displayApartments = !user? null : apartments.filter((apartment) => apartment.user_id==user.id)

  return (
    !user? <h1>Please log in to see your list!</h1> :
    <ApartmentList 
        displayApartments={displayApartments} 
        onDeleteApartments={onDeleteApartments}
        onUpdateApartments={onUpdateApartments}
        edit={true}
    />)
}

export default MyList