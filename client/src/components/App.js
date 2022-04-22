import React, {useEffect, useState} from "react";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar"
import './App.css';

function App() {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    fetch("/me")
    .then((r)=>{
      if(r.ok){
        r.json().then((user)=>setUser(user))
      }
    })
  }, [])

  return (
    !user? <LoginPage onSignIn={setUser}/> : null
          /*(<div>
              <NavBar />
              <Switch>
                <Route path="/new">
                  <NewApartment />
                </Route>
                <Route path="/">
                  <ApartmentList />
                </Route>
              </Switch>
          </div>)*/
  );
}

export default App;
