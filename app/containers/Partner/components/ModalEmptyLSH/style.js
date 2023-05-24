import styled from 'styled-components';
import { Modal } from 'antd';

const ModalAlertCustom = styled(Modal)`
  .ant-modal-root .ant-modal-header {
    background-color: ${props => props.theme.colors.modal.background};
  }
  [class*='ant-modal-header'] {
    justify-content: flex-start !important;
  }
  .ant-modal-content {
    border-radius: 12px;
    width: calc(100%);
  }
  .ant-modal-body {
    padding: 0;
  }

  .ant-modal-close-x {
    cursor: pointer;
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: ${props => props.theme.colors.white};
    margin-top: 4px;
    margin-right: 6px;
  }
`;

const DivFooter = styled.div`
  justify-content: right;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 30px;
`;

export { ModalAlertCustom, DivFooter };
