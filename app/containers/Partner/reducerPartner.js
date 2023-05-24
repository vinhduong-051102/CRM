import produce from 'immer';
import {
  GET_DETAIL_PARTNER_SUCCESS,
  GET_DISTRICT_SUCCESS,
  GET_LIST_PARTNER,
  GET_LIST_PARTNER_SUCCESS,
  GET_MST,
  GET_MST_SUCCESS,
  GET_PROVINCE_VN_SUCCESS,
  GET_WARD_SUCCESS,
  REQUEST_FALSE,
  RESET_REDUX,
  SEARCH_EASY_PARTNER,
  SEARCH_EASY_PARTNER_SUCCESS,
  GET_HISTORY_SUCCESS,
  RESET_INFO,
  RESET_HISTORY,
  GET_LIST_CREATED_PARTNER_SUCCESS,
  GET_LIST_OPTION_PARTNER_SUCCESS,
  SEARCH_ADVANCE_PARTNER_SUCCESS,
  RESET_CONFIRM_INFO,
  RESET_LOCAL,
  GET_DISTRICT_CONTACT_SUCCESS,
  GET_WARD_CONTACT_SUCCESS,
  RESET_LOCAL_PARTNER,
} from './constantsPartner';

export const initialState = {
  isLoading: false,
  listPartner: [],
  totalCount: 0,
  detailPartner: {},
  listProvinceVn: [],
  listDistrict: [],
  listWard: [],
  infoMST: {},
  isLoadingGetMST: false,
  listHistory: [],
  listCreatedPartner: [],
  listOptionPartner: [],

  listDistrictContact: [],
  listWardContact: [],
};

/* eslint-disable default-case, no-param-reassign */
const partnerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_LOCAL:
        draft.listDistrictContact = [];
        draft.listWardContact = [];
        break;
      case RESET_LOCAL_PARTNER:
        draft.listWard = [];
        draft.listDistrict = [];
        break;
      case RESET_REDUX:
        draft.isLoading = false;
        draft.listPartner = [];
        draft.listCreatedPartner = [];
        draft.listOptionPartner = [];
        break;
      case RESET_INFO:
        draft.detailPartner = {};
        break;
      case RESET_CONFIRM_INFO:
        draft.infoMST = {};
        break;
      case RESET_HISTORY:
        draft.listHistory = [];
        break;
      case REQUEST_FALSE:
        draft.isLoading = false;
        break;
      case GET_LIST_PARTNER:
      case SEARCH_EASY_PARTNER:
        draft.isLoading = true;
        break;
      case GET_LIST_PARTNER_SUCCESS:
      case SEARCH_EASY_PARTNER_SUCCESS:
      case SEARCH_ADVANCE_PARTNER_SUCCESS:
        draft.isLoading = false;
        draft.listPartner = action.data.object.data;
        draft.totalCount = action.data.object.totalCount;
        break;
      case GET_DETAIL_PARTNER_SUCCESS:
        draft.detailPartner = action.data.data.object;
        break;
      case GET_PROVINCE_VN_SUCCESS:
        draft.listProvinceVn = action.data.data.object;
        break;
      case GET_DISTRICT_SUCCESS:
        draft.listDistrict = action.data.data.object;
        break;
      case GET_WARD_SUCCESS:
        draft.listWard = action.data.data.object;
        break;
      case GET_MST:
        draft.isLoadingGetMST = true;
        break;
      case GET_MST_SUCCESS:
        draft.isLoadingGetMST = false;
        draft.infoMST = action.data.data.object;
        break;
      case GET_HISTORY_SUCCESS:
        draft.listHistory = action.data.data.object.data;
        break;
      case GET_LIST_CREATED_PARTNER_SUCCESS:
        draft.listCreatedPartner = action.data.data.object;
        break;
      case GET_LIST_OPTION_PARTNER_SUCCESS:
        draft.listOptionPartner = action.data.object.data;
        break;

      case GET_DISTRICT_CONTACT_SUCCESS:
        draft.listDistrictContact = action.data.data.object;
        break;
      case GET_WARD_CONTACT_SUCCESS:
        draft.listWardContact = action.data.data.object;
        break;
    }
  });

export default partnerReducer;
