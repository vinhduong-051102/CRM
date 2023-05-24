/**
 * ...
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constantsLogin';
import * as actions from './actionsLogin';
import { axiosPost } from '../../utils/request';

export function* login(action) {
  const path = '/Account/Login';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data.isOk || res.data.status === -2) {
      action.callback(res.data);
    }
    yield put(actions.loginSuccess());
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export default function* watchLogin() {
  yield takeLatest(constants.LOGIN, login);
}
