import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Col, Form, Row, Space } from 'antd';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { ColBold, ColCustom, ColIcon, Container, FormCustom, ItemContainer, TextGetTaxCode } from './style';
import {
  CREATE_DATE,
  DEADLINE_SIGN,
  LIST_SIGNER_TEXT,
  PROFILE_CODE,
  PROFILE_DEADLINE,
  PROFILE_NAME,
  PROFILE_SAMPLE_CODE,
  PROFILE_SAMPLE_NAME,
  PROFILE_TYPE,
  PROFILE_VALUE,
  STATUS,
  STATUS_ID,
  STATUS_NAME,
  USER_NAME_CREATED,
} from '../../constantsProfile';
import Table from '../../../../res/components/Table';
import { formatDateTime } from '../../../../res/commonFunction';
import ButtonFunctionList from '../../../../res/components/TableOtherView/ButtonFunctionList';
import StatusText from '../StatusText';
import * as actions from '../../actionsProfile';
import * as selectors from '../../selectorsProfile';
import ModalFullScreen from '../../../../res/components/ModalFullScreen';
import ButtonCircle from '../../../../res/components/ButtonCircle';
import RenderObjectSignOfDocument from '../RenderObjectSignOfDocument';

const InformationProfile = ({ onClose, onEdit, id, onShowHistory, onDownload, onCopy, onDocumentEdit }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const detailProfile = useSelector(selectors.selectProfileDetail());
  const [listDocument, setListDocument] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  const columns = [
    {
      title: t('common.stt'),
      width: 70,
      align: 'center',
      render: (text, record, index) => <div>{index + 1}</div>,
    },
    {
      title: t('profile.documentName'),
      dataIndex: 'profileItemName',
      key: 'profileItemName',
      render: val => <div>{val}</div>,
    },
    {
      title: t('profile.objectSign'),
      dataIndex: 'data',
      key: 'data',
      render: value => <RenderObjectSignOfDocument data={value} />,
    },
    {
      title: t('profile.operation'),
      dataIndex: 'operation',
      width: 130,
      render: () => (
        <Space style={{ marginLeft: '-5px' }}>
          <ButtonCircle title={t('profile.viewProfile')} iconName="eye-green" onClick={() => {}} enable />
          <ButtonCircle title={t('profile.tooltipExportDocument')} iconName="download" onClick={() => {}} enable />
        </Space>
      ),
    },
  ];

  useEffect(
    () => () => {
      dispatch(actions.resetInformation());
    },
    [],
  );

  useEffect(() => {
    if (id) {
      dispatch(actions.getProfileDetail(id));
    }
  }, [id]);

  useEffect(() => {
    if (detailProfile[LIST_SIGNER_TEXT] && detailProfile[LIST_SIGNER_TEXT].length !== 0) {
      // TienNAb: nhom cac doi tuong ky cung mot van ban
      const list = _.groupBy(detailProfile[LIST_SIGNER_TEXT], 'profileItemGuid');
      const arr = _.map(list, value => ({
        profileItemGuid: value[0].profileItemGuid,
        profileItemName: value[0].profileItemName,
        data: value.map(item => _.omit(item, ['profileItemGuid', 'profileItemName'])),
      }));

      setListDocument([...arr]);
    }
  }, [detailProfile]);

  const getInformationApprove = () => {
    setSeeMore(true);
  };
  const collapseInformationApprove = () => {
    setSeeMore(false);
  };

  return (
    <ModalFullScreen
      title={t('profile.detailInformationProfile')}
      width={1100}
      isDisableSave
      isButtonLeft={detailProfile.buttonShow && (detailProfile.buttonShow.recall || detailProfile.buttonShow.restore)}
      onClickButtonLeft={() => {}}
      isStatusProfile={detailProfile[STATUS]}
      onClickCancel={onClose}
    >
      <FormCustom form={form}>
        <Container>
          <ItemContainer>
            <Row>
              <ColBold style={{ display: 'flex', alignItems: 'center' }} span={6}>
                {t('profile.commonInformationProfile')}
              </ColBold>
              <ColIcon span={18}>
                <ButtonFunctionList
                  titleEdit={detailProfile.buttonShow && detailProfile.buttonShow.edit ? t('profile.tooltipEdit') : ''}
                  titleCopy={detailProfile.buttonShow && detailProfile.buttonShow.copy ? t('profile.tooltipCopy') : ''}
                  titleDownload={
                    detailProfile.buttonShow && detailProfile.buttonShow.download ? t('profile.tooltipExport') : ''
                  }
                  titleHistory={
                    detailProfile.buttonShow && detailProfile.buttonShow.viewHistory ? t('profile.tooltipHistory') : ''
                  }
                  titleSign={
                    detailProfile.buttonShow && detailProfile.buttonShow.sign ? t('profile.tooltipDocumentEdit') : ''
                  }
                  onClickEdit={onEdit}
                  onClickCopy={onCopy}
                  onClickHistory={onShowHistory}
                  onClickDownload={onDownload}
                  onClickSign={onDocumentEdit}
                />
              </ColIcon>
            </Row>
            <Row>
              <ColCustom span={12}>
                <Row>
                  <Col span={6}>{t('profile.profileCode')}:</Col>
                  <ColBold span={16}>{detailProfile[PROFILE_CODE]}</ColBold>
                </Row>
                <Row>
                  <Col span={6}>{t('profile.sampleProfile')}:</Col>
                  <ColBold span={16}>
                    {detailProfile[PROFILE_SAMPLE_CODE]} - {detailProfile[PROFILE_SAMPLE_NAME]}
                  </ColBold>
                </Row>
                <Row>
                  <Col span={6}>{t('profile.profileValue')}:</Col>
                  <ColBold span={16}>{`${detailProfile[PROFILE_VALUE]}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND</ColBold>
                </Row>
                <Row>
                  <Col span={6}>{t('profile.deadlineProfile')}:</Col>
                  <ColBold span={16}>
                    {detailProfile[PROFILE_DEADLINE]
                      ? formatDateTime(detailProfile[PROFILE_DEADLINE])
                      : t('common.noDeadline')}
                  </ColBold>
                </Row>
                <Row>
                  <Col span={6}>{t('profile.createDate')}:</Col>
                  <ColBold span={16}>{formatDateTime(detailProfile[CREATE_DATE])}</ColBold>
                </Row>
              </ColCustom>
              <ColCustom span={12}>
                <Row>
                  <Col span={6}>{t('profile.profileName')}:</Col>
                  <ColBold span={18}>{detailProfile[PROFILE_NAME]}</ColBold>
                </Row>
                <Row>
                  <Col span={6}>{t('profile.profileType')}</Col>
                  <ColBold span={18}>{detailProfile[PROFILE_TYPE]}</ColBold>
                </Row>
                <Row>
                  <Col span={6}>{t('profile.deadlineSign')}:</Col>
                  <ColBold span={18}>
                    {detailProfile[DEADLINE_SIGN] ? formatDateTime(detailProfile[DEADLINE_SIGN]) : t('common.noDeadline')}
                  </ColBold>
                </Row>
                <Row>
                  <Col span={6}>{t('profile.creator')}:</Col>
                  <ColBold span={18}>{detailProfile[USER_NAME_CREATED]}</ColBold>
                </Row>
                <Row>
                  <Col span={6}>{t('profile.status')}:</Col>
                  <StatusText span={18} status={detailProfile[STATUS_ID]} statusName={detailProfile[STATUS_NAME]} />
                </Row>
              </ColCustom>
            </Row>
          </ItemContainer>
          <ItemContainer>
            <Row>
              <ColBold span={24}>{t('profile.listDocument')}:</ColBold>
            </Row>
            <div style={!listDocument || listDocument.length === 0 ? { height: '225px' } : null}>
              <Table
                isTablePopup
                columns={columns}
                data={listDocument}
                isLoading={false}
                pagination={false}
                minWidth={1000}
                isExpand
              />
            </div>
          </ItemContainer>
          <ItemContainer>
            {detailProfile.htmlLogIncidentLoadMore && (
              <>
                <Row>
                  <ColBold span={24}>{t('profile.approveInformationProfile')}:</ColBold>
                </Row>
                {detailProfile.htmlLogIncident ? (
                  <>
                    {seeMore ? (
                      <div dangerouslySetInnerHTML={{ __html: detailProfile.htmlLogIncidentLoadMore }} />
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: detailProfile.htmlLogIncident }} />
                    )}
                    <Row>
                      {!seeMore ? (
                        <TextGetTaxCode onClick={getInformationApprove}>{t('profile.anotherIdea')}</TextGetTaxCode>
                      ) : (
                        <TextGetTaxCode onClick={collapseInformationApprove}>{t('profile.collapse')}</TextGetTaxCode>
                      )}
                    </Row>
                  </>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: detailProfile.htmlLogIncidentLoadMore }} />
                )}
              </>
            )}
          </ItemContainer>
        </Container>
      </FormCustom>
    </ModalFullScreen>
  );
};

InformationProfile.propTypes = {
  onClose: PropTypes.func,
  onEdit: PropTypes.func,
  id: PropTypes.string,
  onShowHistory: PropTypes.func,
  onDownload: PropTypes.func,
  onCopy: PropTypes.func,
  onDocumentEdit: PropTypes.func,
};

export default InformationProfile;
