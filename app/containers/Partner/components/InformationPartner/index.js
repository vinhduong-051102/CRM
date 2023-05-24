import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import CustomModal from '../../../../res/components/CustomModal';
import { ColBold, ColCustom, ColIcon, Container, StatusActive, StatusInActive } from './style';
import * as actions from '../../actionsPartner';
import * as selectors from '../../selectorsPartner';
import {
  ACTIVE_NAME,
  ADDRESS,
  CODE,
  CONTACT_PERSON,
  CREATE_DATE,
  EMAIL,
  FULL_NAME,
  IS_ACTIVE,
  NAME,
  NOTE,
  PARTNER_TYPE_NAME,
  PHONE,
  PHONE_NUMBER,
  USER_CREATE,
} from '../../constantsPartner';
import { defaultTheme } from '../../../../res/themes/defaultTheme';
import { formatDateTime } from '../../../../res/commonFunction';
import Table from '../../../../res/components/Table';
import ButtonFunctionList from '../../../../res/components/TableOtherView/ButtonFunctionList';

const InformationPartner = ({ onClose, idPartner, onEdit, onShowHistory }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const detailPartner = useSelector(selectors.selectDetailPartner());
  const [listContact, setListContact] = useState([]);
  const columns = [
    {
      title: t('common.stt'),
      width: 90,
      align: 'center',
      render: (text, record, index) => <div>{index + 1}</div>,
    },
    {
      title: t('partner.fullName'),
      dataIndex: FULL_NAME,
      width: '15%',
      render: val => <div>{val}</div>,
    },
    {
      title: t('partner.phone'),
      dataIndex: PHONE_NUMBER,
      width: '12%',
      render: text => <div dangerouslySetInnerHTML={{ __html: text }} />,
    },
    {
      title: t('partner.email'),
      dataIndex: EMAIL,
      width: '25%',
      render: text => <div dangerouslySetInnerHTML={{ __html: text }} />,
    },
    {
      title: t('partner.address'),
      dataIndex: ADDRESS,
      width: '25%',
      render: val => <div>{val}</div>,
    },
    {
      title: t('partner.note'),
      dataIndex: NOTE,
      width: '15%',
      render: val => <div>{val}</div>,
    },
  ];

  useEffect(
    () => () => {
      dispatch(actions.resetInfo());
    },
    [],
  );

  useEffect(() => {
    if (idPartner) {
      dispatch(actions.getDetailPartner(idPartner));
    }
  }, [idPartner]);

  useEffect(() => {
    if (detailPartner) {
      if (detailPartner[CONTACT_PERSON] && detailPartner[CONTACT_PERSON].length !== 0) {
        setListContact(
          detailPartner[CONTACT_PERSON].map(item => ({
            [FULL_NAME]: item[FULL_NAME],
            [PHONE_NUMBER]: item[PHONE_NUMBER] ? item[PHONE_NUMBER].replace(',', '</br>') : item[PHONE_NUMBER],
            [EMAIL]: item[EMAIL] ? item[EMAIL].replace(',', '</br>') : item[EMAIL],
            [ADDRESS]: item[ADDRESS],
            [NOTE]: item[NOTE],
          })),
        );
      }
    }
  }, [detailPartner]);

  return (
    <CustomModal title={t('partner.informationPartner')} width={1100} isModalInformation onClickCancel={onClose}>
      <Container>
        <Row>
          <ColCustom span={8}>
            <Row>
              <Col span={6}>{t('partner.typePartner')}:</Col>
              <ColBold span={16}>{detailPartner[PARTNER_TYPE_NAME]}</ColBold>
            </Row>
            <Row>
              <Col span={6}>{t('partner.taxCode')}:</Col>
              <ColBold span={16}>{detailPartner[CODE]}</ColBold>
            </Row>
            <Row>
              <Col span={6}>{t('partner.phone')}:</Col>
              <ColBold span={16}>{detailPartner[PHONE]}</ColBold>
            </Row>
            <Row>
              <Col span={6}>{t('partner.userCreate')}:</Col>
              <ColBold span={16}>{detailPartner[USER_CREATE]}</ColBold>
            </Row>
          </ColCustom>
          <ColCustom span={16}>
            <Row style={{ marginBottom: '-14px' }}>
              <Col span={3}>{t('partner.createDate')}:</Col>
              <ColBold span={18}>{formatDateTime(detailPartner[CREATE_DATE])}</ColBold>
              <ColIcon span={3}>
                <ButtonFunctionList
                  titleEdit={t('partner.tooltipEdit')}
                  titleHistory={t('partner.tooltipHistory')}
                  onClickEdit={onEdit}
                  onClickHistory={onShowHistory}
                />
              </ColIcon>
            </Row>
            <Row>
              <Col span={3}>{`${t('partner.name')} ${String(detailPartner[PARTNER_TYPE_NAME]).toLowerCase()}`}:</Col>
              <ColBold span={21}>{detailPartner[NAME]}</ColBold>
            </Row>
            <Row>
              <Col span={3}>{t('partner.email')}:</Col>
              <ColBold span={21}>{detailPartner[EMAIL]}</ColBold>
            </Row>
            <Row>
              <Col span={3}>{t('partner.address')}:</Col>
              <ColBold span={21}>{detailPartner[ADDRESS]}</ColBold>
            </Row>
          </ColCustom>
        </Row>
        {detailPartner[PARTNER_TYPE_NAME] === t('partner.individual') ? null : (
          <>
            <Row>
              <ColBold span={24}>{t('partner.listContact')}:</ColBold>
            </Row>
            <div
              style={{
                height: '280px',
              }}
            >
              <Table
                columns={columns}
                data={listContact}
                isLoading={false}
                pagination={false}
                minWidth={1000}
                headerBackgroundColor={defaultTheme.colors.primaryColor}
                isExpand
              />
            </div>
          </>
        )}
        <Row>
          <Col span={2}>{t('partner.status')}:</Col>
          {detailPartner[IS_ACTIVE] ? (
            <StatusActive span={22}>{detailPartner[ACTIVE_NAME]}</StatusActive>
          ) : (
            <StatusInActive span={22}>{detailPartner[ACTIVE_NAME]}</StatusInActive>
          )}
        </Row>
      </Container>
    </CustomModal>
  );
};

InformationPartner.propTypes = {
  onClose: PropTypes.func,
  idPartner: PropTypes.string,
  onEdit: PropTypes.func,
  onShowHistory: PropTypes.func,
};

export default InformationPartner;
