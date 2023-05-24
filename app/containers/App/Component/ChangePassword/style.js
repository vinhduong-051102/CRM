import styled from 'styled-components';
import { Button, Form, Modal } from 'antd';

const ChangePasswordModal = styled(Modal)`
  .ant-modal-close-x {
    color: white;
  }

  .ant-modal-content {
    margin: auto;
    border-radius: 12px;
  }

  .ant-modal-header {
    padding: 16px 24px;
    background: #219653;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }

  .ant-modal-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    font-family: Open Sans;
    color: white;
  }

  .ant-modal-body {
    padding: 24px 24px 0px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
  }

  .ant-modal-footer {
    padding: 0px 20px 20px;
    border-top: 0px;
  }

  .ant-table-tbody > tr > td {
    transition: none;
    height: 45px;
  }

  .ant-modal-footer {
    text-align: center;
  }
`;

const ButtonClose = styled(Button)`
  border-color: #219653;
  background-color: #ffffff;
  color: #219653;
  border-radius: 12px;
  width: 102px;
  height: 40px;
  font-weight: 600;
  margin-right: 11px;
`;

const ButtonSubmit = styled(Button)`
  background-color: #219653;
  color: #ffffff;
  border-radius: 12px;
  width: 132px;
  height: 40px;
  font-weight: 600;
`;

const NoteMessage = styled.div`
  padding-top: 10px;
  size: 14px;
  font-weight: 400;
`;

const CustomForm = styled(Form)`
  .ant-form-item {
    margin: 0 0 32px;
  }
`;

export { ChangePasswordModal, ButtonClose, ButtonSubmit, NoteMessage, CustomForm };
