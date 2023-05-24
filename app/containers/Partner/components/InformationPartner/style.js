import styled from 'styled-components';
import { Col } from 'antd';

export const Container = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  gap: 20px;
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

export const ColCustom = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

export const StatusActive = styled(ColBold)`
  color: ${props => props.theme.colors.status.active};
`;

export const StatusInActive = styled(ColBold)`
  color: ${props => props.theme.colors.status.inActive};
`;
