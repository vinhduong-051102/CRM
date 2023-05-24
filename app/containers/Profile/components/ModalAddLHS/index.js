import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Form } from 'antd';
import { useDispatch } from 'react-redux';
import { ButtonClose } from '../../../App/Component/ChangePassword/style';
import { ButtonSave } from '../../../../res/components/CustomModal/styled';
import FloatingLabel from '../../../../res/components/FloatingLabel/Input';
import * as actions from '../../actionsProfile';
import { CustomFooter, ModalAddLHSCustom } from './style';
import { REGEX_ALPHABET, REGEX_NUMBER, REGEX_PROFILE_NAME, REGEX_SAMPLE_CHARACTERS } from '../../../../utils/constants';

const AddLHSModal = ({ onClose, updateData }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onSubmit = () => {
    form.validateFields().then(value => {
      const body = {
        id: 0,
        name: value.name,
      };
      dispatch(
        actions.addProfileType(body, () => {
          updateData();
          onClose();
        }),
      );
    });
  };
  return (
    <ModalAddLHSCustom width={550} visible onCancel={onClose} footer={null} title={t('profile.addOfTypeHS')}>
      <Form form={form}>
        <Form.Item
          name="name"
          rules={[
            () => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject(new Error(t('profile.invalidEmptyHS')));
                }
                if (value && (value.length < 3 || value.length > 50)) {
                  return Promise.reject(new Error(t('profile.invalidLengthOfHS')));
                }

                if (value && value.length !== 0) {
                  if (!REGEX_PROFILE_NAME.test(value.trim()) || REGEX_SAMPLE_CHARACTERS.test(value.trim())) {
                    return Promise.reject(new Error(t('profile.profileNameError')));
                  }
                  let checkAllCharacterSame = false;
                  let checkAllSpecialCharacter = false;
                  const n = value.length;
                  for (let i = 0; i < n; i += 1) {
                    if (value[i] !== value[0]) {
                      checkAllCharacterSame = true;
                    }
                    checkAllSpecialCharacter =
                      checkAllSpecialCharacter || REGEX_ALPHABET.test(value[i]) || REGEX_NUMBER.test(value[i]);
                  }
                  if (checkAllCharacterSame === false || checkAllSpecialCharacter === false) {
                    return Promise.reject(new Error(t('profile.invalidNameOfHS')));
                  }
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <FloatingLabel style={{ width: '100%' }} label={t('profile.nameTypeHS')} isRequired />
        </Form.Item>
      </Form>
      <CustomFooter>
        <ButtonClose
          onClick={() => {
            onClose();
          }}
        >
          {t('common.closeModal')}
        </ButtonClose>

        <ButtonSave
          onClick={() => {
            onSubmit();
          }}
        >
          {t('profile.addNewTypeHS')}
        </ButtonSave>
      </CustomFooter>
    </ModalAddLHSCustom>
  );
};

AddLHSModal.propTypes = {
  onClose: PropTypes.func,
  updateData: PropTypes.func,
};

export default AddLHSModal;
