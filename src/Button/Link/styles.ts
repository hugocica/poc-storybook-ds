import styled from 'styled-components';
import { ILinkProps } from './types';

export const Link = styled.button<ILinkProps>`
  background-color: transparent;
  border: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.primary.green40 : theme.colors.primary.green};
  cursor: pointer;
  text-decoration: underline;

  ${({ theme }) => theme.fonts.body1};
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;
