import { createSelector } from 'reselect'
import _ from 'lodash'

export const state = state => state.agency;
export const toMap = createSelector(state, _state => _state.byId);
export const toArray = createSelector(toMap, _byId => _.flatMap(_byId));