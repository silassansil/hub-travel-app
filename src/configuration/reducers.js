import { combineReducers } from "redux";
import agencyReducer from "../store/agency"
import excursionReducer from "../store/excursion"

export default combineReducers({
    agency: agencyReducer,
    excursion: excursionReducer
});
