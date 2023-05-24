import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Form, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import locale from 'antd/es/date-picker/locale/vi_VN';
import moment from 'moment';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducerProfile';
import saga from './sagaProfile';
import {
  Content,
  ContentHeader,
  ContentTitle,
  ContentWrapper,
  HeaderLeft,
  HeaderRight,
  AdvanceSearchWrapper,
  CloseAdvanceView,
  HeaderAdvanceView,
  TitleAdvance,
  ContentAdvanceView,
} from '../../res/commonStyles';
import closeAdvanceIcon from '../../images/iconCloseAdvance.svg';
import advanceIcon from '../../images/iconAdvance.svg';
import refreshAdvanceIcon from '../../images/iconRefeshAdvance.svg';
import Button from '../../res/components/Button';
import AddAndEditProfileOnline from './components/AddAndEditProfileOnline';
import ModalCheckProfile from './components/ModalCheckProfile/Index';
import SelectFloat from '../../res/components/FloatingLabel/SelectFloat';
import { LIST_PROFILE_SOURCE } from './constantsProfile';
import MultiSelectFloat from '../../res/components/FloatingLabel/MultiSelectFloat';
import * as selectors from './selectorsProfile';
import * as actions from './actionsProfile';
import InformationProfile from './components/InformationProfile';
import {
  DEFAULT_PARAM_EASY_SEARCH,
  REDUX_KEY,
  DEFAULT_PARAM_ADVANCE_SEARCH_PROFILE,
  DEFAULT_PARAM,
  TIME_OPTION_PERIOD,
  LIST_CREATE_TIME,
} from '../../utils/constants';
import loadingIcon from '../../images/loading.svg';
import Table from '../../res/components/Table';
import BoldItalyHeader from '../../res/components/TableOtherView/BoldItalyHeader';
import BoldItaly from '../../res/components/TableOtherView/BoldItaly';
import { fdtfM3 } from '../../res/fdtf';
import TableFunction from '../../res/components/TableOtherView/TableFunction';
import RenderObjectSign from './components/RenderObjectSign';
import HistoryProfile from './components/HistoryProfile';
import CopyPageSign from './components/CoppyPageSign';
import { RangerPickerCustom } from '../Partner/stylesPartner';
import { getTimeOption } from '../../res/commonFunction';
import FloatingLabel from '../../res/components/FloatingLabel/Input';

import DetailProfile from './components/DetailProfile';

import ConfirmProfileInformation from './components/ConfirmProfileInformation';

const key = REDUX_KEY.profile;
const Profile = ({ textSearch, objectId, categoryId, showAdvanceSearch, onCloseAdvanceSearch }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const textDocumentFilter = Form.useWatch('document', form);
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [showModalCheckProfile, setShowModalCheckProfile] = useState(false);
  const loading = useSelector(selectors.selectLoading());
  const listProfile = useSelector(selectors.selectListProfile());
  const totalCount = useSelector(selectors.selectTotalCount());

  // TienNAb: Du lieu bo loc nang cao lay tu api
  const listTypeOfProfile = useSelector(selectors.selectListTypeOfProfile());
  const profiles = useSelector(selectors.selectProfiles());
  const listObjectSign = useSelector(selectors.selectListObjectSign());
  // const listTextByName = useSelector(selectors.selectListTextByName());
  const listStatus = useSelector(selectors.selectListStatus());
  const listCreator = useSelector(selectors.selectListCreator());

  // TienNAb: Du lieu cac option cua bo loc nang cao
  const [profileTypeListOption, setProfileTypeListOption] = useState([]);
  const [profileListOption, setProfileListOption] = useState([]);
  const [objectApproveListOption, setObjectApproveListOption] = useState([]);
  const [objectSignListOption, setObjectSignListOption] = useState([]);
  const [statusListOption, setStatusListOption] = useState([]);
  const [creatorListOption, setCreatorListOption] = useState([]);

  // TienNAb: Du lieu cac option da chon cua bo loc nang cao
  const [profileTypeSelect, setProfileTypeSelect] = useState([]);
  const [listProfileSelect, setListProfileSelect] = useState(['all']);
  const [listObjectApproveSelect, setListObjectApproveSelect] = useState([]);
  const [listObjectSignSelect, setListObjectSignSelect] = useState(['all']);
  const [profileSourceSelect, setProfileSourceSelect] = useState('-1');
  const [listStatusSelect, setListStatusSelect] = useState(['all']);
  const [listCreatorSelect, setListCreatorSelect] = useState(['all']);
  const [signDate, setSignDate] = useState('1');
  const [createDate, setCreateDate] = useState('1');
  const [signDateFilter, setSignDateFilter] = useState({});
  const [createDateFilter, setCreateDateFilter] = useState({});

  const [dataEasySearch, setDataEasySearch] = useState(DEFAULT_PARAM_EASY_SEARCH);
  const [dataAdvanceSearch, setDataAdvanceSearch] = useState(DEFAULT_PARAM_ADVANCE_SEARCH_PROFILE);
  const [idProfileSelected, setIdProfileSelected] = useState('');
  const [dataConfirmProfile, setDataConfirmProfile] = useState({});
  const [showAddAndEdit, setShowAddAndEdit] = useState(false);
  const [showPopupConfirmInfo, setShowPopupConfirmInfo] = useState(false);
  const [showInformation, setShowInformation] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showCopyPageSign, setShowCopyPageSign] = useState(false);
  const [isShowDetailProfile, setIsShowDetailProfile] = useState(false);
  const TABLE_ACCOUNT = [
    {
      title: t('common.sttColumnTitle'),
      dataIndex: 'stt',
      key: 'stt',
      width: 90,
      align: 'center',
      render: (text, record, index) => (dataEasySearch.currentPage - 1) * dataEasySearch.pageSize + index + 1,
    },
    {
      title: t('profile.profileType'),
      dataIndex: 'profileCategoryName',
      key: 'profileCategoryName',
      width: 150,
      render: text => <div>{text}</div>,
    },
    {
      title: <BoldItalyHeader name1={t('profile.profileCode')} name2={t('profile.profileName')} isBold />,
      dataIndex: 'profileCode',
      key: 'profileCode',
      render: (text, record) => <BoldItaly name1={text} name2={record.profileName} />,
    },
    {
      title: t('profile.profileObjectSign'),
      dataIndex: 'ltSignerName',
      key: 'ltSignerName',
      render: value => <RenderObjectSign data={value} />,
    },
    {
      title: <BoldItalyHeader name1={t('profile.value')} name2={t('profile.creator')} isBold />,
      dataIndex: 'contractValue',
      key: 'contractValue',
      render: (text, record) => <BoldItaly name1={text} name2={record.userNameCreated} />,
    },
    {
      title: <BoldItalyHeader name1={t('profile.deadlineProcess')} name2={t('profile.deadlineProfile')} isBold />,
      dataIndex: 'deadlineProfile',
      key: 'deadlineProfile',
      render: (text, record) => (
        <BoldItaly
          name1={text && fdtfM3(text, 'm1b', 'm2e')}
          name2={record.deadlineSign && fdtfM3(record.deadlineSign, 'm1b', 'm2e')}
        />
      ),
    },
    {
      title: t('profile.sourceCreate'),
      dataIndex: 'profileSourceName',
      key: 'profileSourceName',
      width: 130,
      render: text => <div>{text}</div>,
    },
    {
      title: t('partner.status'),
      dataIndex: 'profileStatusId',
      key: 'profileStatusId',
      width: 150,
      render: (text, record) => (
        <TableFunction
          type="profile"
          text={record.profileStatusName}
          record={record}
          titleEdit={t('profile.tooltipEdit')}
          titleCopy={t('profile.tooltipCopy')}
          titleDownload={t('profile.tooltipDownload')}
          titleHistory={t('profile.tooltipHistory')}
          onClickEdit={() => {
            setShowAddAndEdit(true);
            setIdProfileSelected(record.objectGuid);
          }}
          onClickCopy={() => {}}
          onClickDownload={() => {}}
          onClickHistory={() => {
            setIdProfileSelected(record.objectGuid);
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    setDataEasySearch({
      ...DEFAULT_PARAM_EASY_SEARCH,
      textSearch,
      categoryId,
      objectId,
    });
  }, [textSearch, objectId]);

  useEffect(() => {
    if (!showAdvanceSearch) {
      dispatch(actions.searchEasyProfile(dataEasySearch));
    }
  }, [dataEasySearch]);

  // Xử lý dispatch dữ liệu tìm nâng cao
  useEffect(() => {
    if (showAdvanceSearch) {
      const body = {
        ...dataAdvanceSearch,
        profileCategoryIds: profileTypeSelect.includes('all') ? '' : profileTypeSelect.toString(),
        ids: listProfileSelect.includes('all') ? '' : listProfileSelect.toString(),
        signerIds: listObjectSignSelect.includes('all') ? '' : listObjectSignSelect.toString(),
        textSampleName: textDocumentFilter,
        profileSource: profileSourceSelect,
        dateSignFrom:
          signDateFilter.beginDate !== null ? moment(new Date(signDateFilter.beginDate)).format('YYYY-MM-DD') : null,
        dateSignTo: signDateFilter.endDate !== null ? moment(new Date(signDateFilter.endDate)).format('YYYY-MM-DD') : null,
        createDateFrom:
          createDateFilter.beginDate !== null ? moment(new Date(createDateFilter.beginDate)).format('YYYY-MM-DD') : null,
        createDateTo:
          createDateFilter.endDate !== null ? moment(new Date(createDateFilter.endDate)).format('YYYY-MM-DD') : null,
        statusIds: listStatusSelect.includes('all') ? '' : listStatusSelect.toString(),
        userCreateIds: listCreatorSelect.includes('all') ? '' : listCreatorSelect.toString(),
      };
      dispatch(actions.searchAdvanceProfile(body));
    }
  }, [
    profileTypeSelect,
    listProfileSelect,
    listObjectApproveSelect,
    listObjectSignSelect,
    textDocumentFilter,
    profileSourceSelect,
    signDateFilter,
    createDateFilter,
    listStatusSelect,
    listCreatorSelect,
  ]);

  useEffect(() => {
    if (showAdvanceSearch) {
      dispatch(actions.getListTypeOfProfile());
      dispatch(actions.getListProfile(DEFAULT_PARAM));
      setObjectApproveListOption([]);
      dispatch(actions.getListObjectSign(DEFAULT_PARAM));
      dispatch(actions.getListTextByName(DEFAULT_PARAM));
      dispatch(actions.getListStatus());
      dispatch(actions.getListCreator(DEFAULT_PARAM));
    }
  }, [showAdvanceSearch]);

  useEffect(() => {
    if (signDate !== TIME_OPTION_PERIOD) {
      setSignDateFilter(getTimeOption(signDate));
    }
  }, [signDate]);

  useEffect(() => {
    if (createDate !== TIME_OPTION_PERIOD) {
      setCreateDateFilter(getTimeOption(createDate));
    }
  }, [createDate]);

  // format dữ liệu hiển thị status
  useEffect(() => {
    if (listStatus.length !== 0) {
      setStatusListOption([
        {
          value: 'all',
          label: t('profile.all'),
        },
        ...listStatus.map(item => ({
          value: item.id,
          label: item.statusName,
        })),
      ]);
    }
  }, [listStatus]);

  // format dữ liệu hiển thị đối tượng ký
  useEffect(() => {
    if (listObjectSign.length !== 0) {
      setObjectSignListOption([
        {
          value: 'all',
          label: t('profile.all'),
        },
        ...listObjectSign.map(item => ({
          value: item.id,
          label: item.signerName,
        })),
      ]);
    }
  }, [listObjectSign]);

  // format dữ liệu hiển thị danh sách hợp đồng
  useEffect(() => {
    if (profiles.length !== 0) {
      setProfileListOption([
        {
          value: 'all',
          label: t('profile.all'),
        },
        ...profiles.map(item => ({
          value: item.id,
          label: item.profileName,
        })),
      ]);
    }
  }, [profiles]);

  // format dữ liệu hiển thị danh sách kiểu hồ sơ
  useEffect(() => {
    if (listTypeOfProfile.length !== 0) {
      setProfileTypeListOption([
        {
          value: 'all',
          label: t('profile.all'),
        },
        ...listTypeOfProfile.map(item => ({
          value: item.id,
          label: item.name,
        })),
      ]);
      setProfileTypeSelect(['all']);
    }
  }, [listTypeOfProfile]);

  // format dữ liệu hiển thị danh sách người tạo
  useEffect(() => {
    if (listCreator.length !== 0) {
      setCreatorListOption([
        {
          value: 'all',
          label: t('profile.all'),
        },
        ...listCreator.map(item => ({
          value: item.userID,
          label: `${item.userName} - ${item.fullName}`,
        })),
      ]);
    }
  }, [listCreator]);

  const onClickRow = data => {
    setIdProfileSelected(data.objectGuid);
    setShowInformation(true);
  };

  const onChangePagination = (dataPageSize, dataCurrentPage) => {
    if (showAdvanceSearch) {
      setDataAdvanceSearch({
        ...dataAdvanceSearch,
        pageSize: dataPageSize,
        currentPage: dataCurrentPage,
      });
    } else {
      setDataEasySearch({
        ...dataEasySearch,
        pageSize: dataPageSize,
        currentPage: dataCurrentPage,
      });
    }
  };

  const handleCloseAdvanceSearch = () => {
    handleResetFilter();
    onCloseAdvanceSearch();
    dispatch(actions.searchEasyProfile(dataEasySearch));
  };

  const handleResetFilter = () => {
    setProfileTypeSelect(['all']);
    setListProfileSelect(['all']);
    setListObjectApproveSelect([]);
    setListObjectSignSelect(['all']);
    setProfileSourceSelect('-1');
    setListStatusSelect(['all']);
    setSignDate('1');
    setCreateDate('1');
    form.setFieldsValue({
      document: '',
    });
  };

  const onContinueAdd = res => {
    setShowPopupConfirmInfo(true);
    setShowAddAndEdit(false);
    if (res) {
      setDataConfirmProfile(res);
    }
  };

  const onCloseAdd = bool => {
    setShowAddAndEdit(false);
    if (bool) {
      dispatch(actions.searchEasyProfile(dataEasySearch));
    }
  };

  const onCloseViewDetailProfile = () => {
    setIsShowDetailProfile(false);
  };

  const onCloseConfirmAdd = bool => {
    setShowPopupConfirmInfo(false);
    setDataConfirmProfile({});
    if (bool) {
      dispatch(actions.searchEasyProfile(dataEasySearch));
    }
  };

  return (
    <Content>
      <ContentWrapper showAdvanceSearch={showAdvanceSearch}>
        <ContentHeader>
          <HeaderLeft>
            <ContentTitle>
              {t('profile.profileList')}
              {totalCount}
            </ContentTitle>
            {/* <Button */}
            {/*  type="primary" */}
            {/*  onClick={() => { */}
            {/*    setShowModalCheckProfile(true); */}
            {/*  }} */}
            {/* > */}
            {/*  TestPopUpDHS */}
            {/* </Button> */}
          </HeaderLeft>
          <HeaderRight>
            {/* <Button onClick={() => setIsShowDetailProfile(true)} type="primary"> */}
            {/*  {t('profile.signProfile')} */}
            {/* </Button> */}
            <Button
              iconName="add"
              type="primary"
              onClick={() => {
                setShowAddAndEdit(true);
              }}
            >
              {t('common.addNew')}
            </Button>
          </HeaderRight>
        </ContentHeader>
        <Table
          columns={TABLE_ACCOUNT}
          data={listProfile}
          minWidth={1100}
          pagination
          isLoading={loading}
          totalRecord={totalCount}
          onChangePagination={(size, current) => {
            onChangePagination(size, current);
          }}
          loadingIcon={loadingIcon}
          disableClickRowExpand
          onClickRow={onClickRow}
        />
      </ContentWrapper>

      {showAdvanceSearch && (
        <AdvanceSearchWrapper>
          <CloseAdvanceView>
            <Tooltip title={t('profile.close')} onClick={handleCloseAdvanceSearch}>
              <img src={closeAdvanceIcon} alt={t('profile.close')} />
            </Tooltip>
          </CloseAdvanceView>
          <HeaderAdvanceView style={{ width: 260 }}>
            <img alt="" src={advanceIcon} />
            <TitleAdvance>{t('common.advanceSearch')}</TitleAdvance>
            <Tooltip title={t('common.resetFilter')} onClick={handleResetFilter}>
              <img style={{ cursor: 'pointer', marginLeft: '5px' }} alt="" src={refreshAdvanceIcon} />
            </Tooltip>
          </HeaderAdvanceView>
          <ContentAdvanceView>
            <Form form={form}>
              {/* Kiểu hồ sơ */}
              <Form.Item name="profileType">
                <MultiSelectFloat
                  dataSelect={profileTypeListOption}
                  label={t('profile.profileType')}
                  valueSelect={profileTypeSelect}
                  onChangeSelect={value => setProfileTypeSelect(value)}
                />
              </Form.Item>
              {/* Danh sách hồ sơ */}
              <Form.Item name="profile">
                <MultiSelectFloat
                  dataSelect={profileListOption}
                  label={t('profile.profile')}
                  valueSelect={listProfileSelect}
                  onChangeSelect={value => setListProfileSelect(value)}
                />
              </Form.Item>
              {/* Đối tượng duyệt */}
              <Form.Item name="objectApprove">
                <MultiSelectFloat
                  dataSelect={objectApproveListOption}
                  label={t('profile.objectApprove')}
                  valueSelect={listObjectApproveSelect}
                  onChangeSelect={value => setListObjectApproveSelect(value)}
                />
              </Form.Item>
              {/* Đối tượng ký */}
              <Form.Item name="objectSign">
                <MultiSelectFloat
                  dataSelect={objectSignListOption}
                  label={t('profile.objectSign')}
                  valueSelect={listObjectSignSelect}
                  onChangeSelect={value => setListObjectSignSelect(value)}
                />
              </Form.Item>
              {/* Văn bản */}
              <Form.Item name="document">
                <FloatingLabel
                  label={t('profile.document')}
                  onchang={e => {
                    console.log(e.target.value);
                  }}
                />
              </Form.Item>
              {/* Nguồn hồ sơ */}
              <Form.Item name="profileSource">
                <SelectFloat
                  dataSelect={LIST_PROFILE_SOURCE}
                  label={t('profile.profileSource')}
                  valueSelect={profileSourceSelect}
                  onChangeSelect={value => setProfileSourceSelect(value)}
                />
              </Form.Item>
              {/* Thời gian ký */}
              <Form.Item name="timeSign">
                <SelectFloat
                  dataSelect={LIST_CREATE_TIME}
                  label={t('profile.timeSign')}
                  valueSelect={signDate}
                  onChangeSelect={value => setSignDate(value)}
                />
              </Form.Item>
              {signDate === '6' && (
                <Form.Item>
                  <RangerPickerCustom
                    locale={locale}
                    disabledDate={current => current && current > moment().endOf('day')}
                    separator="-"
                    format="DD/MM/YYYY"
                    allowClear={false}
                    onChange={data => {
                      setSignDateFilter({
                        beginDate: new Date(data[0]).toISOString(),
                        endDate: new Date(data[1]).toISOString(),
                      });
                    }}
                  />
                </Form.Item>
              )}
              {/* Thời gian tạo */}
              <Form.Item name="timeCreate">
                <SelectFloat
                  dataSelect={LIST_CREATE_TIME}
                  label={t('profile.timeCreate')}
                  valueSelect={createDate}
                  onChangeSelect={value => setCreateDate(value)}
                />
              </Form.Item>
              {createDate === '6' && (
                <Form.Item>
                  <RangerPickerCustom
                    locale={locale}
                    disabledDate={current => current && current > moment().endOf('day')}
                    separator="-"
                    format="DD/MM/YYYY"
                    allowClear={false}
                    onChange={data => {
                      setCreateDateFilter({
                        beginDate: new Date(data[0]).toISOString(),
                        endDate: new Date(data[1]).toISOString(),
                      });
                    }}
                  />
                </Form.Item>
              )}
              {/* Danh sách trạng thái */}
              <Form.Item name="status">
                <MultiSelectFloat
                  dataSelect={statusListOption}
                  label={t('profile.status')}
                  valueSelect={listStatusSelect}
                  onChangeSelect={value => setListStatusSelect(value)}
                />
              </Form.Item>
              {/* Danh sách người tạo */}
              <Form.Item name="creator">
                <MultiSelectFloat
                  dataSelect={creatorListOption}
                  label={t('profile.creator')}
                  valueSelect={listCreatorSelect}
                  onChangeSelect={value => setListCreatorSelect(value)}
                />
              </Form.Item>
            </Form>
          </ContentAdvanceView>
        </AdvanceSearchWrapper>
      )}

      {showAddAndEdit && <AddAndEditProfileOnline onClose={onCloseAdd} onContinue={onContinueAdd} />}
      {showPopupConfirmInfo && <ConfirmProfileInformation data={dataConfirmProfile} onClose={onCloseConfirmAdd} />}
      {showInformation && (
        <InformationProfile
          id={idProfileSelected}
          onShowHistory={() => {
            setShowInformation(false);
            setShowHistory(true);
          }}
          onCopy={() => {
            setShowInformation(false);
            setShowCopyPageSign(true);
          }}
          onClose={() => setShowInformation(false)}
        />
      )}
      {showHistory && (
        <HistoryProfile
          onClose={() => {
            setShowHistory(false);
            setIdProfileSelected('');
          }}
          userGuid={idProfileSelected}
          titleHistory={t('profile.titleHistory')}
        />
      )}
      {showCopyPageSign && (
        <CopyPageSign
          onClose={() => {
            setShowCopyPageSign(false);
            setIdProfileSelected('');
          }}
          userGuid={idProfileSelected}
          titlePageSign={t('profile.titleCopyPageSign')}
        />
      )}
      {isShowDetailProfile && <DetailProfile onClose={onCloseViewDetailProfile} />}
      {showModalCheckProfile && <ModalCheckProfile onClose={() => setShowModalCheckProfile(false)} />}
    </Content>
  );
};

Profile.propTypes = {
  textSearch: PropTypes.string,
  objectId: PropTypes.string,
  categoryId: PropTypes.string,
  showAdvanceSearch: PropTypes.bool,
  onCloseAdvanceSearch: PropTypes.func,
};

export default Profile;
