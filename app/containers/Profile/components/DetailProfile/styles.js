import styled from 'styled-components';
import { Modal, Tabs, Input, Form } from 'antd';

export const CustomModalWithoutFooter = styled(Modal)`
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
  .ant-modal-footer {
    padding-top: 16px;
    padding-bottom: 20px;
    border-top: none;
  }

  .ant-modal-close-x {
    cursor: pointer;
    width: 45px;
    height: 45px;
    line-height: 45px;
    color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:focus {
    outline: none;
  }
`;

export const TabsCustom = styled(Tabs)`
  .ant-tabs-tab {
    width: 250px !important;
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
  }
  .ant-tabs-tab-active {
    background-color: #219653 !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #fff !important;
  }
  .ant-tabs-nav {
    margin-bottom: 0;
  }
`;

export const ModalTitle = styled.div`
  height: 45px;
  background: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 11px 11px 0 0;
  display: flex;
  position: relative;
  padding: 14px 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 1.14285em;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
  justify-content: center;
`;

export const DetailProfileContainer = styled.div`
  position: relative;
  padding: 20px;
`;

export const SpanCustom = styled.span`
  b {
    margin-left: 10px;
    span:nth-child(2) {
      margin-left: 7px;
    }
  }
`;

export const SignButton = styled.button`
  background-color: #219653;
  border: none;
  border-radius: 10px;
  padding: 8px 10px;
  font-weight: bolder;
  color: #fff;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const RefuseReasonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
`;

export const SaveButton = styled.button`
  background-color: #219653;
  border: none;
  height: 40px;
  border-radius: 10px;
  padding: 8px 16px;
  font-weight: bolder;
  color: #fff;
`;

export const InputCustom = styled(Input)`
  width: 100%;
  border-radius: 7px;
`;

export const FormCustom = styled(Form)`
  width: 80%;
  .ant-row {
    flex-flow: column !important;
  }
`;

export const ResultWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  margin-top: 10px;
  gap: 60px;
`;

export const ResultSuccess = styled.div`
  padding: 20px 10px;
  background-color: #e6faf0;
  color: #219653;
  border-radius: 7px;
`;

export const ResultRefuse = styled.div`
  padding: 20px 10px;
  background-color: #facdcc;
  color: #e50500;
  border-radius: 7px;
`;

export const DetailInfoSuccess = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SpanGridCustom = styled.span`
  display: inline-grid;
  grid-template-columns: 100px 1fr;
`;

export const DetailInfoRefuse = styled.div`
  display: grid;
  grid-template-columns: 100%;
  div:nth-child(1) {
    & > span:nth-child(2) {
      margin: 0 150px;
    }
  }
`;

export const FormItemRefuse = styled(Form.Item)`
  .ant-form-item-explain-error {
    padding-bottom: 20px !important;
  }
`;
