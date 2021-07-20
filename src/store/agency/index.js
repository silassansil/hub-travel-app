import * as Types from './action-type';
import _ from 'lodash';

const INITIAL_STATE = {
    byId: {},
    selectedId: null,
};
/**
 * Reducer
 */
 export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.SUCCESS_FETCH_AGENCY: {
            console.log(action.agencies)
            return {
                ...state,
                selectedId: null,
                byId: {
                    ...state.byId,
                    ...action.agencies
                }
            }
        }

        default:
            return state;
    }
};