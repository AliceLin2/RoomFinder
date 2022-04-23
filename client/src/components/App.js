import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom"
import LoginPage from "./LoginPage";
import NavBar from "./NavBar"
import NewApartment from "./NewApartment";
import ApartmentList from "./ApartmentList";
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

  const currentUser = !user? <LoginPage onSignIn={setUser}/> : 
                              (<div>
                                  <NavBar />
                                  <Switch>
                                    <Route path="/new">
                                      <NewApartment onChangeApartments={setApartments}/>
                                    </Route>
                                    <Route path="/mylist">
                                      <ApartmentList apartments={apartments} onChangeApartments={setApartments}/>
                                    </Route>
                                  </Switch>
                              </div>)
  
  return (
          (<div>
              <NavBar />
              <Switch>
                <Route path="/home">
                  <Home/>
                </Route>
                <Route path="/login">
                  {currentUser}
                </Route>
              </Switch>
          </div>)
  );
}

export default App;
