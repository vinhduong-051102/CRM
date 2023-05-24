/**
 * ...
 */

import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducerLogin';

export const selectLogin = state => state[REDUX_KEY.login] || initialState;

function selectLoading() {
  return createSelector(
    selectLogin,
    state => state.isLoading,
  );
}

export { selectLoading };
