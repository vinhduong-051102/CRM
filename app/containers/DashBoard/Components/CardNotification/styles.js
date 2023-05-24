import styled from 'styled-components';
import { Col, List } from 'antd';

export const CardNotiCustom = styled.div`
  background-image: url(${props => props.img});
  height: 128px;
  position: relative;
  border-radius: 16px;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  cursor: move;
`;
export const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: #000;
  opacity: 0.7;
  border-radius: 16px;
`;

export const CardBody = styled.div`
  border-radius: 16px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  padding: 16px;
`;
export const HeaderContent = styled.div`
  margin-bottom: 12px;
`;
export const ColIcon = styled(Col)`
  font-weight: bold;
  display: flex;
  gap: 15px;
`;
export const ColCenter = styled(Col)`
  color: white;
  align-items: center;
  display: flex;
  gap: 15px;
`;
export const ColBold = styled(Col)`
  font-weight: bold;
  color: ${props => props.theme.colors.white};
`;
export const ListCustom = styled(List)`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(309px, 1fr));
  transition: all 2s;
  width: 100%;
`;
export const IconCard = styled.img`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  min-width: auto !important;
`;
export const IconButton = styled.img`
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  min-width: auto !important;
  margin: 0 8px;
`;
export const IconCheckBox = styled.img`
  display: flex;
  align-items: center;
  width: 14px;
  height: 10px;
  min-width: auto !important;
`;
export const IconBox = styled.div`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  min-width: auto !important;
`;
export const IconClose = styled.img`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  min-width: auto !important;
  margin: 0 8px;
`;
