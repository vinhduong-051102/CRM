import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { Col, Form, Radio, Row, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ColLabel,
  Content,
  FormCustom,
  FormItemRadio,
  FormItemSelect,
  FormItemTextArea,
  InputCustom,
  Note,
  TextAreaCustom,
  Title,
} from './styles';

import SelectFloat from '../../../../res/components/FloatingLabel/SelectFloat';

import { RadioCustom } from '../../../Partner/components/AddAndEditPartnerOnline/style';
import * as selectors from '../../selectorsProfile';
import * as actions from '../../actionsProfile';
import ModalFullScreen from '../../../../res/components/ModalFullScreen';
import { LEVEL_LIST, TIME_UNIT } from '../../constantsProfile';

const { TabPane } = Tabs;
const ConfirmProfileInformation = ({ data, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const listBrowsingFlow = useSelector(selectors.selectListBrowsingFlow());
  const listDocumentPdf = useSelector(selectors.selectListDocumentPdf());
  const listReviewer = useSelector(selectors.selectListReviewer());
  const [typeFlow, setTypeFlow] = useState(1);
  const [nodeIdSelected, setNodeIdSelected] = useState(1);
  const [listBrowsingFlowOption, setListBrowsingFlowOption] = useState([]);
  const [profileReviewerListSelected, setProfileReviewerListSelected] = useState([]);
  const [profileReviewerSelected, setProfileReviewerSelected] = useState('');
  const [timeUnitSelected, setTimeUnitSelected] = useState(TIME_UNIT[0].value);
  const [timeInput, setTimeInput] = useState(2);
  const [levelSelected, setLevelSelected] = useState(LEVEL_LIST[1].value);
  const [isDisableInput, setIsDisableInput] = useState(false);
  const [activeTab, setActiveTab] = useState('1');

  useEffect(() => {
    dispatch(actions.getProfileReviewerList(nodeIdSelected));
    dispatch(actions.getListBrowsingFlow());
  }, []);

  useEffect(() => {
    if (listBrowsingFlow && listBrowsingFlow.length !== 0) {
      setListBrowsingFlowOption(
        listBrowsingFlow.map(item => ({
          value: item.nodeId,
          label: item.name,
        })),
      );
      setNodeIdSelected(listBrowsingFlow[0].nodeId);
    }
  }, [listBrowsingFlow]);

  useEffect(() => {
    if (listReviewer && listReviewer.length !== 0) {
      setProfileReviewerListSelected(
        listReviewer.map(item => ({
          value: item.userID,
          label: item.fullName,
        })),
      );
      setProfileReviewerSelected(listReviewer[0].userID);
    }
  }, [listReviewer]);

  useEffect(() => {
    if (!_.isEmpty(data)) {
      dispatch(actions.getListDocumentPdf(data.objectGuid));
    }
  }, [data]);

  const onSubmit = () => {
    form.validateFields().then(value => {
      let deadline;
      switch (timeUnitSelected) {
        case 2:
          deadline = timeInput * 1440;
          break;
        case 8:
          deadline = timeInput * 60;
          break;
        case 15:
          deadline = Number(timeInput);
          break;
        default:
          deadline = null;
          break;
      }

      const body = {
        objectGuid: data.objectGuid,
        profileGuid: data.profileGuid,
        incidentGuid: data.incidentGuid,
        userIdProcess: profileReviewerSelected,
        deadline,
        level: levelSelected,
        noteId: nodeIdSelected,
        workContent: value.workContent || '',
      };
      dispatch(
        actions.confirmProfile(body, () => {
          onClose(true);
        }),
      );
    });
  };

  const changeTypeFlowRadio = e => {
    setTypeFlow(e.target.value);
  };

  const changeBrowsingFlow = value => {
    setNodeIdSelected(value);
    dispatch(actions.getProfileReviewerList(value));
  };

  const changeProfileReviewer = value => {
    setProfileReviewerSelected(value);
  };

  const changeTimeUnit = value => {
    setTimeUnitSelected(value);
    form.setFieldsValue({
      deadline: value,
    });
    if (value === '') {
      setIsDisableInput(true);
    } else setIsDisableInput(false);
  };

  const changeLevel = value => {
    setLevelSelected(value);
  };

  const changeValueTime = e => {
    setTimeInput(e.target.value);
  };

  const timeValidator = () => ({
    validator(rule, value) {
      const valueTime = parseInt(value);

      if (timeUnitSelected === 2) {
        if (valueTime > 0 && valueTime < 91) {
          return Promise.resolve();
        }
        return Promise.reject(new Error(t('profile.errorDeadlineDay')));
      }
      if (timeUnitSelected === 8) {
        if (valueTime > 0 && valueTime < 23) {
          return Promise.resolve();
        }
        return Promise.reject(new Error(t('profile.errorDeadlineHour')));
      }
      if (timeUnitSelected === 15) {
        if (valueTime > 0 && valueTime < 59) {
          return Promise.resolve();
        }
        return Promise.reject(new Error(t('profile.errorDeadlineMinute')));
      }
      return Promise.resolve();
    },
  });

  const changeTab = e => {
    setActiveTab(e);
    dispatch(actions.getListDocumentPdf(e));
  };

  return (
    <ModalFullScreen
      title={t('profile.titleConfirmProfileInformation')}
      onClickCancel={() => onClose(false)}
      onSave={onSubmit}
    >
      <FormCustom form={form}>
        <Tabs type="card" activeKey={activeTab} onChange={changeTab}>
          {listDocumentPdf &&
            listDocumentPdf.length !== 0 &&
            listDocumentPdf.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TabPane tab={item.profileItemName} key={index + 1}>
                <iframe src={`data:application/pdf;base64,${item.data}`} width="100%" height={400} title="#" />
              </TabPane>
            ))}
        </Tabs>
        <Content>
          <Title>{t('profile.profileBrowsingInformation')}</Title>

          <FormItemRadio name="typeFlow">
            <Row gutter={16} style={{ marginBottom: '20px' }}>
              <Col span={3}>{t('profile.browsingFlow')}:</Col>
              <Col span={21}>
                <Radio.Group defaultValue={typeFlow} onChange={changeTypeFlowRadio}>
                  <RadioCustom value={1}>{t('profile.haveBrowsingFlow')}</RadioCustom>
                  <RadioCustom value={2}>{t('profile.haveNoBrowsingFlow')}</RadioCustom>
                </Radio.Group>
              </Col>
            </Row>
          </FormItemRadio>
          {typeFlow === 1 && (
            <Row gutter={16}>
              <Col span={3} />
              <Col span={9}>
                <Form.Item name="nodeId">
                  <SelectFloat
                    valueSelect={nodeIdSelected}
                    dataSelect={listBrowsingFlowOption}
                    onChangeSelect={changeBrowsingFlow}
                    autoComplete="false"
                  />
                </Form.Item>
              </Col>
              <Col span={9}>
                <Form.Item name="userIdProcess">
                  <SelectFloat
                    label={t('profile.profileReviewer')}
                    dataSelect={profileReviewerListSelected}
                    onChangeSelect={changeProfileReviewer}
                    valueSelect={profileReviewerSelected}
                  />
                </Form.Item>
              </Col>
            </Row>
          )}
          <Row gutter={16}>
            <ColLabel span={3}>{t('profile.deadlineReview')}:</ColLabel>
            <Col span={9}>
              <Row gutter={12}>
                <Col span={4}>
                  <FormItemSelect className="input-time" rules={[timeValidator]} name="deadline">
                    <InputCustom disabled={isDisableInput} defaultValue={timeInput} onChange={changeValueTime} />
                  </FormItemSelect>
                </Col>
                <Col span={6}>
                  <FormItemSelect name="timeUnit">
                    <SelectFloat
                      valueSelect={timeUnitSelected}
                      dataSelect={TIME_UNIT}
                      onChangeSelect={changeTimeUnit}
                      autoComplete="false"
                    />
                  </FormItemSelect>
                </Col>
                <Col span={14}>
                  <Note> {t('profile.noteDeadlineReview')} </Note>
                </Col>
              </Row>
            </Col>
            <Col span={9}>
              <Row gutter={12}>
                <ColLabel span={3}>{t('profile.level')}:</ColLabel>
                <Col span={21}>
                  <FormItemSelect name="level">
                    <SelectFloat
                      valueSelect={levelSelected}
                      dataSelect={LEVEL_LIST}
                      onChangeSelect={changeLevel}
                      autoComplete="false"
                    />
                  </FormItemSelect>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={12}>
            <ColLabel span={3}>{t('profile.comment')}</ColLabel>
            <Col span={21}>
              <FormItemTextArea
                rules={[
                  {
                    max: 500,
                    message: t('profile.errorMaxLengthComment'),
                  },
                ]}
                name="workContent"
              >
                <TextAreaCustom
                  autoSize={{
                    minRows: 3,
                    maxRows: 5,
                  }}
                />
              </FormItemTextArea>
            </Col>
          </Row>
        </Content>
      </FormCustom>
    </ModalFullScreen>
  );
};
ConfirmProfileInformation.propTypes = {
  onClose: PropTypes.func,
  data: PropTypes.object,
};

export default ConfirmProfileInformation;
