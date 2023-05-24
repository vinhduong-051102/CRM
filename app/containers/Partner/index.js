import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Form, Tooltip } from 'antd';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/vi_VN';
import {
  DEFAULT_PARAM,
  DEFAULT_PARAM_ADVANCE_SEARCH_PARTNER,
  DEFAULT_PARAM_EASY_SEARCH,
  LIST_CREATE_TIME,
  REDUX_KEY,
  TIME_OPTION_PERIOD,
} from '../../utils/constants';
import Button from '../../res/components/Button';
import {
  AdvanceSearchWrapper,
  CloseAdvanceView,
  Content,
  ContentAdvanceView,
  ContentHeader,
  ContentTitle,
  ContentWrapper,
  HeaderAdvanceView,
  HeaderLeft,
  HeaderRight,
  TitleAdvance,
} from '../../res/commonStyles';
import Table from '../../res/components/Table';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import * as actions from './actionsPartner';
import * as selectors from './selectorsPartner';
import reducer from './reducerPartner';
import saga from './sagaPartner';
import BoldItalyHeader from '../../res/components/TableOtherView/BoldItalyHeader';
import BoldItaly from '../../res/components/TableOtherView/BoldItaly';
import { fdtfM3 } from '../../res/fdtf';
import TableFunction from '../../res/components/TableOtherView/TableFunction';
import ExportPopup from '../../res/components/ExportPopup';
import InformationPartner from './components/InformationPartner';
import {
  ACTIVE_ID,
  BEGIN_DATE,
  CURRENT_PAGE,
  END_DATE,
  IDS,
  LIST_PARTNER_TYPE,
  LIST_STATUS_TYPE,
  OBJECT_GUID,
  PAGE_SIZE,
  PARTNER_TYPE_ID,
  USER_CREATE_ID,
} from './constantsPartner';
import AddAndEditPartnerOnline from './components/AddAndEditPartnerOnline';
import ButtonCircle from '../../res/components/ButtonCircle';
import HistoryPartner from './components/HistoryPartner';
import loadingIcon from '../../images/loading.svg';
import closeAdvanceIcon from '../../images/iconCloseAdvance.svg';
import advanceIcon from '../../images/iconAdvance.svg';
import refreshAdvanceIcon from '../../images/iconRefeshAdvance.svg';
import SelectFloat from '../../res/components/FloatingLabel/SelectFloat';
import MultiSelectFloat from '../../res/components/FloatingLabel/MultiSelectFloat';
import { RangerPickerCustom } from './stylesPartner';
import { getTimeOption } from '../../res/commonFunction';
import EditInformationDocument from '../Profile/components/EditInformationDocument';
import ModalEmptyLSH from './components/ModalEmptyLSH';
import ModalAlertHS from './components/ModalAlertHS';

const key = REDUX_KEY.partner;
const Partner = ({ textSearch, objectId, categoryId, showAdvanceSearch, onCloseAdvanceSearch }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const loading = useSelector(selectors.selectLoading());
  const listPartner = useSelector(selectors.selectListPartner());
  const totalCount = useSelector(selectors.selectTotalCount());
  const listCreatedPartner = useSelector(selectors.selectListCreatedPartner());
  const listOptionPartner = useSelector(selectors.selectListOptionPartner());
  const [dataEasySearch, setDataEasySearch] = useState(DEFAULT_PARAM_EASY_SEARCH);
  const [dataAdvanceSearch, setDataAdvanceSearch] = useState(DEFAULT_PARAM_ADVANCE_SEARCH_PARTNER);
  const [showInformation, setShowInformation] = useState(false);
  const [showAddAndEdit, setShowAddAndEdit] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [exportFile, setExportFile] = useState(false);
  const [idPartnerSelected, setIdPartnerSelected] = useState('');
  const [partnerListOption, setPartnerListOption] = useState([]);
  const [creatorListOption, setCreatorListOption] = useState([]);
  const [partnerType, setPartnerType] = useState('0');
  const [partners, setPartners] = useState([]);
  const [creators, setCreators] = useState(['all']);
  const [status, setStatus] = useState('-1');
  const [createDate, setCreateDate] = useState('1');
  const [dateFilter, setDateFilter] = useState({});
  const [openPopUpAddInfoVB, setOpenPopUpAddInfoVB] = useState(false);

  // Hiển thị Modal mẫu hồ sơ trống (MHS)
  const [openEmptyMHSErrowPU, setOpenEmptyMHSErrorPU] = useState(false);

  // Hiển thị Modal Loại Hồ Sơ trống (LHS)
  const [openEmptyLSHErrorPU, setOpenEmptyLHSErrorPU] = useState(false);

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
      title: t('partner.partnerType'),
      dataIndex: 'partnerType',
      key: 'partnerType',
      width: 150,
      render: text => <div>{text === 1 ? t('partner.unit') : t('partner.individual')}</div>,
    },
    {
      title: <BoldItalyHeader name1={t('partner.partnerName')} name2={t('partner.partnerCode')} isBold />,
      dataIndex: 'code',
      key: 'code',
      render: (text, record) => <BoldItaly name1={record.name} name2={text} />,
    },
    {
      title: <BoldItalyHeader name1={t('partner.phoneNumber')} name2={t('partner.email')} isBold />,
      dataIndex: 'phone',
      key: 'phone',
      render: (text, record) => <BoldItaly name1={text} name2={record.email} />,
    },
    {
      title: <BoldItalyHeader name1={t('partner.creator')} name2={t('partner.lastUpdateDate')} isBold />,
      dataIndex: 'userNameCreated',
      key: 'userNameCreated',
      render: (text, record) => (
        <BoldItaly name1={text} name2={record.lastUpdate && fdtfM3(record.lastUpdate, 'm1b', 'm2e')} />
      ),
    },
    {
      title: t('partner.status'),
      dataIndex: 'activeName',
      key: 'activeName',
      width: 170,
      render: (text, record) => (
        <TableFunction
          type="normal"
          text={text}
          record={record}
          titleEdit={t('partner.tooltipEdit')}
          titleHistory={t('partner.tooltipHistory')}
          onClickEdit={() => {
            setShowAddAndEdit(true);
            setIdPartnerSelected(record.objectGuid);
          }}
          onClickHistory={() => {
            setIdPartnerSelected(record.objectGuid);
            setShowHistory(true);
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    if (showAdvanceSearch) {
      dispatch(actions.getListOptionPartner(DEFAULT_PARAM));
      dispatch(actions.getListCreatedPartner());
    }
  }, [showAdvanceSearch]);

  useEffect(() => {
    if (showAdvanceSearch) {
      dispatch(
        actions.getListOptionPartner({
          ...DEFAULT_PARAM,
          partnerType,
        }),
      );
    }
  }, [partnerType]);

  useEffect(() => {
    if (listOptionPartner.length !== 0) {
      setPartnerListOption([
        {
          value: 'all',
          label: t('common.all'),
        },
        ...listOptionPartner.map(item => ({
          value: item.id,
          label: `${item.code} - ${item.name}`,
        })),
      ]);
    }
  }, [listOptionPartner]);

  useEffect(() => {
    if (listCreatedPartner.length !== 0) {
      setCreatorListOption([
        {
          value: 'all',
          label: t('common.all'),
        },
        ...listCreatedPartner.map(item => ({
          value: item.userId,
          label: `${item.userName} - ${item.fullName}`,
        })),
      ]);
      setPartners(['all']);
    }
  }, [listCreatedPartner]);

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
      dispatch(actions.searchEasyPartner(dataEasySearch));
    }
  }, [dataEasySearch]);

  useEffect(() => {
    if (createDate !== TIME_OPTION_PERIOD) {
      setDateFilter(getTimeOption(createDate));
    }
  }, [createDate]);

  useEffect(() => {
    if (showAdvanceSearch) {
      const body = {
        ...dataAdvanceSearch,
        [PARTNER_TYPE_ID]: partnerType,
        [IDS]: partners.includes('all') ? '' : partners.toString(),
        [USER_CREATE_ID]: creators.includes('all') ? '' : creators.toString(),
        [ACTIVE_ID]: status,
        [BEGIN_DATE]: dateFilter.beginDate !== null ? moment(new Date(dateFilter.beginDate)).format('YYYY-MM-DD') : null,
        [END_DATE]: dateFilter.endDate !== null ? moment(new Date(dateFilter.endDate)).format('YYYY-MM-DD') : null,
      };
      dispatch(actions.searchAdvancePartner(body));
    }
  }, [partnerType, partners, creators, status, dateFilter]);

  const onClickRow = data => {
    setIdPartnerSelected(data[OBJECT_GUID]);
    setShowInformation(true);
  };

  const onClickExport = () => {
    setExportFile(true);
  };

  const onChangePagination = (dataPageSize, dataCurrentPage) => {
    if (showAdvanceSearch) {
      setDataAdvanceSearch({
        ...dataAdvanceSearch,
        [PAGE_SIZE]: dataPageSize,
        [CURRENT_PAGE]: dataCurrentPage,
      });
    } else {
      setDataEasySearch({
        ...dataEasySearch,
        [PAGE_SIZE]: dataPageSize,
        [CURRENT_PAGE]: dataCurrentPage,
      });
    }
  };

  const handleExportFile = () => {
    const bodyExportEasySearch = {
      ...dataEasySearch,
    };

    const bodyExportAdvanceSearch = {
      ...dataAdvanceSearch,
      [PARTNER_TYPE_ID]: partnerType,
      [IDS]: partners.includes('all') ? '' : partners.toString(),
      [USER_CREATE_ID]: creators.includes('all') ? '' : creators.toString(),
      [ACTIVE_ID]: status,
      [BEGIN_DATE]: dateFilter.beginDate,
      [END_DATE]: dateFilter.endDate,
    };
    dispatch(actions.exportFile(showAdvanceSearch ? bodyExportAdvanceSearch : bodyExportEasySearch, showAdvanceSearch));
  };

  const handleCloseAdvanceSearch = () => {
    onCloseAdvanceSearch();
    handleResetFilter();
    dispatch(actions.searchEasyPartner(dataEasySearch));
  };

  const handleResetFilter = () => {
    setPartnerType('0');
    setPartners(['all']);
    setCreators(['all']);
    setStatus('-1');
    setCreateDate('1');
  };

  return (
    <Content>
      <ContentWrapper showAdvanceSearch={showAdvanceSearch}>
        <ContentHeader>
          <HeaderLeft>
            <ContentTitle>
              {t('partner.PartnerList')}
              {totalCount}
            </ContentTitle>
            <ButtonCircle
              title={t('partner.tooltipExport')}
              placement="top"
              iconName="download"
              onClick={onClickExport}
              enable
            />
            {/* <Button */}
            {/*  onClick={() => { */}
            {/*    setOpenPopupHS(true); */}
            {/*  }} */}
            {/* > */}
            {/*  Test DTKHS */}
            {/* </Button> */}

            {/* <Button */}
            {/*  onClick={() => { */}
            {/*    setOpenPopUpAddInfoVB(true); */}
            {/*  }} */}
            {/* > */}
            {/*  Test ADD Infor */}
            {/* </Button> */}

            {/* <Button */}
            {/*  onClick={() => { */}
            {/*    setOpenEmptyMHSErrorPU(true); */}
            {/*  }} */}
            {/* > */}
            {/*  TestEmptyMHSError */}
            {/* </Button> */}

            {/* <Button */}
            {/* onClick={() => { */}
            {/*  setOpenEmptyLHSErrorPU(true); */}
            {/* }} */}
            {/* > */}
            {/* TestEmptyLHSError */}
            {/* </Button> */}

            {/* <Button */}
            {/*  onClick={() => { */}
            {/*    setOpenAddHSPopup(true); */}
            {/*  }} */}
            {/* > */}
            {/*  Add HS */}
            {/* </Button> */}
          </HeaderLeft>
          <HeaderRight>
            <Button
              iconName="add"
              type="primary"
              onClick={() => {
                setShowAddAndEdit(true);
                setIdPartnerSelected('');
              }}
            >
              {t('common.addNew')}
            </Button>
          </HeaderRight>
        </ContentHeader>
        <Table
          columns={TABLE_ACCOUNT}
          data={listPartner}
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
        {openPopUpAddInfoVB && (
          <EditInformationDocument
            onClose={() => {
              setOpenPopUpAddInfoVB(false);
            }}
          />
        )}
        {openEmptyMHSErrowPU && (
          <ModalAlertHS
            onClose={() => {
              setOpenEmptyMHSErrorPU(false);
            }}
          />
        )}

        {openEmptyLSHErrorPU && (
          <ModalEmptyLSH
            width={550}
            onClose={() => {
              setOpenEmptyLHSErrorPU(false);
            }}
          />
        )}
        {showHistory && (
          <HistoryPartner
            onClose={() => {
              setShowHistory(false);
              setIdPartnerSelected('');
            }}
            userGuid={idPartnerSelected}
            titleHistory={t('partner.titleHistory')}
          />
        )}
        {showInformation && (
          <InformationPartner
            onClose={() => {
              setShowInformation(false);
            }}
            idPartner={idPartnerSelected}
            onEdit={() => {
              setShowInformation(false);
              setShowAddAndEdit(true);
            }}
            onShowHistory={() => {
              setShowInformation(false);
              setShowHistory(true);
            }}
          />
        )}
        {exportFile && (
          <ExportPopup
            totalRecord={totalCount}
            onClose={() => {
              setExportFile(false);
            }}
            textExport={t('partner.textExportFile')}
            textAlertExport={t('partner.textAlertExport')}
            textNoteExport={t('partner.textNoteExport')}
            onSave={handleExportFile}
          />
        )}
        {showAddAndEdit && (
          <AddAndEditPartnerOnline
            onClose={() => {
              setShowAddAndEdit(false);
              setIdPartnerSelected('');
            }}
            idPartner={idPartnerSelected}
            updateData={() => {
              dispatch(actions.searchEasyPartner(dataEasySearch));
            }}
          />
        )}
      </ContentWrapper>
      {showAdvanceSearch && (
        <AdvanceSearchWrapper>
          <CloseAdvanceView>
            <Tooltip title={t('common.close')} onClick={handleCloseAdvanceSearch}>
              <img style={{ cursor: 'pointer' }} alt="" src={closeAdvanceIcon} />
            </Tooltip>
          </CloseAdvanceView>
          <HeaderAdvanceView>
            <img alt="" src={advanceIcon} />
            <TitleAdvance>{t('common.advanceSearch')}</TitleAdvance>
            <Tooltip title={t('common.resetFilter')} onClick={handleResetFilter}>
              <img style={{ cursor: 'pointer', marginLeft: '5px' }} alt="" src={refreshAdvanceIcon} />
            </Tooltip>
          </HeaderAdvanceView>
          <ContentAdvanceView>
            <Form>
              <Form.Item name="partnerType">
                <SelectFloat
                  label={t('partner.partnerType')}
                  dataSelect={LIST_PARTNER_TYPE}
                  onChangeSelect={data => {
                    setPartnerType(data);
                  }}
                  valueSelect={partnerType}
                />
              </Form.Item>
              <Form.Item>
                <MultiSelectFloat
                  label={t('partner.partner')}
                  dataSelect={partnerListOption}
                  onChangeSelect={data => {
                    setPartners(data);
                  }}
                  valueSelect={partners}
                />
              </Form.Item>
              <Form.Item>
                <MultiSelectFloat
                  label={t('partner.creator')}
                  dataSelect={creatorListOption}
                  onChangeSelect={data => {
                    setCreators(data);
                  }}
                  valueSelect={creators}
                />
              </Form.Item>
              <Form.Item>
                <SelectFloat
                  label={t('partner.status')}
                  dataSelect={LIST_STATUS_TYPE}
                  onChangeSelect={data => {
                    setStatus(data);
                  }}
                  valueSelect={status}
                />
              </Form.Item>
              <Form.Item>
                <SelectFloat
                  label={t('partner.createDate')}
                  dataSelect={LIST_CREATE_TIME}
                  onChangeSelect={data => {
                    setCreateDate(data);
                  }}
                  valueSelect={createDate}
                />
              </Form.Item>
              {createDate === TIME_OPTION_PERIOD && (
                <Form.Item>
                  <RangerPickerCustom
                    locale={locale}
                    disabledDate={current => current && current > moment().endOf('day')}
                    separator="-"
                    format="DD/MM/YYYY"
                    allowClear={false}
                    onChange={data => {
                      setDateFilter({
                        beginDate: new Date(data[0]).toISOString(),
                        endDate: new Date(data[1]).toISOString(),
                      });
                    }}
                  />
                </Form.Item>
              )}
            </Form>
          </ContentAdvanceView>
        </AdvanceSearchWrapper>
      )}
    </Content>
  );
};
Partner.propTypes = {
  textSearch: PropTypes.string,
  objectId: PropTypes.string,
  categoryId: PropTypes.string,
  showAdvanceSearch: PropTypes.bool,
  onCloseAdvanceSearch: PropTypes.func,
};

export default Partner;
