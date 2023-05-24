import {
  RESET_LOCAL,
  RESET_REDUX,
  REQUEST_FALSE,
  GET_LIST_PARTNER,
  GET_LIST_PARTNER_SUCCESS,
  REQUEST_BEGIN,
  EXPORT_FILE,
  GET_PROVINCE_VN,
  GET_PROVINCE_VN_SUCCESS,
  GET_DISTRICT,
  GET_DISTRICT_SUCCESS,
  GET_WARD,
  GET_WARD_SUCCESS,
  GET_DETAIL_PARTNER,
  GET_DETAIL_PARTNER_SUCCESS,
  SEARCH_EASY_PARTNER,
  SEARCH_EASY_PARTNER_SUCCESS,
  GET_MST,
  GET_MST_SUCCESS,
  ADD_PARTNER,
  ADD_PARTNER_SUCCESS,
  GET_HISTORY,
  GET_HISTORY_SUCCESS,
  RESET_INFO,
  RESET_HISTORY,
  GET_LIST_CREATED_PARTNER,
  GET_LIST_CREATED_PARTNER_SUCCESS,
  GET_LIST_OPTION_PARTNER,
  GET_LIST_OPTION_PARTNER_SUCCESS,
  SEARCH_ADVANCE_PARTNER,
  SEARCH_ADVANCE_PARTNER_SUCCESS,
  RESET_CONFIRM_INFO,
  GET_DISTRICT_CONTACT,
  GET_WARD_CONTACT,
  GET_DISTRICT_CONTACT_SUCCESS,
  GET_WARD_CONTACT_SUCCESS,
  RESET_LOCAL_PARTNER,
} from './constantsPartner';

export function resetRedux() {
  return {
    type: RESET_REDUX,
  };
}

export function resetDistrictAndWard() {
  return {
    type: RESET_LOCAL,
  };
}

export function resetInfo() {
  return {
    type: RESET_INFO,
  };
}

export function resetConfirmInfo() {
  return {
    type: RESET_CONFIRM_INFO,
  };
}

export function resetHistory() {
  return {
    type: RESET_HISTORY,
  };
}

export function requestBegin() {
  return {
    type: REQUEST_BEGIN,
  };
}

export function requestFalse() {
  return {
    type: REQUEST_FALSE,
  };
}

export function getListPartner(body) {
  return {
    type: GET_LIST_PARTNER,
    body,
  };
}

export function getListPartnerSuccess(data) {
  return {
    type: GET_LIST_PARTNER_SUCCESS,
    data,
  };
}

export function searchEasyPartner(body) {
  return {
    type: SEARCH_EASY_PARTNER,
    body,
  };
}

export function searchEasyPartnerSuccess(data) {
  return {
    type: SEARCH_EASY_PARTNER_SUCCESS,
    data,
  };
}

export function exportFile(body, isExportEasySearch) {
  return {
    type: EXPORT_FILE,
    body,
    isExportEasySearch,
  };
}

export function getDetailPartner(body) {
  return {
    type: GET_DETAIL_PARTNER,
    body,
  };
}

export function getDetailPartnerSuccess(data) {
  return {
    type: GET_DETAIL_PARTNER_SUCCESS,
    data,
  };
}

export function getProvinceVn() {
  return {
    type: GET_PROVINCE_VN,
  };
}

export function getProvinceVnSuccess(data) {
  return {
    type: GET_PROVINCE_VN_SUCCESS,
    data,
  };
}

export function getDistrict(body) {
  return {
    type: GET_DISTRICT,
    body,
  };
}

export function getDistrictSuccess(data) {
  return {
    type: GET_DISTRICT_SUCCESS,
    data,
  };
}

export function getWard(body) {
  return {
    type: GET_WARD,
    body,
  };
}

export function getWardSuccess(data) {
  return {
    type: GET_WARD_SUCCESS,
    data,
  };
}

export function getHistory(body) {
  return {
    type: GET_HISTORY,
    body,
  };
}
export function getHistorySuccess(data) {
  return {
    type: GET_HISTORY_SUCCESS,
    data,
  };
}

export function getMST(body) {
  return {
    type: GET_MST,
    body,
  };
}

export function getMSTSuccess(data) {
  return {
    type: GET_MST_SUCCESS,
    data,
  };
}

export function addPartner(body, callback) {
  return {
    type: ADD_PARTNER,
    body,
    callback,
  };
}

export function addPartnerSuccess() {
  return {
    type: ADD_PARTNER_SUCCESS,
  };
}

export function getListCreatedPartner() {
  return {
    type: GET_LIST_CREATED_PARTNER,
  };
}

export function getListCreatedPartnerSuccess(data) {
  return {
    type: GET_LIST_CREATED_PARTNER_SUCCESS,
    data,
  };
}

export function getListOptionPartner(body) {
  return {
    type: GET_LIST_OPTION_PARTNER,
    body,
  };
}

export function getListOptionPartnerSuccess(data) {
  return {
    type: GET_LIST_OPTION_PARTNER_SUCCESS,
    data,
  };
}

export function searchAdvancePartner(body) {
  return {
    type: SEARCH_ADVANCE_PARTNER,
    body,
  };
}

export function searchAdvancePartnerSuccess(data) {
  return {
    type: SEARCH_ADVANCE_PARTNER_SUCCESS,
    data,
  };
}

export function getDistrictContact(body) {
  return {
    type: GET_DISTRICT_CONTACT,
    body,
  };
}

export function getDistrictContactSuccess(data) {
  return {
    type: GET_DISTRICT_CONTACT_SUCCESS,
    data,
  };
}

export function getWardContact(body) {
  return {
    type: GET_WARD_CONTACT,
    body,
  };
}

export function getWardContactSuccess(data) {
  return {
    type: GET_WARD_CONTACT_SUCCESS,
    data,
  };
}

export function resetDistrictAndWardPartner() {
  return {
    type: RESET_LOCAL_PARTNER,
  };
}
