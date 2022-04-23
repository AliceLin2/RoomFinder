import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  display: "inline-block",
  width: "200px",
  padding: "20px",
  margin: "0 10px 10px",
  background: "#F39C12",
  color: "white",
  fontSize: "20px"
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={styles}
        activeStyle={{
          background: "#DFFF00",
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
          background: "#DFFF00",
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
          background: "#DFFF00",
          color: "black"
        }}
      >
        My List
      </NavLink>
    </div>
  );
}

export default NavBar;
