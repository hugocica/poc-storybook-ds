import styled, { css } from "styled-components";
import { IAvatarProps } from "./types";

export const Container = styled.div<Pick<IAvatarProps, "size" | "variant">>`
  ${({ size, theme, variant }) => css`
    align-items: center;
    background-color: ${theme.colors.neutrals.lightergrey};
    border-radius: ${theme.borderRadius[variant]};
    color: ${theme.colors.neutrals.darkestgrey};
    display: flex;
    justify-content: center;
    height: ${size}px;
    overflow: hidden;
    width: ${size}px;

    ${theme.fonts.body1};

    img {
      width: 100%;
    }
  `}
`;
