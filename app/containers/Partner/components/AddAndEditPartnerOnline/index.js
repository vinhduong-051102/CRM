import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as ld from 'lodash';
import { useTranslation } from 'react-i18next';
import { Col, Form, Row, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import CustomModal from '../../../../res/components/CustomModal';
import FloatingLabel from '../../../../res/components/FloatingLabel/Input';
import {
  DivListContact,
  DivPlus,
  TableContent,
  FormCustom,
  FormItemRadio,
  Label,
  LabelCustom,
  LabelFloat,
  LabelNormal,
  RadioCustom,
  RadioGroup,
  RowStyle,
  SelectStyle,
  SpanStart,
  TextGetTaxCode,
} from './style';
import SelectFloat from '../../../../res/components/FloatingLabel/SelectFloat';
import { ADDRESS, EMAIL, FULL_NAME, NOTE, PHONE_NUMBER } from '../../constantsPartner';
import * as actions from '../../actionsPartner';
import * as selectors from '../../selectorsPartner';
import { REGEX_CMND_CCCD, REGEX_EMAIL, REGEX_MST, REGEX_PHONE_NUMBER } from '../../../../utils/constants';
import AddAndEditContacts from '../AddAndEditContacts';
import Table from '../../../../res/components/Table';
import PopupGetInfoMST from '../popupGetInfoMST';
import ConfirmInformation from '../ConfirmInformation';
import ButtonFunctionList from '../../../../res/components/TableOtherView/ButtonFunctionList';

const AddAndEditPartnerOnline = ({ onClose, idPartner, updateData }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const columns = [
    {
      title: t('common.stt'),
      width: '5%',
      align: 'center',
      render: (text, record, index) => <div>{index + 1}</div>,
    },
    {
      title: t('partner.fullName'),
      dataIndex: FULL_NAME,
      width: '15%',
      render: val => (
        <Tooltip title={val}>
          <TableContent>{val}</TableContent>
        </Tooltip>
      ),
    },
    {
      title: t('partner.phone'),
      dataIndex: PHONE_NUMBER,
      width: '12%',
      render: val => (
        <Tooltip title={val}>
          <TableContent>{val}</TableContent>
        </Tooltip>
      ),
    },
    {
      title: t('partner.email'),
      dataIndex: EMAIL,
      width: '20%',
      render: text => (
        <Tooltip title={text.toString()}>
          <TableContent>{text.toString()}</TableContent>
        </Tooltip>
      ),
    },
    {
      title: t('partner.address'),
      dataIndex: ADDRESS,
      width: '25%',
      render: val => (
        <Tooltip title={val}>
          <TableContent>{val}</TableContent>
        </Tooltip>
      ),
    },
    {
      title: t('partner.note'),
      dataIndex: NOTE,
      width: '15%',
      render: val => (
        <Tooltip title={val}>
          <TableContent>{val}</TableContent>
        </Tooltip>
      ),
    },
    {
      title: t('partner.action'),
      width: 110,
      align: 'center',
      render: (text, record) => (
        <ButtonFunctionList
          titleEdit={t('common.edit')}
          titleDelete={t('common.delete')}
          onClickEdit={() => {
            setShowEditContacts(true);
            setContactPersonSelected(record);
          }}
          onClickDelete={() => deleteItem(record)}
        />
      ),
    },
  ];
  const [showAddContacts, setShowAddContacts] = useState(false);
  const [showEditContacts, setShowEditContacts] = useState(false);
  const [contactPersonSelected, setContactPersonSelected] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [showPopupGetMST, setShowPopupGetMST] = useState(false);
  const [showPopupConfirmInfo, setShowPopupConfirmInfo] = useState(false);

  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [ward, setWard] = useState('');

  const [listProvinceDropdown, setListProvinceDropdown] = useState([]);
  const [listDistrictDropdown, setListDistrictDropdown] = useState([]);
  const [listWardDropdown, setListWardDropdown] = useState([]);
  const [listContacts, setListContacts] = useState([]);

  const [typePartner, setTypePartner] = useState(1);

  const listProvince = useSelector(selectors.selectListProvince());
  const listDistrict = useSelector(selectors.selectListDistrict());
  const listWard = useSelector(selectors.selectListWard());
  const isLoadingGetMST = useSelector(selectors.selectLoadingGetMst());
  const infoMST = useSelector(selectors.selectInfoMST());
  const detailPartner = useSelector(selectors.selectDetailPartner());
  const [dataEmail, setDataEmail] = useState([]);

  useEffect(() => {
    dispatch(actions.getProvinceVn());
    form.setFieldsValue({
      typePartner: 1,
      status: 1,
    });
    return () => {
      dispatch(actions.resetInfo());
    };
  }, []);

  useEffect(() => {
    if (idPartner) {
      dispatch(actions.getDetailPartner(idPartner));
    }
  }, [idPartner]);

  useEffect(() => {
    if (detailPartner && idPartner) {
      form.setFieldsValue({
        taxCode: detailPartner.code,
        unitName: detailPartner.name,
        phoneNumber: detailPartner.phone,
        email: detailPartner.email ? detailPartner.email.split(',') : [],
        address: detailPartner.address,
        description: detailPartner.note,
        isActive: detailPartner.isActive ? 1 : 0,
        typePartner: detailPartner.partnerType,
      });
      setProvince(detailPartner.provinceCode);
      setWard(detailPartner.wardsCode);
      setDistrict(detailPartner.districtCode);
      setDataEmail([...dataEmail, detailPartner.email]);
      setTypePartner(detailPartner.partnerType);
      if (detailPartner.contactPerson && detailPartner.contactPerson.length !== 0) {
        setListContacts(
          detailPartner.contactPerson.map(item => ({
            ...item,
            key: item.objectGuid,
          })),
        );
      } else {
        setListContacts([]);
      }
    }
  }, [detailPartner]);

  useEffect(() => {
    if (province) {
      dispatch(actions.getDistrict(province));
      resetDistrictDropdown();
    }
  }, [province]);

  useEffect(() => {
    if (district) {
      dispatch(actions.getWard(district));
      resetWardDropdown();
    }
  }, [district]);

  useEffect(() => {
    if (listProvince && listProvince.length !== 0) {
      setListProvinceDropdown(
        listProvince.map(item => ({
          value: item.regionCode,
          label: item.regionName,
        })),
      );
    }
  }, [listProvince]);

  useEffect(() => {
    if (listDistrict && listDistrict.length !== 0) {
      setListDistrictDropdown(
        listDistrict.map(item => ({
          value: item.regionCode,
          label: item.regionName,
        })),
      );
    }
  }, [listDistrict]);

  useEffect(() => {
    if (listWard && listWard.length !== 0) {
      setListWardDropdown(
        listWard.map(item => ({
          value: item.regionCode,
          label: item.regionName,
        })),
      );
    }
  }, [listWard]);

  useEffect(() => {
    if (typeof infoMST === 'object' && !ld.isEmpty(infoMST)) {
      setShowPopupGetMST(false);
      setShowPopupConfirmInfo(true);
    }
  }, [infoMST]);

  const getInformationByTaxCode = () => {
    form.validateFields(['taxCode']).then(data => {
      if (data) {
        dispatch(actions.getMST(data.taxCode));
        setShowPopupGetMST(true);
      }
    });
  };

  const resetDistrictDropdown = () => {
    setListWardDropdown([]);
    setWard('');
    setDistrict('');
  };

  const resetWardDropdown = () => {
    setListWardDropdown([]);
    setWard('');
  };

  const resetForm = () => {
    dispatch(actions.resetDistrictAndWardPartner());
    form.resetFields();
    setProvince('');
    setWard('');
    setDistrict('');
  };

  const onSubmit = (isCreateAndNext = false) => {
    form.validateFields().then(value => {
      const body = {
        code: value.taxCode,
        name: value.unitName,
        phone: value.phoneNumber,
        email: value.email.toString(),
        partnerType: value.typePartner,
        address: value.address || '',
        provinceCode: province.toString(),
        districtCode: district.toString(),
        wardsCode: ward.toString(),
        note: value.description || '',
        isActive: value.status === 1,
        contactPerson: listContacts,
      };
      if (!idPartner) {
        dispatch(
          actions.addPartner(body, () => {
            updateData();
            if (isCreateAndNext) {
              resetForm();
            } else {
              resetForm();
              onClose();
            }
          }),
        );
      } else {
        dispatch(
          actions.addPartner(
            {
              ...body,
              objectGuid: idPartner,
            },
            () => {
              resetForm();
              updateData();
              onClose();
            },
          ),
        );
      }
    });
  };

  const onAddContacts = value => {
    setListContacts([...listContacts, value]);
  };

  const onEditContacts = value => {
    const arr = [...listContacts.filter(item => item.key !== value.key)];
    setListContacts([...arr, value]);
  };

  const deleteItem = record => {
    const listContactsUpdate = listContacts.filter(item => item.key !== record.key);
    setListContacts(listContactsUpdate);
  };

  const confirmInfo = data => {
    setShowPopupConfirmInfo(false);
    form.setFieldsValue(data);
  };

  return (
    <CustomModal
      title={!idPartner ? t('partner.titleModalAdd') : t('partner.titleModalEdit')}
      width={1100}
      onClickCancel={() => {
        resetForm();
        onClose();
      }}
      onSaveAndReset={() => {
        onSubmit(true);
      }}
      isSaveIsReset={!idPartner}
      onSave={() => {
        onSubmit(false);
      }}
    >
      <FormCustom form={form}>
        <FormItemRadio style={{ marginBottom: '5px' }} label={t('partner.typePartner')} name="typePartner">
          <RadioGroup
            defaultValue={typePartner}
            onChange={e => {
              form.resetFields(['taxCode', 'unitName']);
              setTypePartner(e.target.value);
            }}
          >
            <RadioCustom value={1}>{t('partner.unit')}</RadioCustom>
            <RadioCustom value={2}>{t('partner.individual')}</RadioCustom>
          </RadioGroup>
        </FormItemRadio>
        <Row>
          <Col span={9}>
            <Form.Item
              name="taxCode"
              rules={[
                () => ({
                  validator(_, value) {
                    if (value) {
                      const regex = typePartner === 2 ? new RegExp(REGEX_CMND_CCCD) : new RegExp(REGEX_MST);
                      if (!regex.test(value.trim())) {
                        return Promise.reject(
                          new Error(
                            `${typePartner === 1 ? t('partner.taxCodeAndBudgetCode') : t('partner.personalIdList')} ${t(
                              'partner.notValidate',
                            )}`,
                          ),
                        );
                      }
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        `${typePartner === 1 ? t('partner.taxCodeAndBudgetCode') : t('partner.personalIdList')} ${t(
                          'partner.notEmpty',
                        )}`,
                      ),
                    );
                  },
                }),
              ]}
            >
              <FloatingLabel
                style={{ width: '90%' }}
                label={typePartner === 1 ? t('partner.taxCodeAndBudgetCode') : t('partner.personalIdList')}
                autoComplete="false"
                isRequired
                suffix={
                  <>
                    {typePartner === 1 && (
                      <Tooltip title={t('partner.getInfoByTaxCode')}>
                        <TextGetTaxCode onClick={getInformationByTaxCode}>{t('partner.getInfo')}</TextGetTaxCode>
                      </Tooltip>
                    )}
                  </>
                }
              />
            </Form.Item>
          </Col>
          <Col span={15}>
            <Form.Item
              name="unitName"
              rules={[
                {
                  required: true,
                  message: `${typePartner === 1 ? t('partner.unitName') : t('partner.individualName')} ${t(
                    'partner.notEmpty',
                  )}`,
                },
                {
                  max: 200,
                  message: `${typePartner === 1 ? t('partner.unitName') : t('partner.individualName')} ${t(
                    'partner.validateLength',
                  )}`,
                },
                {
                  min: 3,
                  message: `${typePartner === 1 ? t('partner.unitName') : t('partner.individualName')} ${t(
                    'partner.validateLength',
                  )}`,
                },
                () => ({
                  validator(_, value) {
                    if (value && value.length >= 3 && value.length <= 200) {
                      if (!value.trim()) {
                        return Promise.reject(
                          new Error(
                            `${typePartner === 1 ? t('partner.unitName') : t('partner.individualName')} ${t(
                              'partner.notEmpty',
                            )}`,
                          ),
                        );
                      }
                      return Promise.resolve();
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <FloatingLabel
                style={{ width: '100%' }}
                label={typePartner === 1 ? t('partner.unitName') : t('partner.individualName')}
                name=""
                isRequired
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={9}>
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: t('partner.inValidatePhoneNumber'),
                },
                () => ({
                  validator(_, value) {
                    if (!value || REGEX_PHONE_NUMBER.test(value.trim())) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error(t('partner.phoneNumberIsIllegal')));
                  },
                }),
              ]}
            >
              <FloatingLabel style={{ width: '90%' }} label={t('partner.phone')} name="" isRequired />
            </Form.Item>
          </Col>
          <Col span={15}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: t('partner.emailIsEmpty'),
                },
                () => ({
                  validator(_, value) {
                    if (value && value.length >= 6) {
                      return Promise.reject(new Error(t('partner.emailIsMaximum')));
                    }
                    if (value && value.length !== 0) {
                      for (let i = 0; i < value.length; i += 1) {
                        if (!REGEX_EMAIL.test(value[i].trim())) {
                          return Promise.reject(
                            new Error(`${t('partner.email')} ${value[i]} ${t('partner.emailIsMalformed')}`),
                          );
                        }
                      }
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <SelectStyle
                dropdownStyle={{ display: 'none' }}
                onChange={value => {
                  setDataEmail(value);
                }}
                size="large"
                mode="tags"
                onFocus={() => setIsFocus(true)}
                onBlur={() => {
                  setIsFocus(false);
                }}
              />
            </Form.Item>
            {dataEmail.length !== 0 || isFocus ? (
              <LabelFloat>
                <span>
                  {t('partner.email')} <SpanStart>*</SpanStart>
                </span>
              </LabelFloat>
            ) : (
              <LabelNormal>
                <span>
                  {t('partner.email')} <SpanStart>*</SpanStart>
                </span>
              </LabelNormal>
            )}
          </Col>
        </Row>
        {/* <FormItemRadio label={t('partner.address')} /> */}
        <Label>{t('partner.address')}</Label>
        <Form.Item
          name="address"
          rules={[
            {
              max: 150,
              message: t('partner.homeNumberIsRequiredLength'),
            },
          ]}
        >
          <FloatingLabel style={{ width: '100%' }} label={t('partner.homeNumber')} name="" rows={5} />
        </Form.Item>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name="city">
              <SelectFloat
                label={t('partner.province')}
                dataSelect={listProvinceDropdown}
                onChangeSelect={value => {
                  setProvince(value);
                }}
                valueSelect={province}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <SelectFloat
                label={t('partner.district')}
                dataSelect={listDistrictDropdown}
                onChangeSelect={value => {
                  setDistrict(value);
                }}
                valueSelect={district}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <SelectFloat
                label={t('partner.ward')}
                dataSelect={listWardDropdown}
                onChangeSelect={value => {
                  setWard(value);
                }}
                valueSelect={ward}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          style={{ marginBottom: '9px' }}
          name="description"
          rules={[
            {
              max: 250,
              message: t('partner.descriptionIsRequiredLength'),
            },
          ]}
        >
          <FloatingLabel
            textArea
            label={t('partner.description')}
            style={{ minHeight: 26, maxHeight: 100, paddingTop: '6px', paddingBottom: '6px' }}
          />
        </Form.Item>
        {typePartner === 1 && (
          <>
            <RowStyle>
              <Col span={12} style={{ display: 'flex' }}>
                <LabelCustom>{t('partner.listContact')}</LabelCustom>
              </Col>
              <DivListContact span={12}>
                {listContacts.length < 5 ? (
                  <DivPlus
                    onClick={() => {
                      setShowAddContacts(true);
                    }}
                  >
                    <PlusOutlined />
                  </DivPlus>
                ) : (
                  <DivPlus disable>
                    <Tooltip title={listContacts.length >= 5 ? t('partner.excessNumberContact') : null}>
                      <PlusOutlined />
                    </Tooltip>
                  </DivPlus>
                )}
              </DivListContact>
            </RowStyle>
            <div
              style={{
                height: '250px',
              }}
            >
              <Table
                isTablePopup
                columns={columns}
                data={listContacts}
                isLoading={false}
                pagination={false}
                minWidth={1000}
              />
            </div>
          </>
        )}
        <FormItemRadio
          label={
            <>
              {t('partner.status')} : <SpanStart>*</SpanStart>
            </>
          }
          name="status"
          rules={[
            {
              required: true,
              message: t('partner.statusIsRequired'),
            },
          ]}
          style={{
            marginTop: '15px',
            marginBottom: '10px',
          }}
        >
          <RadioGroup defaultValue={1}>
            <RadioCustom value={1}>{t('partner.active')}</RadioCustom>
            <RadioCustom value={0}>{t('partner.inActive')}</RadioCustom>
          </RadioGroup>
        </FormItemRadio>
      </FormCustom>
      {showAddContacts && (
        <AddAndEditContacts
          onClose={() => {
            setShowAddContacts(false);
          }}
          listProvince={listProvinceDropdown}
          onSubmitForm={onAddContacts}
          disableAdd={listContacts && listContacts.length >= 5}
          list={listContacts}
        />
      )}
      {showEditContacts && (
        <AddAndEditContacts
          data={contactPersonSelected}
          onClose={() => {
            setShowEditContacts(false);
          }}
          listProvince={listProvinceDropdown}
          onSubmitForm={onEditContacts}
          list={listContacts}
        />
      )}
      {showPopupGetMST && (
        <PopupGetInfoMST
          onCancel={() => {
            setShowPopupGetMST(false);
          }}
          isLoading={isLoadingGetMST}
          isAlert={!isLoadingGetMST}
          textAlert={infoMST}
        />
      )}
      {showPopupConfirmInfo && (
        <ConfirmInformation
          taxCode={form.getFieldValue('taxCode')}
          data={infoMST}
          onClose={() => {
            setShowPopupConfirmInfo(false);
          }}
          confirm={confirmInfo}
        />
      )}
    </CustomModal>
  );
};

AddAndEditPartnerOnline.propTypes = {
  onClose: PropTypes.func,
  idPartner: PropTypes.string,
  updateData: PropTypes.func,
};

export default AddAndEditPartnerOnline;
