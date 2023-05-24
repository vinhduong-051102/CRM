import React from 'react';
import PropTypes from 'prop-types';
import {
  StatusDeleted,
  StatusDone,
  StatusNewCreated,
  StatusRefuseApprove,
  StatusRefuseSign,
  StatusWaitApprove,
  StatusWaitSign,
} from '../InformationProfile/style';
import {
  STATUS_COMPLETE,
  STATUS_DELETED,
  STATUS_NEW_CREATE,
  STATUS_REFUSE_APPROVE,
  STATUS_REFUSE_SIGN,
  STATUS_WAIT_APPROVE,
  STATUS_WAIT_SIGN,
} from '../../constantsProfile';

const StatusText = ({ status, statusName }) => (
  <>
    {status === STATUS_WAIT_SIGN && <StatusWaitSign>{statusName}</StatusWaitSign>}
    {status === STATUS_WAIT_APPROVE && <StatusWaitApprove>{statusName}</StatusWaitApprove>}
    {status === STATUS_DELETED && <StatusDeleted>{statusName}</StatusDeleted>}
    {status === STATUS_COMPLETE && <StatusDone>{statusName}</StatusDone>}
    {status === STATUS_REFUSE_SIGN && <StatusRefuseSign>{statusName}</StatusRefuseSign>}
    {status === STATUS_REFUSE_APPROVE && <StatusRefuseApprove>{statusName}</StatusRefuseApprove>}
    {status === STATUS_NEW_CREATE && <StatusNewCreated>{statusName}</StatusNewCreated>}
  </>
);

StatusText.propTypes = {
  status: PropTypes.number,
  statusName: PropTypes.string,
};

export default StatusText;
