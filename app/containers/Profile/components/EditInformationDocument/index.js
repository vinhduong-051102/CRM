import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FormItem from 'antd/es/form/FormItem';
import { Form } from 'antd';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { CustomSelectHS, FormCustomHS } from '../UpdateInformationObjectSign/style';
import InputCustom from '../../../../res/components/InputCustom';
import { CustomCheckBox, CustomPicker, InputNumberCustom } from './style';
import CustomModal from '../../../../res/components/CustomModal';
import {
  FIELD_TYPE_CHECKBOX,
  FIELD_TYPE_DATEPICKER,
  FIELD_TYPE_DROPDOWN_LIST,
  FIELD_TYPE_NUMBER_BOX,
  FIELD_TYPE_TEXTAREA,
} from '../../constantsProfile';
const dateFormat = 'DD/MM/YYYY';

const EditInformationDocument = ({ data, onClose, onClickSubmit }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const [typeOfPlan, setTypeOfPlan] = useState('1');

  // fake data
  const listPlan = [
    { value: '1', label: 'Dài hạn' },
    { value: '10', label: 'Ngắn hạn' },
    { value: '10', label: 'Trung hạn' },
  ];

  useEffect(() => {
    if (!_.isEmpty(data.data)) {
      form.setFieldsValue(data.data);
    }
  }, []);

  const onSubmit = () => {
    form.validateFields().then(value => {
      onClickSubmit({
        code: data.textSampleCode,
        data: value,
      });
    });
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <CustomModal
      title={t('profile.titleModalEnterInformationDocument')}
      onClickCancel={onClose}
      width={820}
      onSave={onSubmit}
    >
      <FormCustomHS {...layout} form={form}>
        <FormItem>
          <strong>{`${data.textSampleCode} - ${data.textSampleName}`}</strong>
        </FormItem>

        {data.listField.map(element => {
          if (element.type === FIELD_TYPE_TEXTAREA) {
            return (
              <Form.Item
                name={element.name}
                label={`${element.name}${element.isRequired ? '::' : ''}`}
                rules={[
                  {
                    required: element.isRequired,
                    message: `${element.name} ${t('common.notEmpty')}`,
                  },
                ]}
              >
                <InputCustom placeholder={`${t('common.input')} ${element.name}`} />
              </Form.Item>
            );
          }
          if (element.type === FIELD_TYPE_CHECKBOX) {
            return (
              <Form.Item
                label={`${element.name}${element.isRequired ? '::' : ''}`}
                name={element.name}
                valuePropName="checked"
              >
                <CustomCheckBox />
              </Form.Item>
            );
          }

          if (element.type === FIELD_TYPE_DATEPICKER) {
            return (
              <Form.Item label={`${element.name}${element.isRequired ? '::' : ''}`} name={element.name}>
                <CustomPicker placeholder={`${t('common.input')} ${element.name}`} format={dateFormat} />
              </Form.Item>
            );
          }

          if (element.type === FIELD_TYPE_NUMBER_BOX) {
            return (
              <Form.Item label={`${element.name}${element.isRequired ? '::' : ''}`} name={element.name}>
                <InputNumberCustom />
              </Form.Item>
            );
          }

          if (element.type === FIELD_TYPE_DROPDOWN_LIST) {
            return (
              <Form.Item label={`${element.name}${element.isRequired ? '::' : ''}`} name={element.name}>
                <CustomSelectHS
                  defaultValue="1"
                  options={listPlan}
                  onChangeSelect={value => {
                    setTypeOfPlan(value);
                  }}
                  valueSelect={typeOfPlan}
                />
              </Form.Item>
            );
          }

          return <div />;
        })}
      </FormCustomHS>
    </CustomModal>
  );
};

EditInformationDocument.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  onClickSubmit: PropTypes.func,
};

export default EditInformationDocument;
