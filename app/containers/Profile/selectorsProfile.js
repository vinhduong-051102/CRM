import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducerProfile';

export const selectProfile = state => state[REDUX_KEY.profile] || initialState;

export const selectLoading = () =>
  createSelector(
    selectProfile,
    state => state.isLoading,
  );

export const selectListProfile = () =>
  createSelector(
    selectProfile,
    state => state.listProfile,
  );

export const selectTotalCount = () =>
  createSelector(
    selectProfile,
    state => state.totalCount,
  );

export const selectListProfileSample = () =>
  createSelector(
    selectProfile,
    state => state.listProfileSample,
  );

export const selectListSignerByProfileSample = () =>
  createSelector(
    selectProfile,
    state => state.listSignerByProfileSample,
  );

export const selectListTextByProfileSample = () =>
  createSelector(
    selectProfile,
    state => state.listTextByProfileSample,
  );

export const selectListProfileType = () =>
  createSelector(
    selectProfile,
    state => state.listProfileType,
  );
export const selectProfileDetail = () =>
  createSelector(
    selectProfile,
    state => state.profileDetail,
  );

export const selectListSignType = () =>
  createSelector(
    selectProfile,
    state => state.listSignType,
  );

export const selectProfiles = () =>
  createSelector(
    selectProfile,
    state => state.profiles,
  );

export const selectListStatus = () =>
  createSelector(
    selectProfile,
    state => state.listStatus,
  );

export const selectListTextByName = () =>
  createSelector(
    selectProfile,
    state => state.listTextByName,
  );

export const selectListObjectSign = () =>
  createSelector(
    selectProfile,
    state => state.listObjectSign,
  );

export const selectListTypeOfProfile = () =>
  createSelector(
    selectProfile,
    state => state.listTypeOfProfile,
  );

export const selectListCreator = () =>
  createSelector(
    selectProfile,
    state => state.listCreator,
  );

export const selectListReviewer = () =>
  createSelector(
    selectProfile,
    state => state.listReviewer,
  );

export const selectListBrowsingFlow = () =>
  createSelector(
    selectProfile,
    state => state.listBrowsingFlow,
  );

export const selectListDocumentPdf = () =>
  createSelector(
    selectProfile,
    state => state.listDocumentPdf,
  );

export const selectListVB = () =>
  createSelector(
    selectProfile,
    state => state.listVB,
  );
