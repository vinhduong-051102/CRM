import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HistoryModal from '../../../../res/components/HistoryModal';
import * as selectors from '../../selectorsPartner';
import * as actions from '../../actionsPartner';

const HistoryPartner = ({ onClose, userGuid, titleHistory }) => {
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(actions.resetHistory());
    },
    [],
  );

  useEffect(() => {
    if (userGuid) {
      const body = {
        objectGuid: userGuid,
        pageNumber: 50,
        pageSize: 10,
      };
      dispatch(actions.getHistory(body));
    }
  }, [userGuid]);

  const listHistory = useSelector(selectors.selectHistory());
  return (
    <div>
      <HistoryModal onClose={onClose} title={titleHistory} dataHistory={listHistory} />
    </div>
  );
};

HistoryPartner.propTypes = {
  onClose: PropTypes.func,
  userGuid: PropTypes.string,
  titleHistory: PropTypes.string,
};

export default HistoryPartner;
