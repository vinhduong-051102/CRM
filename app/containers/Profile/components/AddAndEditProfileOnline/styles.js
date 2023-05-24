import styled from 'styled-components';
import { Form } from 'antd';

export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`;

export const Content = styled.div`
  padding: 16px 12px 0;
  background: #f4f4f4;
  border-radius: 12px;
`;

export const ProfileTypeContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ButtonAdd = styled.img`
  display: flex;
`;
export const DivPlus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.primaryColor};
  margin-left: 8px;
  margin-top: 6px;
  color: white;
  font-size: 16px;
  border-radius: 6px;

  :hover {
    -webkit-filter: drop-shadow(0px 0px 3px #000);
    filter: drop-shadow(0px 0px 3px #000);
  }
`;

export const RadioLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RadioLayoutItem = styled.div``;

export const NoInformation = styled.div`
  color: #e50500;
  font-weight: 400;
  line-height: 19px;
  font-size: 14px;
`;
