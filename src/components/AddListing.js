import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddListing = (props) => {
  const navigate = useNavigate();
  const [business, setBusiness] = useState({
    open: false,
    business_name: "",
    address: "",
    operating_hours: "",
    description: "",
  });

  const handleTextChange = (e) => {
    const newState = { ...business };
    newState[e.target.id] = e.target.value;
    setBusiness(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...business };
    payload.id = uuidv4();
    console.log(payload);
    delete payload.open;
    props.addListing(payload);
    navigate("/");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="add-listing">
          <TextField
            id="business_name"
            placeholder="Name"
            value={business.business_name}
            onChange={handleTextChange}
            variant="standard"
          ></TextField>
          <br></br>
          <TextField
            id="address"
            placeholder="Address"
            value={business.address}
            onChange={handleTextChange}
            variant="standard"
          ></TextField>
          <br></br>
          <TextField
            id="operating_hours"
            placeholder="Hours"
            value={business.operating_hours}
            onChange={handleTextChange}
            variant="standard"
          ></TextField>
          <br></br>
          <TextField
            id="description"
            placeholder="Description"
            value={business.description}
            onChange={handleTextChange}
            variant="standard"
          ></TextField>
          <br></br>
          <Button variant="contained" type="submit">
            Save
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default AddListing;
