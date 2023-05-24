import { CHANGE_PASSWORD, REQUEST_FALSE, CHANGE_PASSWORD_SUCCESS, LOGOUT } from './constants';

export function changePassword(body) {
  return {
    type: CHANGE_PASSWORD,
    body,
  };
}

export function changePasswordSuccess(data) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    data,
  };
}

export function requestFalse(error) {
  return {
    type: REQUEST_FALSE,
    error,
  };
}

export function logout(callback) {
  return {
    type: LOGOUT,
    callback,
  };
}
