import * as Types from './action-type';

export const fetchExcursions = () => ({
    type: Types.FETCH_EXCURSIONS,
});

export const successFetchExcursions = (excursions) => ({
    type: Types.SUCCESS_FETCH_EXCURSIONS,
    excursions
});
