import styled, { keyframes } from 'styled-components';

export const ContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 75px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const IconLoading = styled.img`
  -webkit-animation: ${rotate} 2s linear infinite;
  animation: ${rotate} 2s linear infinite;
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

export const TextAlert = styled.span`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
