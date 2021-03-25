import styled, { css } from 'styled-components';
import { findColorInTheme } from '../theme/helper';
import { ITypographyProps } from './types';

export const Text = styled.p<ITypographyProps>`
  ${({ theme, type, color, bold }) => css`
    color: ${findColorInTheme(color)};
    margin: 0;

    ${theme.fonts[type]};
    ${bold && `font-weight: 700`};
  `}
`;
