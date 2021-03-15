import styled from "styled-components";
import { IButtonLinkComponentProps } from "./types";

export const Link = styled.button<IButtonLinkComponentProps>`
  background-color: transparent;
  border: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.secondary.purple04 : theme.colors.secondary.purple};
  cursor: pointer;
  text-decoration: underline;

  ${({ theme }) => theme.fonts.body};
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;
