import { all } from 'redux-saga/effects';
import watchExcursion from '../saga/excursion';
import watchAgency from '../saga/agency';

export default function* root() {
    yield all([
        watchExcursion(),
        watchAgency()
    ]);
}