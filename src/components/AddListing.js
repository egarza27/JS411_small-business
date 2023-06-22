// import React, { Component } from "react";
// import { Container, TextField, Button } from "@mui/material";

// class AddListing extends Component {
//   state = {
//     open: false,
//     business_name: "",
//     address: "",
//     operating_hours: "",
//     description: "",
//   };

//   handleTextChange = (e) => {
//     const newState = { ...this.state };
//     newState[e.target.id] = e.target.value;
//     this.setState(newState);
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const payload = { ...this.state };
//     payload.id = this.props + 1;
//     delete payload.open;
//     this.props.addListing(payload);
//     this.setState({ open: false });
//   };

//   componentDidUpdate = (prevProps, prevState) => {
//     if (prevState.open !== this.state.open) {
//       this.setState({
//         business_name: "",
//         address: "",
//         operating_hours: "",
//         description: "",
//       });
//     }
//   };

//   render() {
//     return (
//       <Container>
//         <form onSubmit={this.handleSubmit}>
//           <div className="add-listing">
//             <TextField
//               id="business_name"
//               placeholder="Name"
//               value={this.state.business_name}
//               onChange={this.handleTextChange}
//               variant="standard"
//             ></TextField>
//             <br></br>
//             <TextField
//               id="address"
//               placeholder="Address"
//               value={this.state.address}
//               onChange={this.handleTextChange}
//               variant="standard"
//             ></TextField>
//             <br></br>
//             <TextField
//               id="operating_hours"
//               placeholder="Hours"
//               value={this.state.operating_hours}
//               onChange={this.handleTextChange}
//               variant="standard"
//             ></TextField>
//             <br></br>
//             <TextField
//               id="description"
//               placeholder="Description"
//               value={this.state.description}
//               onChange={this.handleTextChange}
//               variant="standard"
//             ></TextField>
//             <br></br>
//             <Button variant="contained" type="submit">
//               Save
//             </Button>
//           </div>
//         </form>
//       </Container>
//     );
//   }
// }

// export default AddListing;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@mui/material";

const AddListingForm = () => {
  const dispatch = useDispatch();
  const [listing, setListing] = useState({
    business_name: "",
    description: "",
    operating_hours: "",
    address: "",
  });

  const handleInputChange = (event) => {
    setListing({
      ...listing,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newListing = {
      id: uuidv4(),
      ...listing,
    };
    dispatch({ type: "ADD_LISTING", value: newListing });
    resetForm();
  };

  const resetForm = () => {
    setListing({
      business_name: "",
      description: "",
      operating_hours: "",
      address: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Business Name"
        name="business_name"
        value={listing.business_name}
        onChange={handleInputChange}
        required
      />
      <TextField
        label="Description"
        name="description"
        value={listing.description}
        onChange={handleInputChange}
        required
      />
      <TextField
        label="Operating Hours"
        name="operating_hours"
        value={listing.operating_hours}
        onChange={handleInputChange}
        required
      />
      <TextField
        label="Address"
        name="address"
        value={listing.address}
        onChange={handleInputChange}
        required
      />
      <Button variant="contained" type="submit">
        Add Listing
      </Button>
    </form>
  );
};

export default AddListingForm;
