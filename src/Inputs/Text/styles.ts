import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border: 1px solid ${theme.colors.neutrals.lightgrey};
    border-radius: 4px;
    color: ${theme.colors.neutrals.darkestgrey};
    display: inline-flex;
    height: 40px;
    padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
  `}
`;

export const PrefixContainer = styled.div`
  align-items: center;
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
    border: none;
    color: inherit;
    font-weight: 300;
    outline: none;
    ${theme.fonts.body1};

    &:focus,
    &:active {
      border: none;
      outline: none;
    }
  `}
`;
