export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    value: listing,
  };
};

export const removeListing = (index) => {
  return {
    type: "REMOVE_LISTING",
    value: index,
  };
};

// export const fetchGoogleMaps = () => {
//   return (dispatch) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         const action = {
//           type: "FETCH_MAP",
//           value: data.Results,
//         };
//         dispatch(action);
//       });
//   };
// };
