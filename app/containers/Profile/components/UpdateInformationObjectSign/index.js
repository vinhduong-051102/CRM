import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import CustomModal from '../../../../res/components/CustomModal';
import {
  FormItemRadio,
  RadioCustom,
  RadioGroup,
  TextGetTaxCode,
} from '../../../Partner/components/AddAndEditPartnerOnline/style';
import InputCustom from '../../../../res/components/InputCustom';
import {
  DEFAULT_PARAM_EASY_SEARCH,
  REGEX_CMND_CCCD,
  REGEX_EMAIL,
  REGEX_MST,
  REGEX_PHONE_NUMBER,
} from '../../../../utils/constants';
import { CustomSelectHS, FormCustomHS } from './style';
import SearchField from '../../../../res/components/InputField/SearchField';
import { getMsgClient } from '../../../../res/commonFunction';
import { getInformationObjectSign } from '../../actionsProfile';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
const UpdateInformationObjectSign = ({ data, listSignType, onClose, onClickSubmit }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [typePartner, setTypePartner] = useState(1);
  const [signTypeList, setSignTypeList] = useState([]);
  const [textSearch, setTextSearch] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [objectId, setObjectId] = useState(0);

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        identityNo: data.identityCode,
        fullName: data.signerName,
        email: data.email,
        phone: data.phoneNumber,
        typeSign: data.typeSignId,
      });
    }
  }, []);

  useEffect(() => {
    if (listSignType && listSignType.length !== 0) {
      setSignTypeList(
        listSignType.map(item => ({
          value: item.id,
          label: item.name,
        })),
      );
      if (data && !data.typeSignId) {
        form.setFieldsValue({
          typeSign: listSignType[0].id,
        });
      }
    }
  }, [listSignType]);

  useEffect(() => {
    if (textSearch) {
      const body = {
        ...DEFAULT_PARAM_EASY_SEARCH,
        textSearch,
        categoryId,
        objectId,
      };
      dispatch(
        getInformationObjectSign(body, res => {
          if (res.length !== 0) {
            const result = {
              identityNo: res[0].code,
              fullName: res[0].name,
              email: res[0].email,
              phone: res[0].phone,
            };
            form.setFieldsValue(result);
            setTypePartner(res[0].partnerType);
          }
        }),
      );
    }
  }, [textSearch, objectId]);

  const onSubmit = () => {
    form.validateFields().then(value => {
      const body = {
        code: data.signerCode,
        ...value,
        address: value.address || '',
      };
      onClickSubmit(body);
    });
  };

  const onSelectSearch = (value, option) => {
    if (option.categoryid !== 0 && option.objectid === 0) {
      setTextSearch(option.text_search);
      setCategoryId(option.categoryid);
      setObjectId(option.categoryid);
    } else {
      setTextSearch(getMsgClient(value || ''));
      setCategoryId(option.categoryid);
      setObjectId(option.objectid);
    }
  };

  return (
    <CustomModal
      title={t('profile.titleModalUpdatePersonSignProfile')}
      visible
      width={720}
      onClickCancel={onClose}
      onSave={() => {
        onSubmit();
      }}
    >
      <div style={{ paddingTop: 30, display: 'flex', justifyContent: 'center' }}>
        <SearchField
          mode="onlySelect"
          hideFilter
          placeholder={t('profile.textSearch')}
          onSelect={onSelectSearch}
          pathSuggestSearch="/Partner/SuggestSearch"
        />
      </div>
      <FormCustomHS {...layout} form={form}>
        <FormItemRadio style={{ marginBottom: '5px' }} label={`${t('profile.partnerType')}:`} name="typePartner">
          <RadioGroup
            defaultValue={typePartner}
            onChange={e => {
              form.resetFields(['identityNo', 'fullName']);
              setTypePartner(e.target.value);
            }}
          >
            <RadioCustom value={1}>{t('common.unit')}</RadioCustom>
            <RadioCustom value={2}>{t('common.individual')}</RadioCustom>
          </RadioGroup>
        </FormItemRadio>

        <Form.Item
          name="identityNo"
          rules={[
            () => ({
              validator(_, value) {
                if (value) {
                  const regex = typePartner === 2 ? new RegExp(REGEX_CMND_CCCD) : new RegExp(REGEX_MST);
                  if (!regex.test(value.trim())) {
                    return Promise.reject(
                      new Error(`${typePartner === 1 ? t('profile.taxCode') : t('common.CMND')} ${t('common.notValidate')}`),
                    );
                  }
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(`${typePartner === 1 ? t('profile.taxCode') : t('common.CMND')} ${t('common.notEmpty')}`),
                );
              },
            }),
          ]}
          label={typePartner === 1 ? `${t('profile.taxCode')}:` : `${t('common.CMND')}:`}
        >
          <InputCustom
            placeholder={typePartner === 1 ? t('profile.typeTaxCode') : t('profile.typeIdentification')}
            suffix={
              <>
                {typePartner === 1 && (
                  <Tooltip title={t('profile.getInfoByTaxCode')}>
                    <TextGetTaxCode>{t('common.getInfo')}</TextGetTaxCode>
                  </Tooltip>
                )}
              </>
            }
          />
        </Form.Item>

        <Form.Item
          name="fullName"
          label={typePartner === 1 ? `${t('common.unitName')}:` : t('common.individualName')}
          rules={[
            () => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject(
                    new Error(
                      `${typePartner === 1 ? `${t('common.unitName')}` : t('common.individualName')} ${t(
                        'common.notEmpty',
                      )}`,
                    ),
                  );
                }
                if ((value.length < 3 || value.length > 200) && typePartner === 1) {
                  return Promise.reject(new Error(t('profile.maxLengthOfCompany')));
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <InputCustom placeholder={typePartner === 1 ? t('profile.typeUnitName') : t('profile.typeFullName')} />
        </Form.Item>

        <Form.Item
          name="phone"
          label={`${t('partner.phoneNumber')}:`}
          rules={[
            () => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject(new Error(`${t('partner.phoneNumber')} ${t('common.notEmpty')}`));
                }
                if (!value || REGEX_PHONE_NUMBER.test(value.trim())) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('profile.phoneNumberIsIllegal')));
              },
            }),
          ]}
        >
          <InputCustom placeholder={t('profile.typePhoneNumber')} />
        </Form.Item>

        <Form.Item
          name="email"
          label={`${t('common.email')}:`}
          rules={[
            () => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject(new Error(`${t('common.email')} ${t('common.notEmpty')}`));
                }
                if (value && value.length !== 0) {
                  if (!REGEX_EMAIL.test(value.trim())) {
                    return Promise.reject(new Error(`${t('common.email')} ${value} ${t('profile.emailIsMalformed')}`));
                  }
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <InputCustom placeholder={t('profile.typeEmail')} />
        </Form.Item>

        <Form.Item
          name="address"
          label={`${t('common.address')}:`}
          rules={[
            () => ({
              validator(_, value) {
                if (value && value.length >= 500) {
                  return Promise.reject(new Error(t('profile.maxLengthOfAddress')));
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <InputCustom placeholder={t('profile.typeAddress')} />
        </Form.Item>

        <Form.Item name="typeSign" label={`${t('profile.typeOfAuth')}:`}>
          <CustomSelectHS options={signTypeList} />
        </Form.Item>
      </FormCustomHS>
    </CustomModal>
  );
};

UpdateInformationObjectSign.propTypes = {
  data: PropTypes.object,
  listSignType: PropTypes.array,
  onClose: PropTypes.func,
  onClickSubmit: PropTypes.func,
};

export default UpdateInformationObjectSign;
