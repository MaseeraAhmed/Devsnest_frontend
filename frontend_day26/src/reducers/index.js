import UserReducer from "./UserReduser";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        data: UserReducer,
    }
)

export default rootReducer;