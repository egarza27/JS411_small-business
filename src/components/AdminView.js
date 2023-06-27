import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableBody,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminView = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings);

  const handleDeleteListing = (listingId) => {
    dispatch({ type: "REMOVE_LISTING", value: listingId });
  };

  return (
    <Container maxWidth="lg" className="car-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listings.map((listing) => (
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
              <TableCell>
                <DeleteIcon
                  onClick={() => handleDeleteListing(listing.id)}
                  className="icon text-red"
                ></DeleteIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default AdminView;
