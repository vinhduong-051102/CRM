import styled from 'styled-components';
import { Form, Select } from 'antd';

const FormCustomHS = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 23px 7px 0 20px;
  padding-right: 13px;
  overflow-y: overlay;
  max-height: 700px;

  .ant-form-item-label {
    text-align: left;
  }

  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    content: '';
  }

  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::after {
    color: red;
    content: '*';
  }
`;

const CustomSelectHS = styled(Select)`
  width: 100%;
  height: 40px;
  &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px;
    border-radius: 12px;
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
`;

export { FormCustomHS, CustomSelectHS };
