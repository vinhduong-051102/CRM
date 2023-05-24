import produce from 'immer';
import {
  GET_PROFILE_REVIEWER_LIST_SUCCESS,
  SEARCH_ADVANCE_PROFILE_SUCCESS,
  GET_LIST_CREATOR_SUCCESS,
  GET_LIST_OBJECT_SIGN_SUCCESS,
  GET_LIST_PROFILE_SAMPLE_SUCCESS,
  GET_LIST_PROFILE_SUCCESS,
  GET_LIST_PROFILE_TYPE_SUCCESS,
  GET_LIST_SIGN_TYPE_SUCCESS,
  GET_LIST_SIGNER_BY_PROFILE_SAMPLE_SUCCESS,
  GET_LIST_STATUS_SUCCESS,
  GET_LIST_TEXT_BY_NAME_SUCCESS,
  GET_LIST_TEXT_BY_PROFILE_SAMPLE_SUCCESS,
  GET_LIST_TYPE_OF_PROFILE_SUCCESS,
  GET_PROFILE_DETAIL_SUCCESS,
  REQUEST_FALSE,
  RESET_ADD_AND_EDIT_PROFILE_ONLINE,
  GET_LIST_BROWSING_FLOW_SUCCESS,
  RESET_INFORMATION,
  SEARCH_EASY_PROFILE,
  SEARCH_EASY_PROFILE_SUCCESS,
  GET_LIST_DOCUMENT_PDF_SUCCESS,
  GET_LIST_LIST_VB_SUCCESS,
} from './constantsProfile';

export const initialState = {
  isLoading: false,
  listProfile: [],
  totalCount: 0,
  listProfileSample: [],
  listProfileType: [],
  listSignerByProfileSample: [],
  listTextByProfileSample: [],
  profileDetail: {},
  listSignType: [],
  listFieldOfText: [],
  listReviewer: [],
  listBrowsingFlow: [],
  profiles: [],
  listStatus: [],
  listTextByName: [],
  listObjectSign: [],
  listTypeOfProfile: [],
  listCreator: [],
  listDocumentPdf: [],
  listVB: [],
};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_FALSE:
        draft.isLoading = false;
        break;
      case RESET_ADD_AND_EDIT_PROFILE_ONLINE:
        draft.listProfileSample = [];
        draft.listProfileType = [];
        draft.listSignerByProfileSample = [];
        draft.listTextByProfileSample = [];
        draft.listSignType = [];
        break;
      case RESET_INFORMATION:
        draft.profileDetail = {};
        break;
      case SEARCH_EASY_PROFILE:
        draft.isLoading = true;
        break;
      case SEARCH_EASY_PROFILE_SUCCESS:
      case SEARCH_ADVANCE_PROFILE_SUCCESS:
        draft.isLoading = false;
        draft.listProfile = action.data.data;
        draft.totalCount = action.data.totalCount;
        break;
      case GET_LIST_PROFILE_SAMPLE_SUCCESS:
        draft.listProfileSample = action.data;
        break;
      case GET_LIST_SIGNER_BY_PROFILE_SAMPLE_SUCCESS:
        draft.listSignerByProfileSample = action.data;
        break;
      case GET_LIST_TEXT_BY_PROFILE_SAMPLE_SUCCESS:
        draft.listTextByProfileSample = action.data;
        break;
      case GET_LIST_PROFILE_TYPE_SUCCESS:
        draft.listProfileType = action.data;
        break;
      case GET_PROFILE_DETAIL_SUCCESS:
        draft.profileDetail = action.data;
        break;
      case GET_LIST_SIGN_TYPE_SUCCESS:
        draft.listSignType = action.data;
        break;
      case GET_LIST_PROFILE_SUCCESS:
        draft.profiles = action.payload;
        break;
      case GET_LIST_STATUS_SUCCESS:
        draft.listStatus = action.payload;
        break;
      case GET_LIST_OBJECT_SIGN_SUCCESS:
        draft.listObjectSign = action.payload;
        break;
      case GET_LIST_TEXT_BY_NAME_SUCCESS:
        draft.listTextByName = action.payload;
        break;
      case GET_LIST_TYPE_OF_PROFILE_SUCCESS:
        draft.listTypeOfProfile = action.payload;
        break;
      case GET_LIST_CREATOR_SUCCESS:
        draft.listCreator = action.data;
        break;
      case GET_LIST_BROWSING_FLOW_SUCCESS:
        draft.listBrowsingFlow = action.data;
        break;
      case GET_PROFILE_REVIEWER_LIST_SUCCESS:
        draft.listReviewer = action.data;
        break;
      case GET_LIST_DOCUMENT_PDF_SUCCESS:
        draft.listDocumentPdf = action.data.listInfoProfileText;
        break;
      case GET_LIST_LIST_VB_SUCCESS:
        draft.listVB = action.data;
        break;
    }
  });

export default profileReducer;
