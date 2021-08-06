import * as Types from './action-type';
// import * as MonthYearSelector from "../ui/month-year";
// import useDate from "../../hooks/useDate";
// import * as SearchSelector from "../search";
// import * as TypesAuth from "../auth/action-type";

const INITIAL_STATE = {
    byId: {},
    selectedId: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.SUCCESS_FETCH_EXCURSIONS: {
            console.log(action.excursions)
            return {
                ...state,
                selectedId: null,
                byId: {
                    ...state.byId,
                    ...action.excursions
                }
            }
        }

        default:
            return state;
    }
};