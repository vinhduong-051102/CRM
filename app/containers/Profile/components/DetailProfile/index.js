import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Radio, Form } from 'antd';
import {
  CustomModalWithoutFooter,
  ModalTitle,
  TabsCustom,
  DetailProfileContainer,
  SpanCustom,
  SignButton,
  RefuseReasonContainer,
  SaveButton,
  InputCustom,
  FormCustom,
  ResultWrapper,
  ResultSuccess,
  ResultRefuse,
  DetailInfoSuccess,
  SpanGridCustom,
  DetailInfoRefuse,
  FormItemRefuse,
} from './styles';

const DetailProfile = ({ onClose }) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const [valueChecked, setValueChecked] = useState('1');
  const [isSignSuccess, setIsSignSuccess] = useState(false);
  const [isRefuseSuccess, setIsRefuseSuccess] = useState(false);

  const items = [
    {
      key: '1',
      label: `Tab 1`,
    },
    {
      key: '2',
      label: `Tab 2`,
    },
    {
      key: '3',
      label: `Tab 3`,
    },
  ];

  const handleChangeValueChecked = e => {
    setValueChecked(e.target.value);
  };

  const handleSaveReasonRefuse = () => {
    form.validateFields().then(() => {
      setIsRefuseSuccess(true);
    });
  };

  const getTime = () => {
    const date = new Date();
    let hours = '';
    let minutes = '';
    let seconds = '';
    if (date.getHours() < 10) {
      hours = `0${date.getHours()}`;
    } else {
      hours = date.getHours();
    }
    if (date.getMinutes() < 10) {
      minutes = `0${date.getMinutes()}`;
    } else {
      minutes = date.getMinutes();
    }
    if (date.getSeconds() < 10) {
      seconds = `0${date.getSeconds()}`;
    } else {
      seconds = date.getSeconds();
    }
    return `${hours}:${minutes}:${seconds}`;
  };

  const getDate = () => {
    const date = new Date();
    let day = '';
    let month = '';
    if (date.getDate() < 10) {
      day = `0${date.getDate()}`;
    } else {
      day = date.getDate();
    }
    if (date.getMonth() < 10) {
      month = `0${date.getMonth() + 1}`;
    } else {
      month = date.getMonth() + 1;
    }
    return `${day}/${month}/${date.getFullYear()}`;
  };

  const handleSign = () => {
    setIsSignSuccess(true);
  };
  const data = '';

  return (
    <CustomModalWithoutFooter title={null} visible footer={null} width={1300} onCancel={onClose}>
      <ModalTitle>{t('profile.signProfile')}</ModalTitle>
      <DetailProfileContainer>
        <TabsCustom defaultActiveKey="1" items={items} onChange={() => {}} type="card" />
        <iframe
          src={`data:application/pdf;base64,${data}`}
          width="100%"
          height={400}
          title="#"
          style={{ marginBottom: 20 }}
        />
        {!isSignSuccess &&
          (!isRefuseSuccess && (
            <>
              <Radio.Group value={valueChecked} onChange={handleChangeValueChecked}>
                <Radio value="1">{t('profile.agree')}</Radio>
                <Radio value="2">{t('profile.refuse')}</Radio>
              </Radio.Group>
              <SpanCustom style={{ marginLeft: 50 }}>
                <span>{t('profile.profileCode')}:</span> <b>Công ty ABC</b>
              </SpanCustom>
              <SpanCustom style={{ marginLeft: 100 }}>
                <span>{t('profile.objectRefuse')}:</span> <b>Công ty ABC</b>
              </SpanCustom>
              {valueChecked === '1' && <SignButton onClick={handleSign}>{t('profile.signProfile')}</SignButton>}

              {valueChecked === '2' && (
                <RefuseReasonContainer>
                  <FormCustom layout="vertical" form={form}>
                    <FormItemRefuse
                      name="reasonRefuse"
                      label={t('profile.reasonRefuse')}
                      rules={[{ required: true, message: t('profile.reasonRefuseIsRequired') }]}
                    >
                      <InputCustom />
                    </FormItemRefuse>
                  </FormCustom>
                  <SaveButton onClick={handleSaveReasonRefuse}>{t('profile.save')}</SaveButton>
                </RefuseReasonContainer>
              )}
            </>
          ))}

        {isSignSuccess && (
          <ResultWrapper>
            <ResultSuccess>{t('profile.signSuccess')}</ResultSuccess>
            <DetailInfoSuccess>
              <SpanGridCustom>
                <span>{t('profile.profileCode')}:</span> <b>Cong ty ABC</b>
              </SpanGridCustom>
              <SpanCustom>
                <span>{t('profile.dateSign')}:</span>{' '}
                <b>
                  <span>{getTime()}</span>
                  <span>{getDate()}</span>
                </b>
              </SpanCustom>
              <SpanGridCustom>
                <span>{t('profile.objectSign')}:</span> <b>Cong ty ABC</b>
              </SpanGridCustom>
            </DetailInfoSuccess>
          </ResultWrapper>
        )}

        {isRefuseSuccess && (
          <ResultWrapper>
            <ResultRefuse>{t('profile.signRefuse')}</ResultRefuse>
            <DetailInfoRefuse>
              <div>
                <SpanGridCustom>
                  {t('profile.profileCode')}: <b>Cong ty ABC</b>
                </SpanGridCustom>
                <SpanGridCustom>
                  {t('profile.objectSign')}: <b>Cong ty ABC</b>
                </SpanGridCustom>
                <SpanCustom>
                  {t('profile.time')}:{' '}
                  <b>
                    <span>{getTime()}</span>
                    <span>{getDate()}</span>
                  </b>
                </SpanCustom>
              </div>
              <div>
                <SpanGridCustom>
                  <span>{t('profile.reason')}:</span> <b>{form.getFieldValue('reasonRefuse')}</b>
                </SpanGridCustom>
              </div>
            </DetailInfoRefuse>
          </ResultWrapper>
        )}
      </DetailProfileContainer>
    </CustomModalWithoutFooter>
  );
};

DetailProfile.propTypes = {
  onClose: PropTypes.func,
};

export default DetailProfile;
