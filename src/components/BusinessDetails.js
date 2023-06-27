import React from "react";
import { Container, Paper } from "@mui/material";
import { useParams } from "react-router-dom";

const BusinessDetails = ({ listings }) => {
  const { id } = useParams();

  console.log("ID:", id);
  console.log("Listings:", listings);

  const listing = listings.find((l) => {
    if (!isNaN(parseInt(l.id))) {
      return l.id === Number(id);
    }
    return l.id === id;
  });

  console.log("Listing:", listing);
  const { id: _, business_name: __, ...listingData } = listing;

  return (
    <Container maxWidth="lg" className="car-container">
      <Paper elevation={0} className="business-details">
        <h2>{listing.business_name}</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.values(listingData).map((value, idx) => (
            <li style={{ padding: "10pt" }} key={idx}>
              {value}
            </li>
          ))}
        </ul>
      </Paper>
    </Container>
  );
};

export default BusinessDetails;
