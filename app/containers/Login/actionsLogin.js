/**
 * ...
 */

import { LOGIN, LOGIN_SUCCESS, REQUEST_FALSE, RESET_REDUX } from './constantsLogin';

export function resetRedux() {
  return {
    type: RESET_REDUX,
  };
}

export function requestFalse() {
  return {
    type: REQUEST_FALSE,
  };
}

export function login(body, callback) {
  return {
    type: LOGIN,
    body,
    callback,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}
