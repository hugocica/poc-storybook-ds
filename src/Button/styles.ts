import React from "react";
import styled, { DefaultTheme, css } from "styled-components";
// import ButtonMUI, { ButtonProps } from '@material-ui/core/Button';
import { TButtonProps, IButtonProps } from "./types";

type TButton = TButtonProps & {
  theme: DefaultTheme;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const handleBGColor = ({ variant, outlined, disabled, theme }: TButton) => {
  if (outlined) {
    return "transparent";
  }

  if (disabled) {
    switch (variant) {
      case "primary":
        return theme.colors.primary.green40;
      case "secondary":
        return theme.colors.primary.gray40;
      default:
        return theme.colors.neutrals.lightergrey;
    }
  }

  switch (variant) {
    case "primary":
      return theme.colors.primary.green;
    case "secondary":
      return theme.colors.primary.gray;
    default:
      return theme.colors.neutrals.lightgrey;
  }
};

const handleTextColor = ({ variant, outlined, disabled, theme }: TButton) => {
  if (disabled) {
    switch (variant) {
      case "primary":
        return theme.colors.primary.green40;
      case "secondary":
        return theme.colors.primary.gray40;
      default:
        return theme.colors.neutrals.lightgrey;
    }
  }

  if (outlined) {
    switch (variant) {
      case "primary":
        return theme.colors.primary.green;
      case "secondary":
        return theme.colors.primary.gray;
      default:
        return theme.colors.neutrals.darkestgrey;
    }
  }

  return !variant
    ? theme.colors.neutrals.darkestgrey
    : theme.colors.neutrals.white;
};

const handleBorderColor = ({ variant, disabled, theme }: TButton) => {
  if (disabled) {
    return "transparent";
  }

  switch (variant) {
    case "primary":
      return theme.colors.primary.green;
    case "secondary":
      return theme.colors.primary.gray;
    default:
      return theme.colors.neutrals.lightgrey;
  }
};

export const Button = styled.button<IButtonProps>`
  ${({ variant, outlined, disabled, theme, size }) => css`
    background-color: ${handleBGColor({ variant, outlined, disabled, theme })};
    border: ${`2px solid ${handleBorderColor({
      variant,
      outlined,
      disabled,
      theme,
    })}`};
    border-radius: ${theme.borderRadius.square};
    box-shadow: ${!disabled && theme.shadows.gray1};
    color: ${handleTextColor({ variant, outlined, disabled, theme })};
    cursor: ${disabled ? "not-allowed" : "pointer"};
    /* padding: ${({ theme }) =>
      `${theme.spacing(1)}px ${theme.spacing(2)}px`}; */
    position: relative;
    overflow: hidden;
    height: ${() => {
      if (size === "small") {
        return "25px";
      }

      return "35px";
    }};
    width: ${() => {
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
  `}
`;

export const LoadingContainer = styled.div`
  position: absolute;
`;
