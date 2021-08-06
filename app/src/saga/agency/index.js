import { put, takeLatest } from 'redux-saga/effects';
import AgencyService from '../../service/agency-service';
import * as AgencyActions from "../../store/agency/action";
import * as AgencyActionsType from "../../store/agency/action-type";


function* fetchAgencies() {
    try {
        const { data } = yield AgencyService.listAll();
        yield put(AgencyActions.successFetchAgencies(data));

    } catch (e) {
        
    }
}

export default function* watchAgency() {
    yield takeLatest(AgencyActionsType.FETCH_AGENCY, fetchAgencies);
}