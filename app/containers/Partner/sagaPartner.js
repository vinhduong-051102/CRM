import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constantsPartner';
import * as actions from './actionsPartner';
import { axiosGet, axiosPost } from '../../utils/request';
import { createNameFileExport, downloadFromBase64 } from '../../res/commonFunction';

export function* getListPartner(action) {
  const path = '/Partner/GetList';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data.isOk) {
      yield put(actions.getListPartnerSuccess(res.data));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* searchEasyPartner(action) {
  const path = '/Partner/GetListEasySearch';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data.isOk) {
      yield put(actions.searchEasyPartnerSuccess(res.data));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getDetailPartner(action) {
  yield put(actions.requestBegin());
  const path = `/Partner/ViewDetail?objectGuid=${action.body}`;
  try {
    const res = yield call(axiosGet, path);
    yield put(actions.getDetailPartnerSuccess(res));
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* exportFile(action) {
  yield put(actions.requestBegin());
  const path = !action.isExportEasySearch ? `/Partner/ExportExcel_EasySearch` : `/Partner/ExportExcel_AdvancedSearch`;
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data.status === 0) {
      downloadFromBase64(`DSĐT${createNameFileExport()}.xlsx`, res.data.object);
    }
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* getProvince() {
  yield put(actions.requestBegin());
  const path = `/Region/GetProvinceVN`;
  try {
    const res = yield call(axiosGet, path);
    yield put(actions.getProvinceVnSuccess(res));
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* getDistrict(action) {
  yield put(actions.requestBegin());
  const path = `/Region/GetListByRegionCode?RegionCode=${action.body}`;
  try {
    const res = yield call(axiosGet, path);
    yield put(actions.getDistrictSuccess(res));
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* getWard(action) {
  yield put(actions.requestBegin());
  const path = `/Region/GetListByRegionCode?RegionCode=${action.body}`;
  try {
    const res = yield call(axiosGet, path);
    yield put(actions.getWardSuccess(res));
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* getDistrictContact(action) {
  yield put(actions.requestBegin());
  const path = `/Region/GetListByRegionCode?RegionCode=${action.body}`;
  try {
    const res = yield call(axiosGet, path);
    yield put(actions.getDistrictContactSuccess(res));
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* getWardContact(action) {
  yield put(actions.requestBegin());
  const path = `/Region/GetListByRegionCode?RegionCode=${action.body}`;
  try {
    const res = yield call(axiosGet, path);
    yield put(actions.getWardContactSuccess(res));
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* getMST(action) {
  yield put(actions.requestBegin());
  const path = `Partner/GetInfoTTDN?Code=${action.body}`;
  try {
    const res = yield call(axiosGet, path);
    yield put(actions.getMSTSuccess(res));
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* getListHistory(action) {
  yield put(actions.requestBegin());
  const path = `/Common/GetListHistory`;
  try {
    const res = yield call(axiosPost, path, action.body);
    yield put(actions.getHistorySuccess(res));
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* getListCreatedPartner() {
  const path = `/Partner/GetAllUserNameCreated_Partner`;
  try {
    const res = yield call(axiosGet, path);
    yield put(actions.getListCreatedPartnerSuccess(res));
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* addPartner(action) {
  yield put(actions.requestBegin());
  const path = `Partner/InsertOrUpdate`;
  try {
    const res = yield call(axiosPost, path, action.body);
    if (!res.data.isError) {
      if (action.callback) action.callback();
    }
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* getListOptionPartner(action) {
  const path = '/Partner/GetList';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data.isOk) {
      yield put(actions.getListOptionPartnerSuccess(res.data));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* searchAdvancePartner(action) {
  const path = '/Partner/GetListAdvancedSearch';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data.isOk) {
      yield put(actions.searchAdvancePartnerSuccess(res.data));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export default function* watchFetchMonitor() {
  yield takeLatest(constants.GET_LIST_PARTNER, getListPartner);
  yield takeLatest(constants.SEARCH_EASY_PARTNER, searchEasyPartner);
  yield takeLatest(constants.GET_DETAIL_PARTNER, getDetailPartner);
  yield takeLatest(constants.EXPORT_FILE, exportFile);
  yield takeLatest(constants.GET_PROVINCE_VN, getProvince);
  yield takeLatest(constants.GET_DISTRICT, getDistrict);
  yield takeLatest(constants.GET_WARD, getWard);
  yield takeLatest(constants.GET_MST, getMST);
  yield takeLatest(constants.ADD_PARTNER, addPartner);
  yield takeLatest(constants.GET_HISTORY, getListHistory);
  yield takeLatest(constants.GET_LIST_CREATED_PARTNER, getListCreatedPartner);
  yield takeLatest(constants.GET_LIST_OPTION_PARTNER, getListOptionPartner);
  yield takeLatest(constants.SEARCH_ADVANCE_PARTNER, searchAdvancePartner);
  yield takeLatest(constants.GET_DISTRICT_CONTACT, getDistrictContact);
  yield takeLatest(constants.GET_WARD_CONTACT, getWardContact);
}
