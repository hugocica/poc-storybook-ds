import React from "react";
import styled, { DefaultTheme } from "styled-components";
// import ButtonMUI, { ButtonProps } from '@material-ui/core/Button';
import { IButtonComponentProps } from "./types";

type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> &
  IButtonComponentProps & {
    theme: DefaultTheme;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;

const handleBGColor = ({ variant, outlined, disabled, theme }: TButton) => {
  if (outlined) {
    return "transparent";
  }

  if (disabled) {
    switch (variant) {
      case "primary":
        return theme.colors.primary.green04;
      case "secondary":
        return theme.colors.secondary.purple04;
      default:
        return theme.colors.neutrals.lightergrey;
    }
  }

  switch (variant) {
    case "primary":
      return theme.colors.primary.green;
    case "secondary":
      return theme.colors.secondary.purple;
    default:
      return theme.colors.neutrals.lightgrey;
  }
};

const handleTextColor = ({ variant, outlined, disabled, theme }: TButton) => {
  if (disabled) {
    switch (variant) {
      case "primary":
        return theme.colors.primary.green04;
      case "secondary":
        return theme.colors.secondary.purple04;
      default:
        return theme.colors.neutrals.lightgrey;
    }
  }

  if (outlined) {
    switch (variant) {
      case "primary":
        return theme.colors.primary.green;
      case "secondary":
        return theme.colors.secondary.purple;
      default:
        return theme.colors.neutrals.darkgrey;
    }
  }

  return !variant ? theme.colors.neutrals.darkgrey : theme.colors.system.white;
};

const handleBorderColor = ({ variant, disabled, theme }: TButton) => {
  if (disabled) {
    switch (variant) {
      case "primary":
        return theme.colors.primary.green;
      case "secondary":
        return theme.colors.secondary.purple;
      default:
        return theme.colors.neutrals.lightergrey;
    }
  }

  switch (variant) {
    case "primary":
      return theme.colors.primary.green;
    case "secondary":
      return theme.colors.secondary.purple;
    default:
      return theme.colors.neutrals.lightgrey;
  }
};

export const Button = styled.button<IButtonComponentProps>`
  background-color: ${({ variant, outlined, disabled, theme }) =>
    handleBGColor({ variant, outlined, disabled, theme })};
  border: ${({ variant, outlined, disabled, theme }) =>
    `2px solid ${handleBorderColor({ variant, outlined, disabled, theme })}`};
  border-radius: 4px;
  box-shadow: ${({ theme, disabled }) => !disabled && theme.shadows.gray1};
  color: ${({ variant, outlined, disabled, theme }) =>
    handleTextColor({ variant, outlined, disabled, theme })};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  /* padding: ${({ theme }) =>
    `${theme.spacing(1)}px ${theme.spacing(2)}px`}; */
  position: relative;
  overflow: hidden;
  height: ${({ size }) => {
    if (size === "small") {
      return "25px";
    }

    return "35px";
  }};
  width: ${({ size }) => {
    if (size === "small") {
      return "60px";
    }

    return "120px";
  }};

  ${({ theme }) => theme.fonts.button};

  &:hover {
    background-color: ${({ variant, outlined, disabled, theme }) =>
      handleBGColor({ variant, outlined, disabled, theme })};
  }
  &:focus,
  &:active {
    outline: none;
  }

  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
`;
