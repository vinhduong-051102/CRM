import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import { axiosGet, axiosPost } from '../../utils/request';

export function* changePassword(action) {
  const path = `/AccountUser/ChangePassword`;
  try {
    const res = yield call(axiosPost, path, action.body);
    yield put(actions.changePasswordSuccess(res));
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* logout(action) {
  const path = `/Account/Logout`;
  try {
    const res = yield call(axiosGet, path);
    if (res.data.isOk) {
      action.callback();
    }
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export default function* watchFetchMonitor() {
  yield takeLatest(constants.CHANGE_PASSWORD, changePassword);
  yield takeLatest(constants.LOGOUT, logout);
}
