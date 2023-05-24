import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Content } from './styles';
import {
  OBJECT_SIGN_STATUS_NOT_TIME_TO_SIGN,
  OBJECT_SIGN_STATUS_REFUSE_SIGN,
  OBJECT_SIGN_STATUS_SIGNED,
  OBJECT_SIGN_STATUS_WAIT_SIGN,
} from '../../constantsProfile';
import { fdtfM3 } from '../../../../res/fdtf';

const RenderObjectSignOfDocument = ({ data }) => {
  const { t } = useTranslation();

  const mapTextWithStatusSign = status => {
    switch (status) {
      case OBJECT_SIGN_STATUS_NOT_TIME_TO_SIGN:
        return t('common.waitTimeToSign');
      case OBJECT_SIGN_STATUS_WAIT_SIGN:
        return t('common.waitSign');
      case OBJECT_SIGN_STATUS_SIGNED:
        return t('common.signed');
      case OBJECT_SIGN_STATUS_REFUSE_SIGN:
        return t('common.refuseSign');
      default:
        return t('common.waitTimeToSign');
    }
  };

  const mapTextWithStatusView = status => (status ? t('common.seen') : t('common.notSeen'));

  const renderTextStatus = item =>
    ` ${mapTextWithStatusSign(item.statusSign)}${
      item.statusSign !== OBJECT_SIGN_STATUS_SIGNED && item.statusSign !== OBJECT_SIGN_STATUS_REFUSE_SIGN
        ? ` - ${mapTextWithStatusView(item.statusView)}`
        : ''
    }`;

  const RenderToolTip = item => {
    if (item.statusSign === OBJECT_SIGN_STATUS_WAIT_SIGN && item.statusView) {
      return (
        <div>
          <div>
            {item.signerName} - {item.identityCode}
          </div>
          <div>
            {t('profile.status')}: {renderTextStatus(item)}
          </div>
          <div>
            {t('profile.viewDate')}: {fdtfM3(item.viewDate, 'm1b', 'm2e')}
          </div>
        </div>
      );
    }
    if (item.statusSign === OBJECT_SIGN_STATUS_SIGNED) {
      return (
        <div>
          <div>
            {item.signerName} - {item.identityCode}
          </div>
          <div>
            {t('profile.status')}: {renderTextStatus(item)}
          </div>
          <div>
            {t('profile.signForm')}: {item.typeSignName}
          </div>
          <div>
            {t('profile.viewSign')}: {fdtfM3(item.signDate, 'm1b', 'm2e')}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {data.map((item, index) => (
        <Tooltip mouseLeaveDelay={0} title={RenderToolTip(item)}>
          <Content sign={item.statusSign}>
            {data.length > 1 && `${index + 1}. `}
            {item.signerName}
            {` (${renderTextStatus(item)})`}
          </Content>
        </Tooltip>
      ))}
    </div>
  );
};
RenderObjectSignOfDocument.propTypes = {
  data: PropTypes.array,
};

export default RenderObjectSignOfDocument;
