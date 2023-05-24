/**
 * ...
 */

import produce from 'immer';
import { LOGIN, LOGIN_SUCCESS, REQUEST_FALSE, RESET_REDUX } from './constantsLogin';

export const initialState = {
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_REDUX:
        draft.isLoading = false;
        break;
      case REQUEST_FALSE:
        draft.isLoading = false;
        break;
      case LOGIN:
        draft.isLoading = true;
        break;
      case LOGIN_SUCCESS:
        draft.isLoading = false;
        break;
    }
  });

export default loginReducer;
