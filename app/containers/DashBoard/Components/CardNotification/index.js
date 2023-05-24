import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import { CardBody, CardContent, CardNotiCustom, ColBold, ColCenter, ColIcon, IconCard } from './styles';

const CardNotification = ({
  imgBackGround,
  iconTitle,
  titleIcon,
  onValue,
  onValue1,
  titleContent,
  titleContent1,
  titleContent2,
  titleTime,
  lateTime,
}) => (
  <CardNotiCustom img={imgBackGround}>
    <CardContent />
    <CardBody>
      <Row>
        <ColIcon span={6}>
          <IconCard src={iconTitle} />
        </ColIcon>
        <ColCenter span={18}>{titleIcon}</ColCenter>
      </Row>
      {onValue && (
        <Row>
          <ColBold>{onValue}</ColBold>
        </Row>
      )}
      {onValue1 && (
        <Row>
          <ColBold>{onValue1}</ColBold>
        </Row>
      )}

      {titleTime && (
        <Row>
          <ColCenter span={14}>
            {titleTime}:<ColBold>8h20</ColBold>
          </ColCenter>
          {lateTime && (
            <ColCenter span={10}>
              {lateTime}:<ColBold>20</ColBold>
            </ColCenter>
          )}
        </Row>
      )}
      {titleContent && (
        <Row>
          <ColCenter span={24}>
            {titleContent}: <ColBold>okeokeo</ColBold>
          </ColCenter>
        </Row>
      )}
      {titleContent1 && (
        <Row>
          <ColCenter>
            {titleContent1}: <ColBold>okeokeo</ColBold>
          </ColCenter>
        </Row>
      )}
      {titleContent2 && (
        <Row>
          <ColCenter span={24}>
            {titleContent2}: <ColBold>okeokeo</ColBold>
          </ColCenter>
        </Row>
      )}
    </CardBody>
  </CardNotiCustom>
);

CardNotification.propTypes = {
  imgBackGround: PropTypes.string,
  titleIcon: PropTypes.string,
  titleContent: PropTypes.string,
  titleContent2: PropTypes.string,
  titleContent1: PropTypes.string,
  titleTime: PropTypes.string,
  iconTitle: PropTypes.string,
  lateTime: PropTypes.string,
  onValue: PropTypes.string,
  onValue1: PropTypes.string,
};
export default CardNotification;
