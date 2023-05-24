import produce from 'immer';

import { CHANGE_PASSWORD_SUCCESS } from './constants';

export const initialState = {
  state: '',
};

const accountManagementReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_PASSWORD_SUCCESS:
        // eslint-disable-next-line no-param-reassign
        draft.state = action.data.data.status;
        break;
      default:
        break;
    }
  });

export default accountManagementReducer;
