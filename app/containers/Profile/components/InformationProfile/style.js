import styled from 'styled-components';
import { Col, Form } from 'antd';

export const Container = styled.div`
  display: flex;
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
export const ColCenter = styled(Col)`
  display: flex;
  align-items: center;
`;
export const TextUrl = styled.div`
  align-items: center;
  width: 500px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media (max-width: 720px) {
    width: 400px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  @media (max-width: 500px) {
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
export const ColBoldCenter = styled(Col)`
  font-weight: bold;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.colorText};
`;
export const ColBold = styled(Col)`
  font-weight: bold;
  color: ${props => props.theme.colors.colorText};
`;

export const StatusWaitSign = styled(ColBold)`
  color: ${props => props.theme.colors.status.waitSign};
`;
export const StatusWaitApprove = styled(ColBold)`
  color: ${props => props.theme.colors.status.waitApprove};
`;
export const StatusDeleted = styled(ColBold)`
  color: ${props => props.theme.colors.status.deleted};
`;
export const StatusDone = styled(ColBold)`
  color: ${props => props.theme.colors.status.complete};
`;
export const StatusRefuseSign = styled(ColBold)`
  color: ${props => props.theme.colors.status.refuseSign};
`;
export const StatusRefuseApprove = styled(ColBold)`
  color: ${props => props.theme.colors.status.refuseApprove};
`;
export const StatusNewCreated = styled(ColBold)`
  color: ${props => props.theme.colors.status.newCreate};
`;
export const ColCustom = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

export const TextGetTaxCode = styled.div`
  cursor: pointer;
  line-height: 19px;
  font-weight: 700;
  font-size: 14px;
  font-style: normal;
  padding-left: 36px;
`;
export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 22px;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${props => props.theme.colors.scrollbarColor};
  }
`;
