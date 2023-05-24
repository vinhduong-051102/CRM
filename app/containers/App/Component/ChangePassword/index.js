import React from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ButtonClose, ButtonSubmit, ChangePasswordModal, CustomForm, NoteMessage } from './style';
import FloatingLabel from '../../../../res/components/FloatingLabel/Input';
import { REDUX_KEY, REGEX_PASSWORD } from '../../../../utils/constants';
import * as actions from '../../actions';
import { useInjectReducer } from '../../../../utils/injectReducer';
import reducer from '../../reducer';
import { useInjectSaga } from '../../../../utils/injectSaga';
import saga from '../../saga';

const key = REDUX_KEY.app;

const ChangePassword = ({ onClose }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [formPassword] = Form.useForm();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const userInfo = localStorage.getItem('userInfo');
  const userName = JSON.parse(userInfo).username;

  const onChangePassword = () => {
    formPassword.validateFields().then(values => {
      const body = { passwordOld: values.currentPassword, passwordNew: values.newPassword };
      dispatch(actions.changePassword(body));
      onClose();
    });
  };

  return (
    <ChangePasswordModal
      visible
      width={720}
      title={t('common.changePassword')}
      onCancel={onClose}
      footer={[
        <ButtonClose onClick={onClose}>{t('common.close')}</ButtonClose>,
        <ButtonSubmit onClick={onChangePassword}>{t('common.changePassword')}</ButtonSubmit>,
      ]}
    >
      <CustomForm form={formPassword}>
        <Form.Item
          name="currentPassword"
          rules={[
            {
              required: true,
              message: t('changePassword.inValidatePassword'),
            },
          ]}
        >
          <FloatingLabel style={{ width: '100%' }} label={t('changePassword.currentPassword')} name="" isRequired isPass />
        </Form.Item>

        <Form.Item
          name="newPassword"
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject(new Error(t('changePassword.inValidatePassword')));
                }
                if (value && value.length < 8) {
                  return Promise.reject(new Error(t('changePassword.requiredMinLength')));
                }
                if (value && (value.includes(userName) || value.includes(' '))) {
                  return Promise.reject(new Error(t('changePassword.requiredNotUsernameAndBlank')));
                }
                // Kiem tra mat khau ton tai 3 trong 4 ki tu
                if (!REGEX_PASSWORD.test(getFieldValue('newPassword'))) {
                  return Promise.reject(new Error(t('changePassword.requiredElementOfPassword')));
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <FloatingLabel style={{ width: '100%' }} label={t('changePassword.newPassword')} name="" isRequired isPass />
        </Form.Item>

        <Form.Item
          name="confirmNewPassword"
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject(new Error(t('changePassword.inValidatePassword')));
                }
                if (value && getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('changePassword.requirePasswordSame')));
              },
            }),
          ]}
        >
          <FloatingLabel style={{ width: '100%' }} label={t('changePassword.retypeNewPassword')} name="" isRequired isPass />
        </Form.Item>

        <Form.Item>
          <NoteMessage>- {t('changePassword.requiredLengthOfPassword')}</NoteMessage>
          <NoteMessage>- {t('changePassword.requiredElementOfPassword')}</NoteMessage>
          <NoteMessage>- {t('changePassword.requiredNotUsernameAndBlank')}</NoteMessage>
        </Form.Item>
      </CustomForm>
    </ChangePasswordModal>
  );
};

ChangePassword.propTypes = {
  onClose: PropTypes.func,
};
export default ChangePassword;
