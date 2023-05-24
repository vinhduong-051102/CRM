import styled from 'styled-components';
import { Form } from 'antd';
import InputSearch from '../../../../res/components/InputCustom';

export const FormItemSearch = styled(Form.Item)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputSearchCustom = styled(InputSearch)`
  width: 80% !important;
`;

export const DivInputSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;
