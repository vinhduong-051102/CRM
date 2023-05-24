import styled from 'styled-components';
import { Input } from 'antd';

const { TextArea } = Input;

export const Content = styled.div`
  margin: 35px 20px 10px 20px;
`;

export const Note = styled.div`
  margin-top: 24px;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

export const InputCustom = styled(Input)`
  border-radius: 8px;
`;

export const TextAreaCustom = styled(TextArea)`
  border-radius: 8px;
`;
