import styled from 'styled-components';
import { Col, Form, Input } from 'antd';

const { TextArea } = Input;

export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 22px;
  .input-time .ant-form-item-explain-connected {
    width: max-content;
  }
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 15px;
`;

export const FormItemRadio = styled(Form.Item)`
  margin-bottom: 0 !important;
`;

export const FormItemSelect = styled(Form.Item)`
  label {
    margin-top: 5px;
  }
`;
export const FormItemTextArea = styled(Form.Item)`
  .ant-form-item-label {
    display: flex !important;
    align-items: center !important;
  }
  label {
    margin-right: 32px;
  }
`;
export const Content = styled.div`
  padding: 16px 12px;
  background: #f4f4f4;
  border-radius: 12px;
`;

export const Note = styled.div`
  margin-top: 11px;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

export const InputCustom = styled(Input)`
  border-radius: 8px;
  height: 40px;
`;

export const TextAreaCustom = styled(TextArea)`
  border-radius: 8px;
`;

export const ColLabel = styled(Col)`
  display: flex;
  align-items: center;
  margin-top: -20px;
`;
