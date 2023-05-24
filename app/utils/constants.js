export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const MAX_OF_RECORD = 50000;
export const REGEX_PHONE_NUMBER = /^(0|\+{0,1}84)((3[2-9])|(5[25689])|(7[06-9])|(8[1-9])|(9[0-46-9]))(\d){7}$/;
export const REGEX_PHONE_NUMBER_LANDLINE = /^(0|\+{0,1}84)2([48](\d){7,8}|(0[3-9]|1[0-9]|2[0-25-9]|3[2-9]|5[124-9]|6[0-39]|7[0-7]|9[0-4679])(\d){6,7})$/;
// eslint-disable-next-line no-useless-escape
export const REGEX_EMAIL = /^[\w_\.]{3,32}@([\w-]+\.)+[\w-]{2,4}$/;

export const REGEX_MST = /^([0-9]{10}|[0-9]{13}|[0-9]{10}[-][0-9]{3}|[a-zA-Z0-9.]{8})$/g;
export const REGEX_CMND_CCCD = /^([0-9]{9}|[0-9]{12}|[A-Z]([0-9]{7}))$/g;
export const REGEX_PASSWORD = /^(?=.{8,})((?=.*[^a-zA-Z\s])(?=.*[a-z])(?=.*[A-Z])|(?=.*[^a-zA-Z0-9\s])(?=.*\d)(?=.*[a-zA-Z])).*$/;
export const REGEX_PROFILE_NAME = /[a-zA-Z0-9.]/;
export const REGEX_SAMPLE_CHARACTERS = /^(.)\1*$/g;

export const REGEX_PASSPORT = /^[A-Z]([0-9]{7})$/;
// Ma ngan sach
export const REGEX_MNS = /[a-zA-Z0-9.]{8}/;

export const REGEX_ALPHABET = /^[a-zA-Z]*$/g;
export const REGEX_NUMBER = /^[0-9]*$/g;
export const REGEX_ONLY_NUMBER = /^\d{10}$/;

export const DEFAULT_PARAM = {
  partnerType: '0',
  textSearch: '',
  currentPage: 1,
  pageSize: 50,
};

export const DEFAULT_PARAM_EASY_SEARCH = {
  currentPage: 1,
  pageSize: 50,
  textSearch: '',
  categoryId: 0,
  objectId: 0,
};

export const DEFAULT_PARAM_ADVANCE_SEARCH_PARTNER = {
  currentPage: 1,
  pageSize: 50,
  textSearch: '',
  ids: '',
  partnerTypeId: 0,
  userIdCreateds: '',
  activeId: 0,
};

export const DEFAULT_PARAM_ADVANCE_SEARCH_PROFILE = {
  currentPage: 1,
  pageSize: 50,
  textSearch: '',
  categoryId: 0,
  objectId: 0,
  profileCategoryIds: '',
  ids: '',
  signerIds: '',
  textSampleIds: '',
  profileSource: '-1',
  statusIds: '',
  userCreateIds: '',
};

export const COOKIES = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  superPass: 'SP_eC',
};

export const STORAGE = {
  userInfo: 'userInfo',
  tokenId: 'tokenId',
  expandMenu: 'expandMenu',
};

export const REDUX_KEY = {
  app: 'app',
  login: 'login',
  accountManagement: 'accountManagement',
  partner: 'partner',
  profile: 'profile',
};

export const TIME_ALL = '1';
export const TIME_OPTION_TODAY = '2';
export const TIME_OPTION_FROM_THIS_WEEK = '3';
export const TIME_OPTION_FROM_LAST_WEEK = '4';
export const TIME_OPTION_FROM_THIS_MONTH = '5';
export const TIME_OPTION_FORM_LAST_MONTH = '6';
export const TIME_OPTION_PERIOD = '7';

export const LIST_CREATE_TIME = [
  {
    value: TIME_ALL,
    label: 'Tất cả',
  },
  {
    value: TIME_OPTION_TODAY,
    label: 'Hôm nay',
  },
  {
    value: TIME_OPTION_FROM_THIS_WEEK,
    label: 'Từ tuần này',
  },
  {
    value: TIME_OPTION_FROM_LAST_WEEK,
    label: 'Từ đầu tuần trước',
  },
  {
    value: TIME_OPTION_FROM_THIS_MONTH,
    label: 'Từ đầu tháng này',
  },
  {
    value: TIME_OPTION_FORM_LAST_MONTH,
    label: 'Từ đầu tháng trước',
  },
  {
    value: TIME_OPTION_PERIOD,
    label: 'Khoảng thời gian',
  },
];

export const PATH_ROOT = '/';
export const PATH_LOGIN = '/login';
export const PATH_PARTNER = '/partner';
export const PATH_ROLE_GROUP = '/role-group';
export const PATH_PROFILE = '/profile';
export const PATH_SYSTEM = '/system';
export const PATH_POSITION = '/position';
export const PATH_ROLE = '/role';
export const PATH_USER = '/user';
export const PATH_DASH_BOARD = '/dashboard';
export const PATH_PROFILE_TYPE = '/profile-type';
export const PATH_ACCOUNT = '/account';
export const PATH_TOOL = '/tool';
export const PATH_AUTHORIZATION = '/authorization';
export const PATH_SIGN_HSM = '/path-HSM';
export const PATH_LOG_ERROR = '/searchLog';
export const PATH_DEMO = '/demo';
export const PATH_SAMPLE_TEXT_TYPE = '/sample-text-type';
export const PATH_EMAIL_CONFIG = '/emailConfig';
export const PATH_SIGN_CONFIG = '/signConfig';
export const PATH_TEXT_SAMPLE = '/textSample';
export const PATH_HEALTH_CHECK = '/health-check';
export const PATH_REPORT = '/report';
export const PATH_RUN_STORED_PROCEDURE = '/runStoredProcedure';

export const MENU_PARTNER_PERMISSION = '1';
export const MENU_PROFILE_PERMISSION = '2';
export const MENU_SYSTEM_PERMISSION = '3';
export const SUB_MENU_DEPARTMENT = '31';
export const SUB_MENU_POSITION = '32';
export const SUB_MENU_ROLE = '33';
export const SUB_MENU_USER = '34';
export const MENU_DASH_BOARD_PERMISSION = '4';

export const ListIcon = [
  'pictext',
  'timespen2',
  'editpen2',
  'pictextgray',
  'onlyText',
  'onlyPic',
  'sign1',
  'sign2',
  'sign3',
  'sign4',
  'sign5',
  'sign1gray',
  'sign2gray',
  'sign3gray',
  'sign4gray',
  'sign5gray',
  'info1',
  'black-dot-1',
  'white-dot-1',
  'square-1',
  'setting-white',
  'success-green',
  'icon-remote-signing',
  'editTypeConfigGray',
  'select-cks',
  'sign-accept',
  'delete-cks',
  'search-mini',
  'play-icon-mini',
  'pause-icon-mini',
  'icon-tool',
  'setting-green',
  'error-version',
  'drop-left',
  'drop-right',
  'drop-bottom',
  'sub-custom',
  'collapse',
  'expanded',
  'support-icon',
  'play-icon',
  'pause-icon',
  'file-excel',
  'import-black',
  'add-black',
  'helper',
  'checked-white',
  'logo-white',
  'export-white',
  'showlist',
  'hiddenlist',
  'search2',
  'graydot',
  'vbm-upload',
  'vbm-pen',
  'vbm-tv',
  'setting-grey',
  'logoLogin',
  'pen-black',
  'pen-primary',
  'signPage',
  'upload-green',
  'apart-apart',
  'warning-1',
  'plus-plus',
  'eraser',
  'square-square',
  'red-warning',
  'black-dot',
  'warning-usb2',
  'upload-success',
  'rectangle-black',
  'dot-black',
  'dot-border',
  'edit-primary',
  'white-upload',
  'arrow-down-primary-black',
  'expire-date-sign',
  'zoom-in',
  'zoom-out',

  'edittimes1',
  'editpen1',
  'arrow-down-primary',
  'arrow-up-primary',
  'deleteRow',
  'pin',
  'hierarchy',
  'chart',
  'settings',
  'database',
  'notes',
  'logo',
  'add',
  'onlytextgray',
  'onlypicgray',
  'search',
  'arrowDown',
  'arrowDownTree',
  'arrow-menu',
  'trashCan',
  'threeDots',
  'dot',
  'd-check',
  'icon-confirm',
  'bin',
  'edit',
  'send-message',
  'handout',
  'g-chart',
  'curved-previous',
  'cheque',
  'handout-2',
  'check-list',
  'box-confirm',
  'stationery',
  'menu',
  'filter-white',
  'remove',
  'back',
  'restore',
  'refresh',
  'add-blue',
  'close-icon',
  'filter-remove',
  'users',
  'access-key',
  'meeting',
  'cancel',
  'undo',
  'check',
  'role-group',
  'authorization',
  'notice-success',
  'refresh-blue',
  'notice-error',
  'icon-arrow-down',
  'faq',
  'warning',
  'menu-log-work',
  'menu-product',
  'menu-config',
  'menu-role-group',
  'menu-authori',
  'filter-black',
  'confirm',
  'history',
  'arrow-right',
  'arrow-down',
  'calendar',
  'warning_red',
  'warning_green',
  'warning_yellow',
  'confirm-lw',
  'file-text',
  'folder',
  'vbm',
  'people',
  'icon-system',
  'download',
  'download-grey',
  'eye',
  'warning-cancel',
  'sign_success',
  'download_orange',
  'eye_orange',
  'sign_in',
  'user_login',
  'lock_login',
  'defaultAvatar',
  'warningInactive',
  'updateUnit',
  'trashRed',
  'lock',
  'filter-main',
  'notice1',
  'notice2',
  'notice3',
  'notice4',
  'statistic',
  'sql',
  'searchStatistic',
  'exportStatistic',
  'editTypeConfig',
  'configTypeProfile',
  'noticePartner',
  'uploadProfile',
  'trashIcon',
  'iconPdf',
  'point-up',
  'partner',
  'closeSigner',
  'checkEnabled',
  'checkDisabled',
  'hidePassLogin',
  'warning-usb',
  'signSuccess',
  'iconSigned',
  'iconRejectSigned',
  'copy',
  'sign',
  'warning_default',
  'process_group',
  'arrow_down_white',
  'arrow_down',
  't_warning_default',
  'not-cks',
  'warningAmber',
  'warningCKS',
  'logoutIcon',
  'signMethod',
  'bigLogo',
  'closeTab',
  'uploadVBM',
  'writeVBM',
  'starOrange',
  'settingVBM',
  'uploadVBMIcon',
  'empty',
  'emptySign',
  'copyVBM',
  'add-primary',
  'addRowAbove',
  'addRowBelow',
];
