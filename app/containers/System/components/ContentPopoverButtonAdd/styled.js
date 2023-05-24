import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 14px;
  height: 14px;
`;

const LineDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
`;

const Content = styled.div`
  padding: 0px;
  margin-left: 10px;
  font-weight: 400;
  font-size: 14px;
`;

export { Wrapper, Icon, LineDiv, Content };
