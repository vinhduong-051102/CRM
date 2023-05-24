import { REDUX_KEY } from '../../utils/constants';

export const REQUEST_FALSE = `${REDUX_KEY.profile}/REQUEST_FALSE`;
export const RESET_ADD_AND_EDIT_PROFILE_ONLINE = `${REDUX_KEY.profile}/RESET_ADD_AND_EDIT_PROFILE_ONLINE`;
export const RESET_INFORMATION = `${REDUX_KEY.profile}/RESET_INFORMATION`;
export const SEARCH_EASY_PROFILE = `${REDUX_KEY.profile}/SEARCH_EASY_PROFILE`;
export const SEARCH_EASY_PROFILE_SUCCESS = `${REDUX_KEY.profile}/SEARCH_EASY_PROFILE_SUCCESS`;
export const GET_LIST_PROFILE_SAMPLE = `${REDUX_KEY.profile}/GET_LIST_PROFILE_SAMPLE`;
export const GET_LIST_PROFILE_SAMPLE_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_PROFILE_SAMPLE_SUCCESS`;
export const GET_LIST_SIGNER_BY_PROFILE_SAMPLE = `${REDUX_KEY.profile}/GET_LIST_SIGNER_BY_PROFILE_SAMPLE`;
export const GET_LIST_SIGNER_BY_PROFILE_SAMPLE_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_SIGNER_BY_PROFILE_SAMPLE_SUCCESS`;
export const GET_LIST_TEXT_BY_PROFILE_SAMPLE = `${REDUX_KEY.profile}/GET_LIST_TEXT_BY_PROFILE_SAMPLE`;
export const GET_LIST_TEXT_BY_PROFILE_SAMPLE_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_TEXT_BY_PROFILE_SAMPLE_SUCCESS`;
export const GET_LIST_PROFILE_TYPE = `${REDUX_KEY.profile}/GET_LIST_PROFILE_TYPE`;
export const GET_LIST_PROFILE_TYPE_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_PROFILE_TYPE_SUCCESS`;
export const CREATE_PROFILE_ONLINE = `${REDUX_KEY.profile}/CREATE_PROFILE_ONLINE`;
export const GET_LIST_BROWSING_FLOW = `${REDUX_KEY.profile}/GET_LIST_BROWSING_FLOW`;
export const GET_LIST_BROWSING_FLOW_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_BROWSING_FLOW_SUCCESS`;
export const GET_PROFILE_REVIEWER_LIST = `${REDUX_KEY.profile}/GET_PROFILE_REVIEWER_LIST`;
export const GET_PROFILE_REVIEWER_LIST_SUCCESS = `${REDUX_KEY.profile}/GET_PROFILE_REVIEWER_LIST_SUCCESS`;
export const SEARCH_ADVANCE_PROFILE = `${REDUX_KEY.profile}/SEARCH_ADVANCE_PROFILE`;
export const SEARCH_ADVANCE_PROFILE_SUCCESS = `${REDUX_KEY.profile}/SEARCH_ADVANCE_PROFILE_SUCCESS`;
export const GET_LIST_PROFILE = `${REDUX_KEY.profile}/GET_LIST_PROFILE`;
export const GET_LIST_OBJECT_SIGN = `${REDUX_KEY.profile}/GET_LIST_OBJECT_SIGN`;
export const GET_LIST_STATUS = `${REDUX_KEY.profile}/GET_LIST_STATUS`;
export const GET_LIST_TEXT_BY_NAME = `${REDUX_KEY.profile}/GET_LIST_TEXT_BY_NAME`;
export const GET_LIST_PROFILE_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_PROFILE_SUCCESS`;
export const GET_LIST_OBJECT_SIGN_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_OBJECT_SIGN_SUCCESS`;
export const GET_LIST_STATUS_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_STATUS_SUCCESS`;
export const GET_LIST_TEXT_BY_NAME_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_TEXT_BY_NAME_SUCCESS`;
export const GET_LIST_TYPE_OF_PROFILE = `${REDUX_KEY.profile}/GET_LIST_TYPE_OF_PROFILE`;
export const GET_LIST_TYPE_OF_PROFILE_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_TYPE_OF_PROFILE_SUCCESS`;
export const GET_LIST_CREATOR = `${REDUX_KEY.profile}/GET_LIST_CREATOR`;
export const GET_LIST_CREATOR_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_CREATOR_SUCCESS`;

export const GET_PROFILE_DETAIL = `${REDUX_KEY.profile}/GET_PROFILE_DETAIL`;
export const GET_PROFILE_DETAIL_SUCCESS = `${REDUX_KEY.profile}/GET_PROFILE_DETAIL_SUCCESS`;
export const POST_PROFILE_TYPE = `${REDUX_KEY.profile}/POST_PROFILE_TYPE`;
export const GET_INFORMATION_OBJECT_SIGN = `${REDUX_KEY.profile}/GET_INFORMATION_OBJECT_SIGN`;
export const GET_LIST_SIGN_TYPE = `${REDUX_KEY.profile}/GET_LIST_SIGN_TYPE`;
export const GET_LIST_SIGN_TYPE_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_SIGN_TYPE_SUCCESS`;
export const POST_PROFILE_TYPE_SUCCESS = `${REDUX_KEY.profile}/POST_PROFILE_TYPE_SUCCESS`;
export const GET_LIST_DOCUMENT_PDF = `${REDUX_KEY.profile}/GET_LIST_DOCUMENT_PDF`;
export const GET_LIST_DOCUMENT_PDF_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_DOCUMENT_PDF_SUCCESS`;
export const CONFIRM_PROFILE = `${REDUX_KEY.profile}/CONFIRM_PROFILE`;

export const GET_LIST_LIST_VB = `${REDUX_KEY.profile}/GET_LIST_LIST_VB`;
export const GET_LIST_LIST_VB_SUCCESS = `${REDUX_KEY.profile}/GET_LIST_LIST_VB_SUCCESS`;

export const FIELD_TYPE_TEXTAREA = 1;
export const FIELD_TYPE_NUMBER_BOX = 2;
export const FIELD_TYPE_DATEPICKER = 3;
export const FIELD_TYPE_CHECKBOX = 4;
export const FIELD_TYPE_DROPDOWN_LIST = 5;

export const LIST_PROFILE_SOURCE = [
  {
    value: '-1',
    label: 'Tất cả',
  },
  {
    value: '0',
    label: 'Trực tuyến',
  },
  {
    value: '1',
    label: 'Lưu trữ',
  },
];

export const PROFILE_NAME = 'profileName';
export const PROFILE_CODE = 'profileCode';
export const PROFILE_SAMPLE_CODE = 'profileTypeCode';
export const PROFILE_SAMPLE_NAME = 'profileTypeName';
export const PROFILE_VALUE = 'contractValue';
export const PROFILE_DEADLINE = 'deadlineProfile';
export const PROFILE_TYPE = 'profileCategoryName';
export const DEADLINE_SIGN = 'deadlineSign';
export const CREATE_DATE = 'createDate';
export const USER_NAME_CREATED = 'userNameCreated';
export const STATUS = 'statusName';
export const STATUS_ID = 'profileStatusId';
export const STATUS_NAME = 'statusName';
export const LIST_SIGNER_TEXT = 'ltSignerText';

// TienNAb: Trang thai cua van ban
export const STATUS_NEW_CREATE = 1;
export const STATUS_WAIT_SIGN = 2;
export const STATUS_REFUSE_SIGN = 3;
export const STATUS_DELETED = 4;
export const STATUS_COMPLETE = 5;
export const STATUS_WAIT_APPROVE = 6;
export const STATUS_REFUSE_APPROVE = 7;

// TienNAb: Trang thai cua doi tuong ky van ban
export const OBJECT_SIGN_STATUS_NOT_TIME_TO_SIGN = 0;
export const OBJECT_SIGN_STATUS_WAIT_SIGN = 1;
export const OBJECT_SIGN_STATUS_SIGNED = 2;
export const OBJECT_SIGN_STATUS_REFUSE_SIGN = 3;

export const TIME_UNIT = [
  {
    value: 2,
    label: 'Ngày',
  },
  {
    value: 8,
    label: 'Giờ',
  },
  {
    value: 15,
    label: 'Phút',
  },
  {
    value: '',
    label: 'Vô thời hạn',
  },
];

export const LEVEL_LIST = [
  {
    value: 1,
    label: 'Khẩn cấp',
  },
  {
    value: 2,
    label: 'Trung bình',
  },
  {
    value: 3,
    label: 'Thấp',
  },
];
