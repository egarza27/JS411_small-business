import React, { useState, useEffect } from "react";
import {
  Container,
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableBody,
} from "@mui/material";
import { Link } from "react-router-dom";

const Listings = ({ listings }) => {
  const [updatedListings, setUpdatedListings] = useState([]);

  useEffect(() => {
    setUpdatedListings(listings);
  }, [listings]);

  return (
    <Container maxWidth="lg" className="car-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {updatedListings.map((listing) => (
            <TableRow key={listing.id} className="car-paper">
              <TableCell>
                <Link
                  style={{ textDecoration: "underline" }}
                  to={`/listing/${listing.id}`}
                >
                  {listing.business_name}
                </Link>
              </TableCell>
              <TableCell>{listing.description}</TableCell>
              <TableCell>{listing.operating_hours}</TableCell>
              <TableCell>{listing.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;

// I think the user is supposed to import their own listings then based on the listing's address the google map (fetched using the google maps API) will populate
