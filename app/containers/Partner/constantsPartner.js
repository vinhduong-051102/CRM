import { REDUX_KEY } from '../../utils/constants';

export const RESET_REDUX = `${REDUX_KEY.partner}/RESET_REDUX`;
export const RESET_INFO = `${REDUX_KEY.partner}/RESET_INFO`;
export const RESET_CONFIRM_INFO = `${REDUX_KEY.partner}/RESET_CONFIRM_INFO`;
export const RESET_HISTORY = `${REDUX_KEY.partner}/RESET_HISTORY`;
export const REQUEST_BEGIN = `${REDUX_KEY.partner}/REQUEST_BEGIN`;
export const REQUEST_FALSE = `${REDUX_KEY.partner}/REQUEST_FALSE`;
export const GET_LIST_PARTNER = `${REDUX_KEY.partner}/GET_LIST_PARTNER`;
export const GET_LIST_PARTNER_SUCCESS = `${REDUX_KEY.partner}/GET_LIST_PARTNER_SUCCESS`;
export const SEARCH_EASY_PARTNER = `${REDUX_KEY.partner}/SEARCH_EASY_PARTNER`;
export const SEARCH_EASY_PARTNER_SUCCESS = `${REDUX_KEY.partner}/SEARCH_EASY_PARTNER_SUCCESS`;
export const GET_DETAIL_PARTNER = `${REDUX_KEY.partner}/GET_DETAIL_PARTNER`;
export const GET_DETAIL_PARTNER_SUCCESS = `${REDUX_KEY.partner}/GET_DETAIL_PARTNER_SUCCESS`;
export const EXPORT_FILE = `${REDUX_KEY.partner}/EXPORT_FILE`;
export const GET_PROVINCE_VN = `${REDUX_KEY.partner}/GET_PROVINCE_VN`;
export const GET_PROVINCE_VN_SUCCESS = `${REDUX_KEY.partner}/GET_PROVINCE_VN_SUCCESS`;
export const GET_DISTRICT = `${REDUX_KEY.partner}/GET_DISTRICT`;
export const GET_DISTRICT_SUCCESS = `${REDUX_KEY.partner}/GET_DISTRICT_SUCCESS`;
export const GET_WARD = `${REDUX_KEY.partner}/GET_WARD`;
export const GET_WARD_SUCCESS = `${REDUX_KEY.partner}/GET_WARD_SUCCESS`;
export const GET_HISTORY = `${REDUX_KEY.partner}/GET_HISTORY`;
export const GET_HISTORY_SUCCESS = `${REDUX_KEY.partner}/GET_HISTORY_SUCCESS`;
export const GET_LIST_CREATED_PARTNER = `${REDUX_KEY.partner}/GET_LIST_CREATED_PARTNER`;
export const GET_LIST_CREATED_PARTNER_SUCCESS = `${REDUX_KEY.partner}/GET_LIST_CREATED_PARTNER_SUCCESS`;
export const GET_LIST_OPTION_PARTNER = `${REDUX_KEY.partner}/GET_LIST_OPTION_PARTNER`;
export const GET_LIST_OPTION_PARTNER_SUCCESS = `${REDUX_KEY.partner}/GET_LIST_OPTION_PARTNER_SUCCESS`;
export const SEARCH_ADVANCE_PARTNER = `${REDUX_KEY.partner}/SEARCH_ADVANCE_PARTNER`;
export const SEARCH_ADVANCE_PARTNER_SUCCESS = `${REDUX_KEY.partner}/SEARCH_ADVANCE_PARTNER_SUCCESS`;
export const RESET_LOCAL_PARTNER = `${REDUX_KEY.partner}/RESET_LOCAL_PARTNER`;

export const GET_MST = `${REDUX_KEY.partner}/GET_MST`;
export const GET_MST_SUCCESS = `${REDUX_KEY.partner}/GET_MST_SUCCESS`;

export const ADD_PARTNER = `${REDUX_KEY.partner}/ADD_PARTNER`;
export const ADD_PARTNER_SUCCESS = `${REDUX_KEY.partner}/ADD_PARTNER_SUCCESS`;

export const RESET_LOCAL = `${REDUX_KEY.partner}/RESET_LOCAL`;

export const GET_DISTRICT_CONTACT = `${REDUX_KEY.partner}/GET_DISTRICT_CONTACT`;
export const GET_DISTRICT_CONTACT_SUCCESS = `${REDUX_KEY.partner}/GET_DISTRICT_IN_CONTACT`;
export const GET_WARD_CONTACT = `${REDUX_KEY.partner}/GET_WARD_CONTACT`;
export const GET_WARD_CONTACT_SUCCESS = `${REDUX_KEY.partner}/GET_WARD_IN_CONTACT`;

export const CURRENT_PAGE = 'currentPage';
export const PAGE_SIZE = 'pageSize';
export const TEXT_SEARCH = 'textSearch';
export const CATEGORY_ID = 'categoryId';
export const OBJECT_ID = 'objectId';
export const OBJECT_GUID = 'objectGuid';
export const IDS = 'ids';
export const PARTNER_TYPE_ID = 'partnerTypeId';
export const USER_CREATE_ID = 'userIdCreateds';
export const ACTIVE_ID = 'activeId';
export const BEGIN_DATE = 'beginDate';
export const END_DATE = 'endDate';
export const FULL_NAME = 'fullName';
export const PHONE_NUMBER = 'phoneNumber';

export const MAIN_PHONE_NUMBER = 'mainPhoneNumber';
export const MINOR_PHONE_NUMBER = 'minorPhoneNumber';
export const EMAIL = 'email';
export const ADDRESS = 'address';
export const NOTE = 'note';

export const CONTACT_PERSON = 'contactPerson';
export const PARTNER_TYPE_NAME = 'partnerTypeName';
export const CODE = 'code';
export const NAME = 'name';
export const PHONE = 'phone';
export const USER_CREATE = 'userNameCreated';
export const CREATE_DATE = 'createdDate';
export const IS_ACTIVE = 'isActive';
export const ACTIVE_NAME = 'activeName';

export const LIST_PARTNER_TYPE = [
  {
    value: '0',
    label: 'Tất cả',
  },
  {
    value: '1',
    label: 'Đơn vị',
  },
  {
    value: '2',
    label: 'Cá nhân',
  },
];

export const LIST_STATUS_TYPE = [
  {
    value: '-1',
    label: 'Tất cả',
  },
  {
    value: '0',
    label: 'Không hoạt động',
  },
  {
    value: '1',
    label: 'Hoạt động',
  },
];
