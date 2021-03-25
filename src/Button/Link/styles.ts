import styled, { css, DefaultTheme } from 'styled-components';
import { ILinkProps } from './types';

type THandleBG = Pick<ILinkProps, 'variant' | 'disabled'> & {
  theme: DefaultTheme;
};

const handleBGColor = ({ variant, disabled, theme }: THandleBG) => {
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

export const Link = styled.button<ILinkProps>`
  ${({ theme, disabled, variant }) => css`
    background-color: transparent;
    border: none;
    color: ${handleBGColor({ variant, disabled, theme })};
    cursor: pointer;
    padding: 0;
    text-decoration: underline;

    ${theme.fonts.body1};
    &:focus,
    &:active {
      border: none;
      outline: none;
    }
  `}
`;
