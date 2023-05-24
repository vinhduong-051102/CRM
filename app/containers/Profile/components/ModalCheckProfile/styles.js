import styled from 'styled-components';
import { Button, Form, Input, Modal } from 'antd';

const PUCheckProfile = styled(Modal)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw !important;
  height: 100vh !important;
  padding: 0;
  margin: 0;
  .ant-modal {
    max-width: unset;
    margin: unset;
  }

  .ant-modal-content {
    height: 100%;
    width: 100vw;
  }

  .ant-modal-centered::before {
    content: unset;
  }

  .ant-modal-title {
    margin: 0;
    color: #ffffff;
    font-weight: 600;
    font-size: 24px;
    line-height: 24.51px;
    word-wrap: break-word;
    text-align: center;
  }

  .ant-modal-body {
    padding-bottom: 12px;
    padding-top: 12px;
  }

  .ant-modal-header {
    border-bottom: none;
    background-color: #219653;
  }
`;

const ButtonFooter = styled(Button)`
  display: flex;
  height: 40px;
  align-items: center;
  border-radius: 12px;
  color: ${props => props.theme.primaryColor};
  justify-content: center;
  line-height: 19px;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 16px;
  &.ant-btn:hover,
  &.ant-btn:focus {
    color: ${props => props.theme.primaryColor};
  }
  :hover {
    -webkit-filter: drop-shadow(0px 0px 3px #000);
    filter: drop-shadow(0px 0px 3px #000);
  }
  &.ant-btn-primary,
  &.ant-btn {
    border-color: ${props => props.theme.primaryColor};
  }
`;

export const ButtonSave = styled(ButtonFooter)`
  background-color: ${props => props.theme.primaryColor} !important;
  color: ${props => props.theme.colors.white};

  &.ant-btn:hover,
  &.ant-btn:focus {
    color: ${props => props.theme.colors.white};
  }
`;

const SpanWarning = styled.div`
  color: red;
  margin-left: 2px;
`;

const ButtonTab = styled(Button)`
  width: 188px;
  height: 35px;
  size: 14px;
  font-weight: 600;
  text-align: left;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  &.ant-btn:hover,
  &.ant-btn:focus {
    color: white;
    background-color: #219653;
    border-color: #219653;
  }
  //:hover {
  //  -webkit-filter: drop-shadow(0px 0px 3px #000);
  //  filter: drop-shadow(0px 0px 3px #000);
  //}
  &.ant-btn-primary,
  &.ant-btn {
    background-color: #f4f4f4;
  }
`;

const InputText = styled(Input)`
  height: 80px;
  border-radius: 12px;

  &.ant-input {
    outline: none;
    padding-left: 10px;
    font-size: 1em;
    font-style: normal;
    box-sizing: border-box;
  }

  input.ant-input {
    color: #212529;

    ::placeholder {
      color: #212529;
    }

    ::-webkit-input-placeholder {
      /* Edge */
      color: #212529;
    }
  }

  &.ant-input:focus,
  &.ant-input-focused {
    box-shadow: none;
  }
`;

const CustomFormProfile = styled(Form)`
  margin-top: 12px;
  margin-bottom: 12px;
  width: 100%;
  .ant-form-item {
    margin-bottom: 0px;
  }
`;

const DivFootFullScreeModal = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 24px;
  right: 24px;
`;

export { PUCheckProfile, ButtonTab, InputText, CustomFormProfile, SpanWarning, DivFootFullScreeModal };
