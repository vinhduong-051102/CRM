import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { Form } from 'antd';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CustomModal from '../../../../res/components/CustomModal';
import { Content, InputCustom, Note, TextAreaCustom } from './styles';
import { resetConfirmInfo } from '../../actionsPartner';

const ConfirmInformation = ({ taxCode, data, onClose, confirm }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(
    () => () => {
      dispatch(resetConfirmInfo());
    },
    [],
  );

  useEffect(() => {
    if (!_.isEmpty(data)) {
      form.setFieldsValue({
        unitName: data.name,
        address: data.address,
      });
    }
  }, [data]);

  const onSubmit = () => {
    confirm({
      ...form.getFieldsValue(),
      taxCode,
    });
  };

  return (
    <CustomModal title={t('partner.titleModalConfirmInfo')} width={760} onClickCancel={onClose} onSave={onSubmit}>
      <Content>
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          form={form}
        >
          <Form.Item labelAlign="left" label={t('partner.taxCode')} name="taxCode">
            {taxCode}
          </Form.Item>
          <Form.Item labelAlign="left" label={t('partner.unitName')} name="unitName">
            <InputCustom style={{ height: '40px' }} />
          </Form.Item>
          <Form.Item labelAlign="left" label={t('partner.address')} name="address">
            <TextAreaCustom
              autoSize={{
                minRows: 2,
                maxRows: 3,
              }}
            />
          </Form.Item>
        </Form>
        <Note>{t('partner.noteConfirmInfo')}</Note>
      </Content>
    </CustomModal>
  );
};
ConfirmInformation.propTypes = {
  onClose: PropTypes.func,
  confirm: PropTypes.func,
  taxCode: PropTypes.string,
  data: PropTypes.object,
};

export default ConfirmInformation;
