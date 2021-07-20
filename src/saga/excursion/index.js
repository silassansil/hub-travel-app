import { put, takeLatest } from 'redux-saga/effects';
import ExcursionService from '../../service/excursion-service';
import * as ExcustionActions from "../../store/excursion/action";
import * as ExcustionActionsType from "../../store/excursion/action-type";


function* fetchExcursions() {
    try {
        const { data } = yield ExcursionService.listAll();
        yield put(ExcustionActions.successFetchExcursions(data));

    } catch (e) {
        
    }
}

export default function* watchExcursion() {
    yield takeLatest(ExcustionActionsType.FETCH_EXCURSIONS, fetchExcursions);
}