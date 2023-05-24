import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducerPartner';

export const selectPartner = state => state[REDUX_KEY.partner] || initialState;

export const selectLoading = () =>
  createSelector(
    selectPartner,
    state => state.isLoading,
  );

export const selectListPartner = () =>
  createSelector(
    selectPartner,
    state => state.listPartner,
  );

export const selectTotalCount = () =>
  createSelector(
    selectPartner,
    state => state.totalCount,
  );

export function selectDetailPartner() {
  return createSelector(
    selectPartner,
    state => state.detailPartner,
  );
}

export function selectListProvince() {
  return createSelector(
    selectPartner,
    state => state.listProvinceVn,
  );
}

export function selectListDistrict() {
  return createSelector(
    selectPartner,
    state => state.listDistrict,
  );
}

export function selectListWard() {
  return createSelector(
    selectPartner,
    state => state.listWard,
  );
}

export function selectListDistrictInEdit() {
  return createSelector(
    selectPartner,
    state => state.listDistrictContact,
  );
}

export function selectListWardInEdit() {
  return createSelector(
    selectPartner,
    state => state.listWardContact,
  );
}

export function selectInfoMST() {
  return createSelector(
    selectPartner,
    state => state.infoMST,
  );
}

export function selectLoadingGetMst() {
  return createSelector(
    selectPartner,
    state => state.isLoadingGetMST,
  );
}

export function selectHistory() {
  return createSelector(
    selectPartner,
    state => state.listHistory,
  );
}

export function selectListCreatedPartner() {
  return createSelector(
    selectPartner,
    state => state.listCreatedPartner,
  );
}

export function selectListOptionPartner() {
  return createSelector(
    selectPartner,
    state => state.listOptionPartner,
  );
}
