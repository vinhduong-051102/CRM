import React from 'react';
import PropTypes from 'prop-types';
import CopyModal from '../../../../res/components/CopyPageSignModal';

const CopyPageSign = ({ onClose, /* userGuid, */ titlePageSign }) => {
  // const dispatch = useDispatch();
  const listdata = [];

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
      <CopyModal onClose={onClose} title={titlePageSign} dataHistory={listdata} />
    </div>
  );
};

CopyPageSign.propTypes = {
  onClose: PropTypes.func,
  // userGuid: PropTypes.string,
  titlePageSign: PropTypes.string,
};

export default CopyPageSign;
