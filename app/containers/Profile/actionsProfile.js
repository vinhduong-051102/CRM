import {
  GET_PROFILE_REVIEWER_LIST,
  GET_PROFILE_REVIEWER_LIST_SUCCESS,
  SEARCH_ADVANCE_PROFILE,
  SEARCH_ADVANCE_PROFILE_SUCCESS,
  CREATE_PROFILE_ONLINE,
  GET_INFORMATION_OBJECT_SIGN,
  GET_LIST_CREATOR,
  GET_LIST_CREATOR_SUCCESS,
  GET_LIST_OBJECT_SIGN,
  GET_LIST_OBJECT_SIGN_SUCCESS,
  GET_LIST_PROFILE,
  GET_LIST_PROFILE_SAMPLE,
  GET_LIST_PROFILE_SAMPLE_SUCCESS,
  GET_LIST_PROFILE_SUCCESS,
  GET_LIST_PROFILE_TYPE,
  GET_LIST_PROFILE_TYPE_SUCCESS,
  GET_LIST_SIGN_TYPE,
  GET_LIST_SIGN_TYPE_SUCCESS,
  GET_LIST_SIGNER_BY_PROFILE_SAMPLE,
  GET_LIST_SIGNER_BY_PROFILE_SAMPLE_SUCCESS,
  GET_LIST_STATUS,
  GET_LIST_STATUS_SUCCESS,
  GET_LIST_TEXT_BY_NAME,
  GET_LIST_TEXT_BY_NAME_SUCCESS,
  GET_LIST_TEXT_BY_PROFILE_SAMPLE,
  GET_LIST_TEXT_BY_PROFILE_SAMPLE_SUCCESS,
  GET_LIST_TYPE_OF_PROFILE,
  GET_LIST_TYPE_OF_PROFILE_SUCCESS,
  GET_PROFILE_DETAIL,
  GET_PROFILE_DETAIL_SUCCESS,
  POST_PROFILE_TYPE,
  REQUEST_FALSE,
  RESET_ADD_AND_EDIT_PROFILE_ONLINE,
  GET_LIST_BROWSING_FLOW_SUCCESS,
  GET_LIST_BROWSING_FLOW,
  RESET_INFORMATION,
  SEARCH_EASY_PROFILE,
  SEARCH_EASY_PROFILE_SUCCESS,
  GET_LIST_DOCUMENT_PDF,
  GET_LIST_DOCUMENT_PDF_SUCCESS,
  CONFIRM_PROFILE,
  GET_LIST_LIST_VB,
  GET_LIST_LIST_VB_SUCCESS,
} from './constantsProfile';

export function requestFalse() {
  return {
    type: REQUEST_FALSE,
  };
}

export function resetAddAndEditProfileOnline() {
  return {
    type: RESET_ADD_AND_EDIT_PROFILE_ONLINE,
  };
}

export function resetInformation() {
  return {
    type: RESET_INFORMATION,
  };
}

export function searchEasyProfile(body) {
  return {
    type: SEARCH_EASY_PROFILE,
    body,
  };
}

export function searchEasyProfileSuccess(data) {
  return {
    type: SEARCH_EASY_PROFILE_SUCCESS,
    data,
  };
}

export function getListProfileSample() {
  return {
    type: GET_LIST_PROFILE_SAMPLE,
  };
}

export function getListProfileSampleSuccess(data) {
  return {
    type: GET_LIST_PROFILE_SAMPLE_SUCCESS,
    data,
  };
}

export function getListSignerByProfileSample(guid) {
  return {
    type: GET_LIST_SIGNER_BY_PROFILE_SAMPLE,
    guid,
  };
}

export function getListSignerByProfileSampleSuccess(data) {
  return {
    type: GET_LIST_SIGNER_BY_PROFILE_SAMPLE_SUCCESS,
    data,
  };
}

export function getListTextByProfileSample(guid) {
  return {
    type: GET_LIST_TEXT_BY_PROFILE_SAMPLE,
    guid,
  };
}

export function getListTextByProfileSampleSuccess(data) {
  return {
    type: GET_LIST_TEXT_BY_PROFILE_SAMPLE_SUCCESS,
    data,
  };
}

export function getListProfileType() {
  return {
    type: GET_LIST_PROFILE_TYPE,
  };
}

export function getListProfileTypeSuccess(data) {
  return {
    type: GET_LIST_PROFILE_TYPE_SUCCESS,
    data,
  };
}

export function getProfileDetail(guid) {
  return {
    type: GET_PROFILE_DETAIL,
    guid,
  };
}

export function getProfileDetailSuccess(data) {
  return {
    type: GET_PROFILE_DETAIL_SUCCESS,
    data,
  };
}

export function createProfileOnline(body, callback) {
  return {
    type: CREATE_PROFILE_ONLINE,
    body,
    callback,
  };
}

export function getListBrowsingFlow() {
  return {
    type: GET_LIST_BROWSING_FLOW,
  };
}

export function getListBrowsingFlowSuccess(data) {
  return {
    type: GET_LIST_BROWSING_FLOW_SUCCESS,
    data,
  };
}

export function searchAdvanceProfile(body) {
  return {
    type: SEARCH_ADVANCE_PROFILE,
    body,
  };
}

export function searchAdvanceProfileSuccess(data) {
  return {
    type: SEARCH_ADVANCE_PROFILE_SUCCESS,
    data,
  };
}

export function getProfileReviewerList(nodeId, callback) {
  return {
    type: GET_PROFILE_REVIEWER_LIST,
    nodeId,
    callback,
  };
}

export function getListProfile(payload) {
  return {
    type: GET_LIST_PROFILE,
    payload,
  };
}

export function getListObjectSign(payload) {
  return {
    type: GET_LIST_OBJECT_SIGN,
    payload,
  };
}

export function getListStatus() {
  return {
    type: GET_LIST_STATUS,
  };
}

export function getListTextByName(payload) {
  return {
    type: GET_LIST_TEXT_BY_NAME,
    payload,
  };
}

export function getListProfileSuccess(payload) {
  return {
    type: GET_LIST_PROFILE_SUCCESS,
    payload,
  };
}

export function getListObjectSignSuccess(payload) {
  return {
    type: GET_LIST_OBJECT_SIGN_SUCCESS,
    payload,
  };
}

export function getListStatusSuccess(payload) {
  return {
    type: GET_LIST_STATUS_SUCCESS,
    payload,
  };
}

export function getListTextByNameSuccess(payload) {
  return {
    type: GET_LIST_TEXT_BY_NAME_SUCCESS,
    payload,
  };
}

export function getListTypeOfProfile() {
  return {
    type: GET_LIST_TYPE_OF_PROFILE,
  };
}

export function getListTypeOfProfileSuccess(payload) {
  return {
    type: GET_LIST_TYPE_OF_PROFILE_SUCCESS,
    payload,
  };
}

export function addProfileType(body, callback) {
  return {
    type: POST_PROFILE_TYPE,
    body,
    callback,
  };
}

export function getProfileReviewerListSuccess(data) {
  return {
    type: GET_PROFILE_REVIEWER_LIST_SUCCESS,
    data,
  };
}

export function getInformationObjectSign(body, callback) {
  return {
    type: GET_INFORMATION_OBJECT_SIGN,
    body,
    callback,
  };
}

export function getListSignType() {
  return {
    type: GET_LIST_SIGN_TYPE,
  };
}

export function getListSignTypeSuccess(data) {
  return {
    type: GET_LIST_SIGN_TYPE_SUCCESS,
    data,
  };
}

export function getListCreator(body) {
  return {
    type: GET_LIST_CREATOR,
    body,
  };
}

export function getListCreatorSuccess(data) {
  return {
    type: GET_LIST_CREATOR_SUCCESS,
    data,
  };
}

export function getListDocumentPdf(id) {
  return {
    type: GET_LIST_DOCUMENT_PDF,
    id,
  };
}

export function getListDocumentPdfSuccess(data) {
  return {
    type: GET_LIST_DOCUMENT_PDF_SUCCESS,
    data,
  };
}

export function confirmProfile(body, callback) {
  return {
    type: CONFIRM_PROFILE,
    body,
    callback,
  };
}

export function getListVB() {
  return {
    type: GET_LIST_LIST_VB,
  };
}

export function getListVBSuccess(data) {
  return {
    type: GET_LIST_LIST_VB_SUCCESS,
    data,
  };
}
