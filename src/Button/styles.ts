import React from 'react';
import styled, { DefaultTheme, css } from 'styled-components';
// import ButtonMUI, { ButtonProps } from '@material-ui/core/Button';
import { TButtonProps, IButtonProps } from './types';

type TButton = TButtonProps & {
  theme: DefaultTheme;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const handleBGColor = ({ variant, outlined, disabled, theme }: TButton) => {
  if (outlined) {
    return 'transparent';
  }

  if (disabled) {
    switch (variant) {
      case 'primary':
        return theme.colors.primary.green40;
      case 'secondary':
        return theme.colors.primary.grey40;
      default:
        return theme.colors.neutrals.lightergrey;
    }
  }

  switch (variant) {
    case 'primary':
      return theme.colors.primary.green;
    case 'secondary':
      return theme.colors.primary.grey;
    default:
      return theme.colors.neutrals.lightgrey;
  }
};

const handleTextColor = ({ variant, outlined, disabled, theme }: TButton) => {
  if (disabled) {
    switch (variant) {
      case 'primary':
        return theme.colors.primary.green40;
      case 'secondary':
        return theme.colors.primary.grey40;
      default:
        return theme.colors.neutrals.lightgrey;
    }
  }

  if (outlined) {
    switch (variant) {
      case 'primary':
        return theme.colors.primary.green;
      case 'secondary':
        return theme.colors.primary.grey;
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
    return 'transparent';
  }

  switch (variant) {
    case 'primary':
      return theme.colors.primary.green;
    case 'secondary':
      return theme.colors.primary.grey;
    default:
      return theme.colors.neutrals.lightgrey;
  }
};

export const Button = styled.button<IButtonProps>`
  ${({ variant, outlined, disabled, theme, size }) => css`
    ${({ theme }) => theme.fonts.button};

    background-color: ${handleBGColor({ variant, outlined, disabled, theme })};
    border: ${`2px solid ${handleBorderColor({
      variant,
      outlined,
      disabled,
      theme,
    })}`};
    border-radius: ${theme.borderRadius.square};
    box-shadow: ${!disabled && theme.shadows.button};
    color: ${handleTextColor({ variant, outlined, disabled, theme })};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    font-size: ${() => {
      if (size === 'small') {
        return theme.fonts.body2.fontSize;
      } else if (size === 'large') {
        return theme.fonts.heading5.fontSize;
      }

      return theme.fonts.button.fontSize;
    }}px;
    position: relative;
    overflow: hidden;
    height: ${() => {
      if (size === 'small') {
        return '25px';
      } else if (size === 'large') {
        return '48px';
      }

      return '35px';
    }};
    width: ${() => {
      if (size === 'small') {
        return '60px';
      } else if (size === 'large') {
        return '240px;';
      }

      return '120px';
    }};

    &:hover {
      background-color: ${handleBGColor({
        variant,
        outlined,
        disabled,
        theme,
      })};
    }
    &:focus,
    &:active {
      outline: none;
    }
  `}
`;

export const LoadingContainer = styled.div`
  position: absolute;
  left: calc(50% - 12px);
  top: calc(50% - 12px);
`;
