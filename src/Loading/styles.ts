import styled, { keyframes } from 'styled-components';

import Icon from '../Icon';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(Icon).attrs({ name: 'spinner' })`
  animation: ${rotate} 1s linear infinite;
`;
