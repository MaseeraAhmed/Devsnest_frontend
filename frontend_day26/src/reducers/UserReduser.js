const initialState = {
  type: "Get_UserDetails",
  obj: {
    FName: "Enter Name",
    Mail: "Enter Email",
  },
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Get_UserDetails":
      return {
        ...state,
        obj: action.obj,
      };

    default:
      return state;
  }
};

export default UserReducer;
