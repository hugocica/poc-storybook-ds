import styled, { css } from 'styled-components';

export const ReferenceContainer = styled.div`
  display: flex;
`;

export const PopperContainer = styled.div`
  display: flex;
  z-index: 1;
`;

type TDropdownItemsContainer = {
  visible: boolean;
};

export const DropdownItemsContainer = styled.div<TDropdownItemsContainer>`
  ${({ theme, visible }) => css`
    box-shadow: ${theme.shadows.popper};
    background-color: ${theme.colors.neutrals.white};
    display: ${visible ? 'flex' : 'none'};
    flex-direction: column;
    padding: ${theme.spacing(1)}px;
    position: relative;
    z-index: 1;
  `}
`;

export const DropdownItem = styled.div``;
