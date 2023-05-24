import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Form, Radio, Row, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import locale from 'antd/es/date-picker/locale/vi_VN';
import axios from 'axios';
import Cookies from 'js-cookie';
import * as actions from '../../actionsProfile';
import * as selectors from '../../selectorsProfile';
import {
  ButtonAdd,
  Container,
  Content,
  DivPlus,
  FormCustom,
  NoInformation,
  ProfileTypeContainer,
  RadioLayout,
  RadioLayoutItem,
  Title,
} from './styles';
import buttonAddImage from '../../../../images/buttonAdd.svg';
import FloatingLabel from '../../../../res/components/FloatingLabel/Input';
import SelectFloat from '../../../../res/components/FloatingLabel/SelectFloat';
import DatePicker from '../../../../res/components/DatePicker';
import BoldItalyHeader from '../../../../res/components/TableOtherView/BoldItalyHeader';
import BoldItaly from '../../../../res/components/TableOtherView/BoldItaly';
import { COOKIES, REGEX_PROFILE_NAME, REGEX_SAMPLE_CHARACTERS } from '../../../../utils/constants';
import FloatingInputNumber from '../../../../res/components/FloatingLabel/InputNumber';
import ButtonCircle from '../../../../res/components/ButtonCircle';
import EditInformationDocument from '../EditInformationDocument';
import Table from '../../../../res/components/Table';
import ModalAddLHS from '../ModalAddLHS';
import UpdateInformationObjectSign from '../UpdateInformationObjectSign';
import Notice from '../../../../res/components/Notice';
import ModalFullScreen from '../../../../res/components/ModalFullScreen';

const AddAndEditProfileOnline = ({ data, onClose, onContinue }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const listProfileSample = useSelector(selectors.selectListProfileSample());
  const listProfileType = useSelector(selectors.selectListProfileType());
  const listSignerByProfileSample = useSelector(selectors.selectListSignerByProfileSample());
  const listTextByProfileSample = useSelector(selectors.selectListTextByProfileSample());
  const listSignType = useSelector(selectors.selectListSignType());

  const [viewListSignerByProfileSample, setViewListSignerByProfileSample] = useState([]);
  const [viewListDocumentByProfileSample, setViewListDocumentByProfileSample] = useState([]);

  const [listProfileSampleOption, setListProfileSampleOption] = useState([]);
  const [listProfileTypeOption, setListProfileTypeOption] = useState([]);

  const [profileSampleIdSelected, setProfileSampleIdSelected] = useState('');
  const [profileSampleDataSelected, setProfileSampleDataSelected] = useState({});
  const [profileTypeIdSelected, setProfileTypeIdSelected] = useState('');
  const [deadlineSignProfileRadio, setDeadlineSignProfileRadio] = useState(1);
  const [deadlineProfileRadio, setDeadlineProfileRadio] = useState(1);
  const [documentDataSelected, setDocumentDataSelected] = useState({});
  const [objectSignDataSelected, setObjectSignDataSelected] = useState({});

  const [listDocumentData, setListDocumentData] = useState([]);
  const [listObjectSignData, setListObjectSignData] = useState([]);

  const [showUpdateInformationObjectSign, setShowUpdateInformationObjectSign] = useState(false);
  const [showEditDocument, setShowEditDocument] = useState(false);
  const [showAddLHS, setShowAddLHS] = useState(false);

  const SIGN_OBJECT_TABLE_COLUMN = [
    {
      title: t('common.sttColumnTitle'),
      dataIndex: 'stt',
      key: 'stt',
      width: 70,
      align: 'center',
      render: (text, record, index) => <div>{index + 1}</div>,
    },
    {
      title: t('profile.objectSignType'),
      dataIndex: 'signerTypeName',
      key: 'signerTypeName',
      width: 230,
      render: text => <div>{text}</div>,
    },
    {
      title: <BoldItalyHeader name1={t('profile.mst/cmnd/cccd')} name2={t('profile.objectSignName')} isBold />,
      dataIndex: 'identityCode',
      key: 'identityCode',
      render: (text, record) =>
        text || record.signerName ? (
          <BoldItaly name1={text} name2={record.signerName} />
        ) : (
          <Tooltip title={t('profile.tooltipNoInformationSigner')}>
            <NoInformation>{t('profile.noInformation')}</NoInformation>
          </Tooltip>
        ),
    },
    {
      title: t('profile.authenticationForm'),
      dataIndex: 'typeSignId',
      key: 'typeSignId',
      render: text => {
        const element = listSignType.find(item => item.id === text);
        if (element) {
          return <div>{element.name}</div>;
        }
        return <div />;
      },
    },
    {
      title: <BoldItalyHeader name1={t('profile.phoneNumber')} name2={t('profile.email')} isBold />,
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      render: (text, record) => <BoldItaly name1={text} name2={record.email} />,
    },
    {
      title: t('profile.operation'),
      dataIndex: 'operation',
      key: 'operation',
      width: 100,
      render: (text, record) => (
        <div style={{ paddingLeft: '16px' }}>
          {record.isEdit && (
            <ButtonCircle
              title={t('common.edit')}
              iconName="edit"
              onClick={() => {
                setObjectSignDataSelected(record);
                setShowUpdateInformationObjectSign(true);
              }}
              enable
            />
          )}
        </div>
      ),
    },
  ];

  const DOCUMENT_TABLE_COLUMN = [
    {
      title: t('common.sttColumnTitle'),
      dataIndex: 'stt',
      key: 'stt',
      width: 70,
      align: 'center',
      render: (text, record, index) => <div>{index + 1}</div>,
    },
    {
      title: t('profile.documentCodeAndName'),
      dataIndex: 'textSampleCode',
      key: 'textSampleCode',
      render: (text, record) => (
        <div>
          {text} - {record.textSampleName}
        </div>
      ),
    },
    {
      title: t('profile.operation'),
      dataIndex: 'operation',
      key: 'operation',
      width: 100,
      render: (text, record) => (
        <div style={{ paddingLeft: '16px' }}>
          <ButtonCircle
            title={t('common.edit')}
            iconName="edit"
            onClick={() => {
              setDocumentDataSelected(record);
              setShowEditDocument(true);
            }}
            enable
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(actions.getListProfileSample());
    dispatch(actions.getListProfileType());
    dispatch(actions.getListSignType());

    return () => {
      dispatch(actions.resetAddAndEditProfileOnline());
    };
  }, []);

  useEffect(() => {
    if (listProfileSample && listProfileSample.length !== 0) {
      setListProfileSampleOption(
        listProfileSample.map(item => ({
          value: item.profileTypeGuid,
          label: item.name,
        })),
      );
    }
  }, [listProfileSample]);

  useEffect(() => {
    if (listProfileType && listProfileType.length !== 0) {
      setListProfileTypeOption(
        listProfileType.map(item => ({
          value: item.id,
          label: item.name,
        })),
      );
    }
  }, [listProfileType]);

  useEffect(() => {
    if (profileSampleIdSelected) {
      dispatch(actions.getListSignerByProfileSample(profileSampleIdSelected));
      dispatch(actions.getListTextByProfileSample(profileSampleIdSelected));
      const arr = listProfileSample.filter(item => item.profileTypeGuid === profileSampleIdSelected);
      setProfileSampleDataSelected(arr.length !== 0 ? arr[0] : {});
    }
  }, [profileSampleIdSelected]);

  useEffect(() => {
    if (listSignerByProfileSample && listSignerByProfileSample.length !== 0) {
      setViewListSignerByProfileSample([...listSignerByProfileSample]);
    }
  }, [listSignerByProfileSample]);

  useEffect(() => {
    processDataDocument();
  }, [listTextByProfileSample]);

  useEffect(() => {
    if (listTextByProfileSample && listTextByProfileSample.length !== 0) {
      setListDocumentData([
        ...listTextByProfileSample.map(item => ({
          code: item.textSampleCode,
          data: {},
          name: item.textSampleName,
          verGuidId: item.textSampleVerGuid,
        })),
      ]);
    }
  }, [listTextByProfileSample]);

  const changeDeadlineSignProfileRadio = e => {
    setDeadlineSignProfileRadio(e.target.value);
  };

  const changeDeadlineProfileRadio = e => {
    setDeadlineProfileRadio(e.target.value);
  };

  const onChangeSelectProfileSample = value => {
    setProfileSampleIdSelected(value);
  };

  const onChangeSelectProfileType = value => {
    setProfileTypeIdSelected(value);
  };
  const onClickAddProfileType = () => {
    setShowAddLHS(true);
  };

  // TienNAb: Xu ly du lieu cua danh sach van ban
  const processDataDocument = async () => {
    if (listTextByProfileSample && listTextByProfileSample.length !== 0) {
      const promisses = listTextByProfileSample.map(item =>
        axios
          .get(
            `${
              process.env.NODE_ENV === 'production' ? window.SystemConfig.URL : process.env.URL
            }/api/EC/GetListFieldByTextSampleVersionGuid?TextSampleVerGuid=${item.textSampleVerGuid}`,
            {
              headers: {
                Authorization: Cookies.get(COOKIES.accessToken),
              },
            },
          )
          .then(resBody => {
            if (resBody.data.isOk) {
              const res = resBody.data.object;
              if (res && res.length !== 0) {
                const dataItem = {};
                res.forEach(value => {
                  dataItem[value.name] = '';
                });
                return { ...item, listField: [...res], data: dataItem };
              }
              return { ...item, listField: [], data: {} };
            }
            Notice({ msg: resBody.data.object, isSuccess: false });
            return { ...item, listField: [], data: {} };
          })
          .catch(err => {
            console.log(err);
          }),
      );
      const result = await Promise.all(promisses);
      setViewListDocumentByProfileSample(result);
    }
  };

  // TienNAb: Ham update du lieu khi sua van ban
  const updateListDocument = dataDocument => {
    updateListDataDocument(dataDocument);
    updateListViewDocument(dataDocument);
    setShowEditDocument(false);
  };

  // TienNAb: Ham update data danh sach van ban
  const updateListDataDocument = dataDocument => {
    if (listDocumentData.length === 0) {
      setListDocumentData([dataDocument]);
    } else {
      const arr = listDocumentData.filter(item => item.code !== dataDocument.code);
      setListDocumentData([...arr, dataDocument]);
    }
  };

  // TienNAb: Ham update view danh sach van ban
  const updateListViewDocument = dataDocument => {
    const arr = [...viewListDocumentByProfileSample];
    const itemUpdateIndex = viewListDocumentByProfileSample.findIndex(item => item.textSampleCode === dataDocument.code);
    arr[itemUpdateIndex] = {
      ...arr[itemUpdateIndex],
      data: dataDocument.data,
    };
    setViewListDocumentByProfileSample(arr);
  };

  // TienNAb: Ham update du lieu khi sua doi tuong ky ho so
  const updateListObjectSign = dataObjectSign => {
    updateListDataSignerObject(dataObjectSign);
    updateListViewSignerObject(dataObjectSign);
    setShowUpdateInformationObjectSign(false);
  };

  // TienNAb: Ham update data danh sach doi tuong ky ho so
  const updateListDataSignerObject = dataObjectSign => {
    if (listObjectSignData.length === 0) {
      setListObjectSignData([dataObjectSign]);
    } else {
      const arr = listObjectSignData.filter(item => item.code !== dataObjectSign.code);
      setListObjectSignData([...arr, dataObjectSign]);
    }
  };

  // TienNAb: Ham update view hien thi doi tuong ky ho so
  const updateListViewSignerObject = dataObjectSign => {
    const arr = [...viewListSignerByProfileSample];
    const itemUpdateIndex = viewListSignerByProfileSample.findIndex(item => item.signerCode === dataObjectSign.code);
    arr[itemUpdateIndex] = {
      ...arr[itemUpdateIndex],
      identityCode: dataObjectSign.identityNo,
      signerName: dataObjectSign.fullName,
      phoneNumber: dataObjectSign.phone,
      email: dataObjectSign.email,
      typeSignId: dataObjectSign.typeSign,
      address: dataObjectSign.address || '',
    };
    setViewListSignerByProfileSample(arr);
  };

  const onSubmit = (isCreateAndContinue = false) => {
    form.validateFields().then(value => {
      const body = {
        profileCode: value.profileCode,
        profileName: value.profileName,
        profileTypeCode: profileSampleDataSelected.code,
        profileTypeName: profileSampleDataSelected.name,
        contractValue: value.profileValue,
        profileCategoryId: profileTypeIdSelected,
        deadlineSign: deadlineSignProfileRadio === 1 ? new Date(value.deadlineSignProfile).toISOString() : null,
        deadlineProfile: deadlineProfileRadio === 1 ? new Date(value.deadlineProfile).toISOString() : null,
        isApprove: true,
        categoryApprove: 0,
        deadlineApprove: 0,
        levelApprove: 0,
        opinionApprove: 'note test',
        createProfileEC: {
          ltText: listDocumentData,
          ltSigner: listObjectSignData,
          profileIDPartner: 'string',
        },
        ltSigner: viewListSignerByProfileSample,
        ltText: viewListDocumentByProfileSample,
      };
      if (isCreateAndContinue) {
        dispatch(
          actions.createProfileOnline(body, res => {
            onContinue(res.data.object);
            onClose(true);
          }),
        );
      } else {
        dispatch(
          actions.createProfileOnline(body, () => {
            onClose(true);
          }),
        );
      }
    });
  };

  return (
    <ModalFullScreen
      title={data ? t('profile.editProfileOnline') : t('profile.addProfileOnline')}
      width={1300}
      onClickCancel={() => onClose(false)}
      isContinue
      onSave={() => {
        onSubmit(false);
      }}
      onContinue={() => {
        onSubmit(true);
      }}
    >
      <FormCustom form={form}>
        <Container>
          <Title>{t('profile.commonInformationProfile')}</Title>
          <Content>
            <Row gutter={20}>
              <Col span={12}>
                <Form.Item
                  name="profileCode"
                  rules={[
                    () => ({
                      validator(_, value) {
                        if (value) {
                          if (value.length < 3 || value.length > 30) {
                            return Promise.reject(new Error(t('profile.profileCodeLengthError')));
                          }
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error(`${t('profile.profileCode')} ${t('common.notEmpty')}`));
                      },
                    }),
                  ]}
                >
                  <FloatingLabel label={t('profile.profileCode')} autoComplete="false" isRequired />
                </Form.Item>
                <Form.Item
                  name="profileSample"
                  rules={[
                    () => ({
                      validator() {
                        if (profileSampleIdSelected) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error(`${t('profile.profileSample')} ${t('common.notEmpty')}`));
                      },
                    }),
                  ]}
                >
                  <SelectFloat
                    label={t('profile.profileSample')}
                    valueSelect={profileSampleIdSelected}
                    dataSelect={listProfileSampleOption}
                    onChangeSelect={onChangeSelectProfileSample}
                    autoComplete="false"
                    isRequired
                  />
                </Form.Item>
                <Form.Item name="profileValue">
                  <FloatingInputNumber
                    label={t('profile.profileValue')}
                    formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    addonAfter="VND"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="profileName"
                  rules={[
                    () => ({
                      validator(_, value) {
                        if (value) {
                          if (value.length < 3 || value.length > 150) {
                            return Promise.reject(new Error(t('profile.profileNameLengthError')));
                          }
                          if (!REGEX_PROFILE_NAME.test(value.trim()) || REGEX_SAMPLE_CHARACTERS.test(value.trim())) {
                            return Promise.reject(new Error(t('profile.profileNameError')));
                          }
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error(`${t('profile.profileName')} ${t('common.notEmpty')}`));
                      },
                    }),
                  ]}
                >
                  <FloatingLabel label={t('profile.profileName')} autoComplete="false" isRequired />
                </Form.Item>
                <ProfileTypeContainer>
                  <Form.Item
                    style={{ width: '100%' }}
                    name="profileType"
                    rules={[
                      () => ({
                        validator() {
                          if (profileTypeIdSelected) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error(`${t('profile.profileType')} ${t('common.notEmpty')}`));
                        },
                      }),
                    ]}
                  >
                    <SelectFloat
                      label={t('profile.profileType')}
                      valueSelect={profileTypeIdSelected}
                      dataSelect={listProfileTypeOption}
                      onChangeSelect={onChangeSelectProfileType}
                      autoComplete="false"
                      isRequired
                    />
                  </Form.Item>
                  <DivPlus
                    onClick={() => {
                      setShowAddLHS(true);
                    }}
                  >
                    <ButtonAdd alt="" src={buttonAddImage} onclick={onClickAddProfileType} />
                  </DivPlus>
                </ProfileTypeContainer>
                <RadioLayout>
                  <RadioLayoutItem>
                    <Form.Item style={{ marginBottom: '0px' }} label={t('profile.deadlineSignProfile')}>
                      <Radio.Group defaultValue={deadlineSignProfileRadio} onChange={changeDeadlineSignProfileRadio}>
                        <Radio value={1}>{t('profile.timeLimit')}</Radio>
                        <Radio value={2}>{t('profile.timeNoLimit')}</Radio>
                      </Radio.Group>
                    </Form.Item>
                    {deadlineSignProfileRadio === 1 && (
                      <Row>
                        <Col span={7} />
                        <Col span={17}>
                          <Form.Item
                            name="deadlineSignProfile"
                            rules={[
                              {
                                required: true,
                                message: t('profile.requireDateTime'),
                              },
                            ]}
                          >
                            <DatePicker locale={locale} format="DD/MM/YYYY HH:mm" showTime />
                          </Form.Item>
                        </Col>
                      </Row>
                    )}
                  </RadioLayoutItem>
                  <RadioLayoutItem>
                    <Form.Item style={{ marginBottom: '0px' }} label={t('profile.deadlineProfile')}>
                      <Radio.Group defaultValue={deadlineProfileRadio} onChange={changeDeadlineProfileRadio}>
                        <Radio value={1}>{t('profile.timeLimit')}</Radio>
                        <Radio value={2}>{t('profile.timeNoLimit')}</Radio>
                      </Radio.Group>
                    </Form.Item>
                    {deadlineProfileRadio === 1 && (
                      <Row>
                        <Col span={6} />
                        <Col span={18}>
                          <Form.Item
                            rules={[
                              {
                                required: true,
                                message: t('profile.requireDateTime'),
                              },
                            ]}
                            name="deadlineProfile"
                          >
                            <DatePicker locale={locale} format="DD/MM/YYYY HH:mm" showTime />
                          </Form.Item>
                        </Col>
                      </Row>
                    )}
                  </RadioLayoutItem>
                </RadioLayout>
              </Col>
            </Row>
          </Content>
        </Container>
        <Container>
          <Title>{t('profile.listObjectSign')}</Title>
          <div
            style={!viewListSignerByProfileSample || viewListSignerByProfileSample.length === 0 ? { height: '225px' } : null}
          >
            <Table
              isTablePopup
              columns={SIGN_OBJECT_TABLE_COLUMN}
              data={viewListSignerByProfileSample}
              isLoading={false}
              pagination={false}
              minWidth={1000}
            />
          </div>
        </Container>
        <Container>
          <Title>{t('profile.listDocument')}</Title>
          <div
            style={
              !viewListDocumentByProfileSample || viewListDocumentByProfileSample.length === 0 ? { height: '225px' } : null
            }
          >
            <Table
              isTablePopup
              columns={DOCUMENT_TABLE_COLUMN}
              data={viewListDocumentByProfileSample}
              isLoading={false}
              pagination={false}
              minWidth={1000}
            />
          </div>
        </Container>
      </FormCustom>
      {showEditDocument && (
        <EditInformationDocument
          data={documentDataSelected}
          onClose={() => setShowEditDocument(false)}
          onClickSubmit={updateListDocument}
        />
      )}
      {showUpdateInformationObjectSign && (
        <UpdateInformationObjectSign
          data={objectSignDataSelected}
          listSignType={listSignType}
          onClickSubmit={updateListObjectSign}
          onClose={() => setShowUpdateInformationObjectSign(false)}
        />
      )}
      {showAddLHS && (
        <ModalAddLHS
          updateData={() => {
            dispatch(actions.getListProfileType());
          }}
          onClose={() => setShowAddLHS(false)}
        />
      )}
    </ModalFullScreen>
  );
};
AddAndEditProfileOnline.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  onContinue: PropTypes.func,
};

export default AddAndEditProfileOnline;
