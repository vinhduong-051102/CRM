import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducer';

export const selectResultChangePassword = state => state[REDUX_KEY.app] || initialState;

function selectResult() {
  return createSelector(
    selectResultChangePassword,
    state => state.state,
  );
}

export { selectResult };
