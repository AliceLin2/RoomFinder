import React from "react"
import {Link, Route, useRouteMatch, Switch} from "react-router-dom"
import ApartmentList from "./ApartmentList"

function Home({apartments, onDeleteApartment, onUpdateApartment, types}){

    const typeList = types.map(({id, name}) => (
        <li key={id}>
            <Link to={`/types/apartments/${id}`}>{name}</Link>
        </li>
        ));

    let {path} = useRouteMatch()

    return (
        <div  display="flex">
            <ul>{typeList}</ul>
            
            <Switch>
                <Route exact path={path}>
                    <ApartmentList 
                        displayApartments={apartments} 
                        onDeleteApartment={onDeleteApartment}
                        onUpdateApartment={onUpdateApartment}
                        edit={false}
                    />
                </Route>
                <Route path={`${path}/:typeId`}>
                    <ApartmentList 
                        displayApartments={apartments} 
                        onDeleteApartment={onDeleteApartment}
                        onUpdateApartment={onUpdateApartment}
                        edit={false}
                    />
                </Route>
            </Switch>
        </div>
        );
}

export default Home