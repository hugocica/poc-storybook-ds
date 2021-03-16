import styled, { css } from "styled-components";
import { ITypographyProps } from "./types";

export const Text = styled.p<ITypographyProps>`
  ${({ theme, type, color }) => css`
    font-weight: 300;
    color: ${theme.colors.neutrals[color] ||
    theme.colors.system[color] ||
    theme.colors.secondary[color] ||
    theme.colors.primary[color]};

    ${theme.fonts[type]};
  `}
`;
