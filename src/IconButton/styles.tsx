import styled, { css } from 'styled-components';

export const Button = styled.button<{ padding?: string }>`
  ${({ theme, padding }) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.neutrals.lightgrey};
    border-radius: ${theme.borderRadius.square};
    height: 27px;
    cursor: pointer;
    padding: ${padding ? padding : '5px 8px'};
    position: relative;
    width: 28px;

    &:disabled {
      cursor: block;
    }

    &:active,
    &:focus {
      outline: none;
    }
  `}
`;
