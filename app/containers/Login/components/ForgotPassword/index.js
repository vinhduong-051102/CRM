import { useTranslation } from 'react-i18next';
import { Form } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from '../../../../res/components/CustomModal';
import { ContentPopupForgotPassword, NoteForgotPassword } from './style';
import { InputHelper } from '../../stylesLogin';
import FlInput from '../../../../res/components/FloatingLabel/Input';
import { REGEX_PHONE_NUMBER } from '../../../../utils/constants';
const ForgotPassword = ({ onClose }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const onSubmit = () => {
    form.validateFields().then(value => {
      console.log(value);
    });
  };
  const onFinish = () => {};
  return (
    <CustomModal
      title={t('login.passwordRecovery')}
      width={720}
      onClickCancel={onClose}
      onSave={onSubmit}
      isSaveIsReset={false}
      nameSave={t('login.passwordRecovery')}
    >
      <ContentPopupForgotPassword>
        <NoteForgotPassword>{t('login.noteForgotPassword')}</NoteForgotPassword>
        <Form
          name="forgot-form"
          form={form}
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
        >
          <InputHelper>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: t('login.textRequireUsername'),
                },
              ]}
            >
              <FlInput style={{ width: 655 }} label={t('login.labelUsername')} name="Username" isRequired />
            </Form.Item>
          </InputHelper>
          <InputHelper>
            <Form.Item
              name="phone"
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
              <FlInput style={{ width: 655 }} label={t('login.numberPhone')} name="phone" isRequired />
            </Form.Item>
          </InputHelper>
        </Form>
      </ContentPopupForgotPassword>
    </CustomModal>
  );
};

ForgotPassword.propTypes = {
  onClose: PropTypes.func,
};

export default ForgotPassword;
