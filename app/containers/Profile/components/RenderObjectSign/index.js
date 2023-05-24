import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { Content } from './styles';

const RenderObjectSign = ({ data }) => (
  <div>
    {data.map((item, index) => (
      <Tooltip mouseLeaveDelay={0} title={item}>
        <Content>
          {data.length > 1 && `${index + 1}. `}
          {item}
        </Content>
      </Tooltip>
    ))}
  </div>
);
RenderObjectSign.propTypes = {
  data: PropTypes.array,
};

export default RenderObjectSign;
