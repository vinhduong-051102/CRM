import styled from 'styled-components';
import { Form, Radio, Row, Col, Select } from 'antd';

export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 23px 26px 0 20px;
`;

export const FormItemRadio = styled(Form.Item)`
  margin-bottom: 20px;
  .ant-form-item-label {
    label {
      line-height: 19px;
      font-size: 14px;
      font-weight: 700;
      color: ${props => props.theme.colors.colorText};
      ::after {
        margin-top: 1px;
      }
    }
  }
  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    content: '';
  }
  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::after {
    content: '';
  }
`;

export const RadioGroup = styled(Radio.Group)`
  margin-left: 65px;
`;

export const RadioCustom = styled(Radio)`
  margin-right: 50px;
`;

export const TextGetTaxCode = styled.div`
  cursor: pointer;
  line-height: 19px;
  font-weight: 700;
  font-size: 14px;
  font-style: normal;
  color: ${props => props.theme.primaryColor};
`;

export const LabelCustom = styled.span`
  line-height: 19px;
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.theme.colors.colorText};
  align-self: center;
`;

export const DivListContact = styled(Col)`
  display: flex;
  justify-content: flex-end;
`;

export const DivPlus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => (props.disable ? props.theme.colors.disableColor : props.theme.primaryColor)};
  border: 1px solid ${props => (props.disable ? props.theme.colors.disableColor : props.theme.primaryColor)};
  width: 35px;
  height: 33px;
  color: white;
  font-size: 16px;
  border-radius: 6px;

  :hover {
    -webkit-filter: drop-shadow(0px 0px 3px #000);
    filter: drop-shadow(0px 0px 3px #000);
  }
`;

export const RowStyle = styled(Row)`
  margin-bottom: 9px;
`;

export const SpanStart = styled.span`
  color: ${props => props.theme.colors.red};
  font-size: 18px !important;
`;

export const IconView = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const SelectStyle = styled(Select)`
  width: 100%;
  height: 40px;

  .ant-select-selector {
    border-radius: 8px !important;
  }

  &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px;
    border-radius: 8px;
  }

  .ant-select-selection-placeholder {
    line-height: 40px !important;
  }

  .ant-select-selection-item {
    line-height: 40px !important;
  }
  &.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    font-weight: 600;
    background: rgba(33, 37, 41, 0.3);
  }
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: none;
  }

  &.ant-select-multiple.ant-select-lg .ant-select-selection-item {
    border-radius: 4px;
    display: flex;
    align-items: center;
  }
`;

export const LabelNormal = styled.label`
  position: absolute;
  left: 10px;
  top: 9px;
  padding-left: 2px;
  height: 14px;
  color: #8a929a;
`;

export const LabelFloat = styled.label`
  position: absolute;
  left: 10px;
  top: -12px;
  padding: 0 3px 0 3px;
  background-color: #ffffff;
  width: auto;
  height: auto;
  font-size: 12px !important;
  color: #000000;
  font-weight: normal;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 15px;
`;

export const TableContent = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
