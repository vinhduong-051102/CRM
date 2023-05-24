import React from 'react';
import PropTypes from 'prop-types';
import HistoryModal from '../../../../res/components/HistoryModal';

const HistoryProfile = ({ onClose /* , userGuid */, titleHistory }) => {
  // const dispatch = useDispatch();
  const listHistory = [];

  // useEffect(
  //   () => () => {
  //     dispatch(actions.resetHistory());
  //   },
  //   [],
  // );

  // useEffect(() => {
  //   if (userGuid) {
  //     const body = {
  //       objectGuid: userGuid,
  //       pageNumber: 50,
  //       pageSize: 10,
  //     };
  //     dispatch(actions.getHistory(body));
  //   }
  // }, [userGuid]);

  // const listHistory = useSelector(selectors.selectHistory());
  return (
    <div>
      <HistoryModal onClose={onClose} title={titleHistory} dataHistory={listHistory} />
    </div>
  );
};

HistoryProfile.propTypes = {
  onClose: PropTypes.func,
  // userGuid: PropTypes.string,
  titleHistory: PropTypes.string,
};

export default HistoryProfile;
