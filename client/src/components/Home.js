import React from "react"
import ApartmentList from "./ApartmentList"

function Home({apartments, onDeleteApartment, onUpdateApartment}){

    return (
        <div>
            <h1>Welcome to Roommate!</h1>
            <ApartmentList 
                displayApartments={apartments} 
                onDeleteApartment={onDeleteApartment}
                onUpdateApartment={onUpdateApartment}
                edit={false}
            />
        </div>
)
}
export default Home