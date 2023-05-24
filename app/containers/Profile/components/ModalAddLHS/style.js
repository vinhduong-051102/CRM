import styled from 'styled-components';
import { Modal } from 'antd';

const ModalAddLHSCustom = styled(Modal)`}
  .ant-modal-content {
    border-radius: 12px;
    width: calc(100%);
    top: calc(20rem - 100px) !important;
  }

  .ant-modal-title {
    margin: 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 700;
    font-size: 18px;
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
    border-radius: 12px 12px 0 0;
  }
`;

const CustomFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px;
`;

export { ModalAddLHSCustom, CustomFooter };
