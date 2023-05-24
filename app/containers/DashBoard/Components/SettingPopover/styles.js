import styled from 'styled-components';
import { Dropdown, Menu } from 'antd';

export const DropdownCustom = styled(Dropdown)`
  &.ant-dropdown-menu {
    padding: 24px !important;
  }
`;
export const MenuItemDropdown = styled(Menu.Item)`
  &.ant-dropdown-menu-item {
    padding: 5px 0;
  }
`;
export const MenuDropdown = styled(Menu)`
  &.ant-dropdown-menu {
    padding: 24px;
  }
`;
