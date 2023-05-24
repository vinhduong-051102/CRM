import styled from 'styled-components';
import { Select } from 'antd';

export const IconDashBoard = styled.img`
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  padding-top: 2px;
  min-width: auto !important;
`;

export const BodyContent = styled.div`
  margin-bottom: 12px;
`;
export const TitleBody = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const TitleTable = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 8px;
  // background-color: ${props => props.theme.colors.table.whiteGreen};
`;
export const SelectCustom = styled(Select)`
  .ant-select-selector {
    position: relative;
    background-color: #fff;
    border: hidden !important;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-select-selection-item {
    background: white;
  }
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    box-shadow: none;
  }
  .ant-select-selection-item {
    font-weight: 700;
    color: #212529;
    line-height: 30px;
    white-space: nowrap;
  }
  .ant-select-clear {
    position: absolute;
    top: 45%;
    right: 28px;
  }
`;

export const TextBold = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.colorText};
`;
export const Text = styled.span`
  color: ${props => props.theme.colors.colorText};
`;
export const TextBoldTable = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.theme.colors.colorText};
  text-align: center;
  display: flex;
  align-items: center;
`;
export const TextTitleTable = styled.span`
  color: ${props => props.theme.colors.colorLink};
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  font-weight: normal;
`;
export const ContentWrappercustom = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${props => (props.showAdvanceSearch ? 'calc(100% - 300px)' : '100%')};
  padding: 16px 20px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  transition: width 0.2s ease-in-out;
  overflow-y: scroll;
`;
export const ContainerTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;
