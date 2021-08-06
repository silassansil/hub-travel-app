import * as Types from './action-type';

export const fetchAgencies = () => ({
    type: Types.FETCH_AGENCY,
});

export const successFetchAgencies = (agencies) => ({
    type: Types.SUCCESS_FETCH_AGENCY,
    agencies
});