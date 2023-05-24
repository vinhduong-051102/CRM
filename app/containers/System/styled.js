import styled from 'styled-components';
import { Tree } from 'antd';

const CustomTree = styled(Tree)`
  font-size: 14px;
  font-weight: 600;
  .ant-tree ant-tree-icon-hide > .ant-tree-treenode {
    display: none !important;
  }

  .ant-tree-node-content-wrapper:hover {
    background-color: #ffffff !important;
  }

  .listButton {
    display: none;
  }

  .ant-tree-list-holder-inner {
    border: solid 1px #c5ced9;
  }

  .ant-tree-treenode {
    position: relative !important;
    height: 45px;
    width: 100%;
    border-bottom: solid 1px #c5ced9;
  }

  .ant-tree-node-content-wrapper {
    margin: auto auto auto 0px;
    width: 100% !important;
  }

  .ant-tree-switcher {
    align-self: center;
  }

  .ant-tree-treenode:hover {
    box-shadow: 0 2px 10px rgb(0 0 0 / 25%);
    .listButton {
      display: block;
    }
  }

  .ant-tree-node-selected {
    width: 100% !important;
    background-color: white !important;
  }
`;

export { CustomTree };
