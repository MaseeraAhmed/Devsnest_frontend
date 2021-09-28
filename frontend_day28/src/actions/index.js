const GetPlace = (place) => {
  return {
    type: "GET_PLACE",
    payload: place,
  };
};

const GetPlaceData = (place) => {
  return (dispatch) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=c97150e403134b5ba4f75416210308&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "GET_PLACE_DATA",
          payload: data,
        });
      });
  };
};

export { GetPlace, GetPlaceData };
