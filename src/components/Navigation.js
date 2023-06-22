import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import cookie from "cookie";

const Navigation = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!cookie.parse(document.cookie).loggedIn; // Check if login cookie is present

  return (
    <AppBar position="relative" sx={{ backgroundColor: "green" }}>
      <Toolbar>
        <IconButton color="inherit"></IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          San Antonio Small Business
        </Typography>
        <ul className="nav-list">
          {isLoggedIn && (
            <>
              <li className="nav-list-item">
                <Link to="/">Listings</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/addListing">Add</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/adminView">Admin View</Link>
              </li>
              <li
                className="nav-list-item"
                onClick={() => {
                  document.cookie = cookie.serialize("loggedIn", null, {
                    maxAge: 0,
                  });
                  navigate("/login");
                }}
              >
                Logout
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li className="nav-list-item">
                <Link to="/">Listings</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
