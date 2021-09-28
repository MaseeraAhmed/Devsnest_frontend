const GetPlaceDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PLACE_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default GetPlaceDataReducer;
