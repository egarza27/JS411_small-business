import React from "react";
import { Route, Routes } from "react-router-dom";
import AddListing from "./components/AddListing";
import BusinessDetails from "./components/BusinessDetails";
import Listings from "./components/Listings";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminView from "./components/AdminView";
import state from "./redux/state";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Listings listings={state.listings} />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/listing/:id"
        element={<BusinessDetails listings={state.listings} />}
      />
      <Route
        path="/addListing"
        element={<ProtectedRoute component={AddListing} />}
      />
      <Route
        path="/adminView"
        element={<ProtectedRoute component={AdminView} />}
      />
    </Routes>
  );
};

export default Router;
