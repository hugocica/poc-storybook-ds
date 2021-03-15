import styled, { keyframes } from "styled-components";
import { IRipple } from "./types";

const rippleAnimation = keyframes`
  to {
      opacity: 0;
      transform: scale(2);
    }
`;
export const RippleContainer = styled.div<IRipple>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${({ theme }) => theme.colors.system.white};
    animation-name: ${rippleAnimation};
    animation-duration: ${({ duration }) => duration}ms;
  }
`;
