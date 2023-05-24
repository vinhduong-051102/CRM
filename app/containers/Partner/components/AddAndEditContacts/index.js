import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Form, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import CustomModal from '../../../../res/components/CustomModal';
import { FormCustom, Label, LabelFloat, LabelNormal, SelectStyle, SpanStart } from '../AddAndEditPartnerOnline/style';
import { DivInputSearch } from './style';
import FloatingLabel from '../../../../res/components/FloatingLabel/Input';
import SelectFloat from '../../../../res/components/FloatingLabel/SelectFloat';
import * as actions from '../../actionsPartner';
import * as selectors from '../../selectorsPartner';
import { REGEX_EMAIL, REGEX_PHONE_NUMBER } from '../../../../utils/constants';
import { ADDRESS, EMAIL, FULL_NAME, NOTE, PHONE_NUMBER } from '../../constantsPartner';
import SearchField from '../../../../res/components/InputField/SearchField';
import { createRandomUUID } from '../../../../res/commonFunction';
import Notice from '../../../../res/components/Notice';

const AddAndEditContacts = ({ data, onClose, listProvince, onSubmitForm, disableAdd, list }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [provinceCode, setProvinceCode] = useState('');
  const [districtCode, setDistrictCode] = useState('');
  const [wardsCode, setWardsCode] = useState('');

  const [listDistrictDropdown, setListDistrictDropdown] = useState([]);
  const [listWardDropdown, setListWardDropdown] = useState([]);

  const listDistrict = useSelector(selectors.selectListDistrictInEdit());
  const listWard = useSelector(selectors.selectListWardInEdit());

  const [isFocus, setIsFocus] = useState(false);
  const [isFocusMinorPhoneNumber, setIsFocusMinorPhoneNumber] = useState(false);
  const [dataEmail, setDataEmail] = useState([]);

  const [dataMinorNumber, setDataMinorNumber] = useState([]);

  useEffect(() => {
    if (provinceCode) {
      dispatch(actions.getDistrictContact(provinceCode));
    }
  }, [provinceCode]);

  useEffect(() => {
    if (districtCode) {
      dispatch(actions.getWardContact(districtCode));
    }
  }, [districtCode]);

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
    if (data) {
      form.setFieldsValue({
        ...data,
        [EMAIL]: data[EMAIL].split(','),
      });
      setProvinceCode(data.provinceCode);
      setDistrictCode(data.districtCode);
      setWardsCode(data.wardsCode);
      setDataEmail(data[EMAIL].split(','));
    }
  }, [data]);

  const onSubmit = (isCreateAndNext = false) => {
    form.validateFields().then(value => {
      const arr = list.filter(item => item[PHONE_NUMBER] === value[PHONE_NUMBER]);
      if (arr.length !== 0 && (!data || arr[0].key !== data.key)) {
        Notice({
          msg: `${t('partner.mainPhoneNumber')} ${value[PHONE_NUMBER]} ${t('partner.of')} ${value[FULL_NAME]} ${t(
            'partner.sameWith',
          )} ${t('partner.mainPhoneNumber')} ${t('partner.of')} ${arr[0][FULL_NAME]}. ${t('partner.pleaseTryAgain')}`,
          isSuccess: false,
        });
        return;
      }
      const body = {
        ...value,
        key: data ? data.key : createRandomUUID(),
        [EMAIL]: value[EMAIL] ? value[EMAIL].toString() : '',
        provinceCode,
        districtCode,
        wardsCode,
        note: value[NOTE] || '',
        address: value[ADDRESS] || '',
      };
      if (isCreateAndNext && !data) {
        onSubmitForm(body);
        clearForm();
      } else {
        onSubmitForm(body);
        onClose();
      }
    });
  };

  const clearForm = () => {
    form.resetFields();
    setDataEmail([]);
    setListDistrictDropdown([]);
    setProvinceCode('');
    setDistrictCode('');
    setWardsCode('');
  };

  const onSelectSearch = (value, option) => {
    form.setFieldsValue({
      ...option,
      [EMAIL]: option[EMAIL].split(','),
    });
    setDataEmail(option[EMAIL].split(','));
    setProvinceCode(option.provinceCode);
    setDistrictCode(option.districtCode);
    setWardsCode(option.wardsCode);
  };

  return (
    <CustomModal
      title={data ? t('partner.editContact') : t('partner.addContact')}
      disableSaveMessage={t('partner.excessNumberContact')}
      disableSaveButton={disableAdd}
      width={850}
      onClickCancel={() => {
        dispatch(actions.resetDistrictAndWard());
        onClose();
      }}
      isSaveIsReset={!data}
      onSave={() => {
        onSubmit(false);
        dispatch(actions.resetDistrictAndWard());
      }}
      onSaveAndReset={() => {
        onSubmit(true);
        dispatch(actions.resetDistrictAndWard());
      }}
    >
      <FormCustom form={form}>
        <DivInputSearch>
          <SearchField
            mode="onlySelect"
            placeholder={t('partner.textSearch')}
            onSelect={onSelectSearch}
            pathSuggestSearch="/Partner/SuggestSearchPerson"
            hideFilter
            style={{
              width: '80%',
            }}
          />
        </DivInputSearch>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name={FULL_NAME}
              rules={[
                {
                  required: true,
                  message: t('partner.fullNameIsRequired'),
                },
              ]}
            >
              <FloatingLabel style={{ width: '100%' }} label={t('partner.fullName')} name="" isRequired />
            </Form.Item>
          </Col>
        </Row>
        <Label>{t('partner.phoneNumber')}:</Label>
        <Row gutter={16}>
          <Col span={8}>
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
              <FloatingLabel
                style={{ width: '100%' }}
                label={`${t('partner.phoneNumber')} ${t('common.main')}`}
                name=""
                isRequired
              />
            </Form.Item>
          </Col>

          <Col span={16}>
            <Form.Item
              name="minorPhoneNumber"
              rules={[
                () => ({
                  validator(_, value) {
                    if (value && value.length >= 4) {
                      return Promise.reject(new Error(t('partner.emailIsMaximum')));
                    }
                    if (value && value.length !== 0) {
                      for (let i = 0; i < value.length; i += 1) {
                        if (!REGEX_PHONE_NUMBER.test(value[i].trim())) {
                          return Promise.reject(
                            new Error(`${t('partner.phone')} ${value[i]} ${t('partner.emailIsMalformed')}`),
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
                  setDataMinorNumber(value);
                }}
                size="large"
                mode="tags"
                onFocus={() => setIsFocusMinorPhoneNumber(true)}
                onBlur={() => {
                  setIsFocusMinorPhoneNumber(false);
                }}
              />
            </Form.Item>
            {dataMinorNumber.length !== 0 || isFocusMinorPhoneNumber ? (
              <LabelFloat>
                <span>{`${t('partner.phoneNumber')} ${t('common.minor')}`}</span>
              </LabelFloat>
            ) : (
              <LabelNormal>
                <span>{`${t('partner.phoneNumber')} ${t('common.minor')}`}</span>
              </LabelNormal>
            )}
          </Col>
        </Row>

        <Label>{t('partner.email')}:</Label>
        <Row>
          <Col span={24}>
            <Form.Item
              name={EMAIL}
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

        <Label>{t('partner.address')}:</Label>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name={ADDRESS}
              rules={[
                {
                  max: 150,
                  message: t('partner.addressIsRequiredLength'),
                },
              ]}
            >
              <FloatingLabel style={{ width: '100%' }} label={t('partner.homeNumber')} name="" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="provinceCode">
              <SelectFloat
                label={t('partner.province')}
                dataSelect={listProvince}
                onChangeSelect={value => {
                  setProvinceCode(value);
                }}
                valueSelect={provinceCode}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="districtCode">
              <SelectFloat
                label={t('partner.district')}
                dataSelect={listDistrictDropdown}
                onChangeSelect={value => {
                  setDistrictCode(value);
                }}
                valueSelect={districtCode}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="wardsCode">
              <SelectFloat
                label={t('partner.ward')}
                dataSelect={listWardDropdown}
                onChangeSelect={value => {
                  setWardsCode(value);
                }}
                valueSelect={wardsCode}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name={NOTE}
          rules={[
            {
              max: 250,
              message: t('partner.noteIsRequiredLength'),
            },
          ]}
        >
          <FloatingLabel
            textArea
            label={t('partner.note')}
            style={{ minHeight: 26, maxHeight: 100, paddingTop: '6px', paddingBottom: '6px' }}
          />
        </Form.Item>
      </FormCustom>
    </CustomModal>
  );
};

AddAndEditContacts.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  listProvince: PropTypes.array,
  onSubmitForm: PropTypes.func,
  disableAdd: PropTypes.bool,
  list: PropTypes.array,
};

export default AddAndEditContacts;
