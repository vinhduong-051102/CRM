import styled from 'styled-components';
import { Checkbox, DatePicker, InputNumber } from 'antd';

const InputNumberCustom = styled(InputNumber)`
  width: 50%;
  border-radius: 12px;
  height: 38px;
  .ant-input-number-handler-up {
    border-top-right-radius: 12px;
  }

  .ant-input-number-handler-wrap {
    border-radius: 0 12px 12px 0;
  }
`;

const CustomPicker = styled(DatePicker)`
  width: 50%;
  border-radius: 12px;
  height: 38px;
`;

const CustomCheckBox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${props => props.theme.primaryColor};
    border-color: ${props => props.theme.primaryColor};
  }
`;

export { InputNumberCustom, CustomPicker, CustomCheckBox };
