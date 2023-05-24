import styled from 'styled-components';
import { Col } from 'antd';

export const Container = styled.div`
  display: flex;
  margin: 16px 7px 0 20px;
  padding-right: 13px;
  overflow-y: overlay;
  flex-direction: column;
  gap: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ColIcon = styled(Col)`
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

export const ColBold = styled(Col)`
  font-weight: bold;
  color: ${props => props.theme.colors.colorText};
`;
