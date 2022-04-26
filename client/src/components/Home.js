import React from "react"
import ApartmentList from "./ApartmentList"

function Home({apartments, onDeleteApartments, onUpdateApartments}){

    return (
        <div>
            <h1>Welcome to Roommate!</h1>
            <ApartmentList 
                displayApartments={apartments} 
                onDeleteApartments={onDeleteApartments}
                onUpdateApartments={onUpdateApartments}
                edit={false}
            />
        </div>
)
}
export default Home