import * as AgencySelector from '../agency/selector'
import { createSelector } from 'reselect'
import _ from 'lodash'

export const state = state => state.excursion;
export const toMap = createSelector(state, _state => _state.byId);
export const toArray = createSelector(toMap, _byId => _.flatMap(_byId));

export const excursionsByAgencyName = createSelector(toArray, AgencySelector.toMap,
    (_all, _agencies) => _all.map(ex => ({
        ...ex,
        name: _agencies[ex.agencyId].name,
    })))

// export const selectedId = createSelector(state, _state => _state.selectedId);
// export const selected = createSelector(toMap, selectedId,
//     (_map, _selectedId) => _map[_selectedId]);

// export const byRemind = createSelector(toArray, MonthYearSelector.month, MonthYearSelector.year,
//     (_all, _month, _year) => _all.filter(cs => {
//         const createdAt = useDate(cs.createdAt);
//         const updatedAt = useDate(cs.updatedAt);

//         return (createdAt.getMonth() + 1 === _month && createdAt.getFullYear() === _year)
//             || (updatedAt.getMonth() + 1 === _month && updatedAt.getFullYear() === _year)
//     }));

// export const filterByName = createSelector(byRemind, SearchSelector.content,
//     (_remind, _search) => _remind.filter(_cs => _cs.customerName.toUpperCase().includes(_search.toUpperCase())));