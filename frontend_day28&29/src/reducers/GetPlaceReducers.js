const GetPlaceReducer = (state = "", action) => {
  switch (action.type) {
    case "GET_PLACE":
      return action.payload;
    default:
      return state;
  }
};

export default GetPlaceReducer;
