import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Col, Form, Radio, Row } from 'antd';
// import { Document } from 'react-pdf';
import { useDispatch, useSelector } from 'react-redux';
import { PUCheckProfile, ButtonTab, CustomFormProfile, DivFootFullScreeModal } from './styles';
import { ButtonSave } from '../../../../res/components/CustomModal/styled';
import ButtonCircle from '../../../../res/components/ButtonCircle';
import { RadioCustom } from '../../../Partner/components/AddAndEditPartnerOnline/style';
import Floating from '../../../../res/components/FloatingLabel/Floatting';
import { CustomSelectHS } from '../UpdateInformationObjectSign/style';
import { REGEX_PROFILE_NAME, REGEX_SAMPLE_CHARACTERS } from '../../../../utils/constants';
import FloatingLabel from '../../../../res/components/FloatingLabel/Input';

import * as actions from '../../actionsProfile';
import * as selectors from '../../selectorsProfile';

const ModalCheckProfile = ({ onClose }) => {
  const [agree, setAgree] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getListVB());
  }, []);
  const list = useSelector(selectors.selectListVB());
  const onChange = e => {
    setAgree(e.target.value);
  };
  const { t } = useTranslation();
  return (
    <PUCheckProfile visible title={t('profile.checkProfile')} onCancel={onClose} footer={null}>
      <Row style={{ height: '10%' }}>
        {list.map(item => (
          <Col>
            <ButtonTab>{item.title}</ButtonTab>
          </Col>
        ))}
        <Col span={1} type="flex" align="right" style={{ position: 'absolute', right: 24 }}>
          <ButtonCircle title="dowmload anything" placement="top" iconName="download" enable />
        </Col>
      </Row>

      <div>
        {' '}
        PDF here
        {/* <Document /> */}
      </div>

      <DivFootFullScreeModal>
        <Row gutter={16}>
          <Col span={7}>
            <Radio.Group style={{ marginLeft: 0 }} onChange={onChange} value={agree}>
              <RadioCustom value>{t('profile.agree')}</RadioCustom>
              <RadioCustom value={false}>{t('profile.disagree')}</RadioCustom>
            </Radio.Group>
          </Col>

          <Col span={4}>
            {`${t('profile.profileCode')}: `}
            <strong style={{ marginLeft: 20 }} />
          </Col>

          <Col span={8}>
            {`${t('profile.objectCheckProfile')}: `}
            <strong style={{ marginLeft: 20 }} />
          </Col>
        </Row>

        {agree && (
          <>
            <CustomFormProfile>
              <Row gutter={16}>
                <Col span={7}>
                  <Form.Item>
                    <Floating label={t('profile.peopleCheck')}>
                      <CustomSelectHS />
                    </Floating>
                  </Form.Item>
                </Col>
                <Col span={17}>
                  <Form.Item
                    name="peopleCheckOpinion"
                    rules={[
                      () => ({
                        validator(_, value) {
                          if (value) {
                            if (value.length > 500) {
                              return Promise.reject(new Error(t('profile.profileNameMaxLength500')));
                            }
                            if (value.length === 1) {
                              if (!REGEX_PROFILE_NAME.test(value.trim())) {
                                return Promise.reject(new Error(t('profile.invalidText')));
                              }
                              return Promise.resolve();
                            }

                            if (value.length > 1) {
                              if (!REGEX_PROFILE_NAME.test(value.trim()) || REGEX_SAMPLE_CHARACTERS.test(value.trim())) {
                                return Promise.reject(new Error(t('profile.invalidText')));
                              }
                              return Promise.resolve();
                            }
                          }
                          return Promise.resolve();
                        },
                      }),
                    ]}
                  >
                    <FloatingLabel
                      style={{ height: 40 }}
                      label={t('profile.peopleCheckOpinion')}
                      autoComplete="false"
                      isRequired={false}
                      textArea
                    />
                  </Form.Item>
                </Col>
              </Row>
            </CustomFormProfile>

            <Row gutter={0}>
              <Col span={3} offset={21} type="flex" align="right">
                <ButtonSave
                  onClick={() => {
                    onClose();
                  }}
                >
                  {t('profile.checkProfile')}
                </ButtonSave>
              </Col>
            </Row>
          </>
        )}

        {!agree && (
          <CustomFormProfile>
            <Row gutter={16} align="top">
              <Col span={22}>
                <Form.Item
                  name="reasonDisagree"
                  rules={[
                    () => ({
                      validator(_, value) {
                        if (value) {
                          if (value.length < 5) {
                            return Promise.reject(new Error(t('profile.MinLengthIs5')));
                          }
                          if (value.length > 150) {
                            return Promise.reject(new Error(t('profile.profileNameMaxLength500')));
                          }
                          if (!REGEX_PROFILE_NAME.test(value.trim()) || REGEX_SAMPLE_CHARACTERS.test(value.trim())) {
                            return Promise.reject(new Error(t('profile.profileNameError')));
                          }
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error(t('profile.reasonIsNotEmpty')));
                      },
                    }),
                  ]}
                >
                  <FloatingLabel label={t('profile.reasonDisagree')} autoComplete="false" isRequired textArea />
                </Form.Item>
              </Col>

              <Col span={2} type="flex" align="right">
                <ButtonSave
                  onClick={() => {
                    onClose();
                  }}
                >
                  {t('common.saveModal')}
                </ButtonSave>
              </Col>
            </Row>
          </CustomFormProfile>
        )}
      </DivFootFullScreeModal>
    </PUCheckProfile>
  );
};

ModalCheckProfile.propTypes = {
  onClose: PropTypes.func,
};

export default ModalCheckProfile;
