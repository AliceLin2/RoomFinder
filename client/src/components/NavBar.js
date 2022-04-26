import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const styles = {
  display: "inline-block",
  width: "200px",
  padding: "10px",
  margin: "0 10px 10px",
  background: "blue",
  color: "white",
  fontSize: "20px"
};

function NavBar({setUser}) {
  const history = useHistory();

  function handleLogout(){
    fetch('/logout', {
      method: "DELETE"
    })
    .then((r)=>{
      if(r.ok){
        setUser(null)
        history.push("/home");
      }
    })
  }
  return (
    <div>
      <NavLink
        to="/home"
        exact
        style={styles}
        activeStyle={{
          background: "pink",
          color: "black"
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/new"
        exact
        style={styles}
        activeStyle={{
          background: "pink",
          color: "black"
        }}
      >
        Add New Apartment
      </NavLink>
      <NavLink
        to="/mylist"
        exact
        style={styles}
        activeStyle={{
          background: "pink",
          color: "black"
        }}
      >
        My List
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles}
        activeStyle={{
          background: "pink",
          color: "black"
        }}
      >
        Login
      </NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default NavBar;
