import styled from 'styled-components';
import { OBJECT_SIGN_STATUS_SIGNED } from '../../constantsProfile';

export const Content = styled.div`
  width: fit-content;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  -webkit-line-clamp: 1;

  ${props => (props.sign === OBJECT_SIGN_STATUS_SIGNED ? `color: ${props.theme.colors.status.complete};` : '')}
`;
