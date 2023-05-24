import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constantsProfile';
import * as actions from './actionsProfile';
import { axiosGet, axiosPost } from '../../utils/request';

export function* searchEasyProfile(action) {
  const path = '/ProfileExtension/GetListEasySearch';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data.isOk) {
      yield put(actions.searchEasyProfileSuccess(res.data.object));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListProfileSample() {
  const path = '/EC/GetListProfileType';
  try {
    const res = yield call(axiosGet, path);
    if (res.data.isOk) {
      yield put(actions.getListProfileSampleSuccess(res.data.object));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListSignerByProfileSample(action) {
  const path = `/EC/GetListSignerByProfileTypeGuid?ProfileTypeGuid=${action.guid}`;
  try {
    const res = yield call(axiosGet, path);
    if (res.data.isOk) {
      yield put(actions.getListSignerByProfileSampleSuccess(res.data.object));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListTextByProfileSample(action) {
  const path = `/EC/GetListTextSampleByProfileTypeGuid?ProfileTypeGuid=${action.guid}`;
  try {
    const res = yield call(axiosGet, path);
    if (res.data.isOk) {
      yield put(actions.getListTextByProfileSampleSuccess(res.data.object));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListProfileType() {
  const path = '/ProfileCategory/GetList';
  try {
    const res = yield call(axiosGet, path);
    if (res.data.isOk) {
      yield put(actions.getListProfileTypeSuccess(res.data.object));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getProfileDetail(action) {
  const path = `/ProfileExtension/ViewDetail?objectGuid=${action.guid}`;
  try {
    const res = yield call(axiosGet, path);
    if (res.data.isOk) {
      yield put(actions.getProfileDetailSuccess(res.data.object));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* createProfileOnline(action) {
  const path = '/EC/CreateByDataObject';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data.isOk) {
      action.callback(res);
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}
export function* getProfileReviewerList(action) {
  const path = `/ProfileExtension/GetListBrowsingFlowByNote?NodeId=${action.nodeId}`;
  try {
    const res = yield call(axiosGet, path);
    if (res.data.isOk) {
      yield put(actions.getProfileReviewerListSuccess(res.data.object));
      action.callback();
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListBrowsingFlow(action) {
  const path = '/ProfileExtension/BrowsingFlow';
  try {
    const res = yield call(axiosGet, path);
    if (res.data.isOk) {
      yield put(actions.getListBrowsingFlowSuccess(res.data.object));
      action.callback();
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* addProfileType(action) {
  const path = '/ProfileCategory/InsertOrUpdate';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data.isOk) {
      action.callback();
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getInformationObjectSign(action) {
  const path = '/Partner/GetListEasySearch';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data.isOk) {
      action.callback(res.data.object.data);
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* searchAdvanceProfile(action) {
  const path = '/ProfileExtension/GetListAdvancedSearch';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data.isOk) {
      yield put(actions.searchAdvanceProfileSuccess(res.data.object));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListProfile(action) {
  const path = 'ProfileExtension/GetListAdvancedSearchName';
  try {
    const res = yield call(axiosPost, path, action.payload);
    if (res.status === 200) {
      yield put(actions.getListProfileSuccess(res.data.object));
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListSignType() {
  const path = '/EC/GetListTypeSign';
  try {
    const res = yield call(axiosGet, path);
    if (res.data.isOk) {
      yield put(actions.getListSignTypeSuccess(res.data.object));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListStatus() {
  const path = 'ProfileExtensionStatus/GetAllProfileExtensionStatus';
  try {
    const res = yield call(axiosGet, path);
    if (res.status === 200) {
      yield put(actions.getListStatusSuccess(res.data.object));
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListObjectSign(action) {
  const path = 'ProfileExtensionSinger/GetListAdvancedSearchName';
  try {
    const res = yield call(axiosPost, path, action.payload);
    if (res.status === 200) {
      yield put(actions.getListObjectSignSuccess(res.data.object));
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListTypeOfProfile() {
  const path = 'ProfileCategory/GetList';
  try {
    const res = yield call(axiosGet, path);
    if (res.status === 200) {
      yield put(actions.getListTypeOfProfileSuccess(res.data.object));
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListCreator(action) {
  const path = 'AccountUser/GetListAdvancedSearchName';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200) {
      yield put(actions.getListCreatorSuccess(res.data.object));
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListTextByName(action) {
  const path = 'ProfileExtensionTextSample/GetListAdvancedSearchName';
  try {
    const res = yield call(axiosPost, path, action.payload);
    if (res.status === 200) {
      yield put(actions.getListTextByNameSuccess(res.data.object));
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListDocumentPDF(action) {
  const path = `/Incident/GetInfoConfirmInfoProfile?ObjectGuid=${action.id}`;
  try {
    const res = yield call(axiosGet, path);
    if (res) {
      yield put(actions.getListDocumentPdfSuccess(res.data.object));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* confirmProfile(action) {
  const path = '/Incident/ConfirmInfoProfile';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res) {
      action.callback(res.data.object);
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* getListVb() {
  const data = [{ title: 'Giấy ủy quyền' }, { title: 'Thoa thuan ho tro lai suat' }, { title: 'Dang ki su dung dich vu' }];
  try {
    if (true) {
      yield put(actions.getListVBSuccess(data));
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export default function* watchFetchMonitor() {
  yield takeLatest(constants.SEARCH_EASY_PROFILE, searchEasyProfile);
  yield takeLatest(constants.GET_LIST_PROFILE_SAMPLE, getListProfileSample);
  yield takeLatest(constants.GET_LIST_SIGNER_BY_PROFILE_SAMPLE, getListSignerByProfileSample);
  yield takeLatest(constants.GET_LIST_TEXT_BY_PROFILE_SAMPLE, getListTextByProfileSample);
  yield takeLatest(constants.GET_LIST_PROFILE_TYPE, getListProfileType);
  yield takeLatest(constants.CREATE_PROFILE_ONLINE, createProfileOnline);
  yield takeLatest(constants.GET_PROFILE_REVIEWER_LIST, getProfileReviewerList);
  yield takeLatest(constants.GET_LIST_BROWSING_FLOW, getListBrowsingFlow);
  yield takeLatest(constants.SEARCH_ADVANCE_PROFILE, searchAdvanceProfile);
  yield takeLatest(constants.GET_LIST_PROFILE, getListProfile);
  yield takeLatest(constants.GET_LIST_OBJECT_SIGN, getListTextByName);
  yield takeLatest(constants.GET_LIST_TEXT_BY_NAME, getListObjectSign);
  yield takeLatest(constants.GET_LIST_STATUS, getListStatus);
  yield takeLatest(constants.GET_LIST_TYPE_OF_PROFILE, getListTypeOfProfile);
  yield takeLatest(constants.GET_LIST_CREATOR, getListCreator);
  yield takeLatest(constants.GET_PROFILE_DETAIL, getProfileDetail);
  yield takeLatest(constants.POST_PROFILE_TYPE, addProfileType);
  yield takeLatest(constants.GET_INFORMATION_OBJECT_SIGN, getInformationObjectSign);
  yield takeLatest(constants.GET_LIST_SIGN_TYPE, getListSignType);
  yield takeLatest(constants.GET_LIST_DOCUMENT_PDF, getListDocumentPDF);
  yield takeLatest(constants.CONFIRM_PROFILE, confirmProfile);
  yield takeLatest(constants.GET_LIST_LIST_VB, getListVb);
}
