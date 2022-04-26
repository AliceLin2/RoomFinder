import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom"
import LoginPage from "./LoginPage";
import NavBar from "./NavBar"
import NewApartment from "./NewApartment";
import MyList from "./MyList";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null)
  const [apartments, setApartments] = useState([])

  useEffect(()=>{
    fetch("/me")
    .then((r)=>{
      if(r.ok){
        r.json().then((user)=>setUser(user))
      }
    })
  }, [])

  useEffect(()=>{
    fetch("/apartments")
    .then((r)=>{
      if(r.ok){
        r.json().then((apartments)=>setApartments(apartments))
      }
    })
  }, [])
  
  function handleDeleteApartment(id) {
    const updatedApartments = apartments.filter((apartment) => apartment.id !== id)
    setApartments(updatedApartments)
  }

  function handleUpdateApartment(updatedApartment) {
      const updatedApartments = apartments.map((apartment) => {
          if (apartment.id === updatedApartment.id) {
          return updatedApartment;
          } else {
          return apartment;
          }
      });
      setApartments(updatedApartments)
  }

  return (
          (<div>
              <NavBar setUser={setUser}/>
              <Switch>
                <Route path="/home">
                  <Home apartments={apartments} onDeleteApartment={handleDeleteApartment} onUpdateApartment={handleUpdateApartment}/>
                </Route>
                <Route path="/new">
                  <NewApartment user={user} apartments={apartments} onChangeApartments={setApartments}/>
                </Route>
                <Route path="/mylist">
                  <MyList user={user} apartments={apartments} onDeleteApartment={handleDeleteApartment} onUpdateApartment={handleUpdateApartment}/>
                </Route>
                <Route path="/login">
                  {user?<h1>Welcome! {user.username}</h1>:<LoginPage onSignIn={setUser}/>}
                </Route>
              </Switch>
          </div>)
  );
}

export default App;
