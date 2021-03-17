import styled, { keyframes } from "styled-components";
import { ISkeletonProps } from "./types";

const wavyAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  60% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const Skeleton = styled.div<ISkeletonProps>`
  background-color: ${({ theme }) => theme.colors.neutrals.lightergrey};
  border-radius: ${({ variant, theme }) => theme.borderRadius[variant]};
  height: ${({ height }) => {
    if (!height) {
      return "100%";
    }

    return Number.isNaN(height) ? height : `${height}px`;
  }};
  overflow: hidden;
  position: relative;
  width: ${({ width }) => {
    if (!width) {
      return "100%";
    }

    return Number.isNaN(width) ? width : `${width}px`;
  }};

  &:after {
    animation: ${wavyAnimation} 1.6s linear 0.5s infinite;
    background: linear-gradient(
      to left,
      transparent,
      ${({ theme }) => theme.colors.neutrals.white},
      transparent
    );
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%);
  }
`;
