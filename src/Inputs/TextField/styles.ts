import styled, { css } from 'styled-components';
import Typography from '../../Typography';
import { findColorInTheme } from '../../theme/helper';
import { ITextFieldProps } from './types';

export const Label = styled(Typography).attrs(() => ({
  variant: 'label',
  type: 'caption',
}))``;

export const InputContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 50px;
`;

type TContainerProps = Pick<ITextFieldProps, 'color' | 'outlined'>;

export const Container = styled.div<TContainerProps>`
  ${({ theme, color, outlined }) => css`
    align-items: center;
    border: ${outlined && `1px solid ${findColorInTheme(color, 0.4)}`};
    background-color: ${!outlined && findColorInTheme(color)};
    border-radius: ${theme.borderRadius.square};
    color: ${outlined
      ? findColorInTheme(color)
      : theme.colors.neutrals.darkestgrey};
    display: inline-flex;
    padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
    width: 400px;

    svg {
      fill: ${outlined
        ? findColorInTheme(color)
        : theme.colors.neutrals.darkestgrey};
    }
    ${Label} {
      color: ${outlined
        ? findColorInTheme(color)
        : theme.colors.neutrals.darkestgrey};
    }
    * {
      box-sizing: border-box;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      background-color: transparent !important;
      color: inherit;
    }
  `}
`;

export const PrefixContainer = styled.div`
  align-items: center;
  color: inherit;
  display: flex;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing(1)}px;
`;

export const SuffixContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;
    color: inherit;
    height: 22px;
    outline: none;
    ${theme.fonts.body1};

    &:focus,
    &:active {
      border: none;
      outline: none;
    }
    ::placeholder {
      color: inherit;
      opacity: 0.4;
    }
    :-ms-input-placeholder {
      color: inherit;
      opacity: 0.4;
    }
    :-ms-input-placeholder {
      color: inherit;
      opacity: 0.4;
    }
  `}
`;
