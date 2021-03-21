import styled, { css } from "styled-components";
import Typography from "../../Typography";
import { findColorInTheme } from "../../theme/helper";
import { ITextFieldProps } from "./types";

export const Label = styled(Typography).attrs(() => ({
  variant: "label",
  type: "caption",
}))``;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div<Pick<ITextFieldProps, "color">>`
  ${({ theme, color }) => css`
    align-items: center;
    border: 1px solid ${findColorInTheme(color, 0.4)};
    border-radius: ${theme.borderRadius.square};
    color: ${findColorInTheme(color)};
    display: inline-flex;
    padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;

    svg {
      fill: ${findColorInTheme(color)};
    }
    ${Label} {
      color: ${findColorInTheme(color)};
    }
    * {
      box-sizing: border-box;
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
