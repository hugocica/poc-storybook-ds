import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
`;

type TPopoverContent = {
  visible: boolean;
};

export const Arrow = styled.div`
  position: absolute;
  top: -24px;
  z-index: 0;
`;

export const PopoverContent = styled.div<TPopoverContent>`
  ${({ theme, visible }) => css`
    background-color: ${theme.colors.neutrals.white};
    border-radius: ${theme.borderRadius.square};
    box-shadow: ${theme.shadows.popper};
    display: ${visible ? 'flex' : 'none'};
    flex-direction: column;
    position: relative;
    z-index: 1;

    :after {
      content: '';
      height: 0;
      position: absolute;
      width: 0;
    }
    &[data-popper-placement^='top']:after {
      /* box-shadow: ${theme.shadows.popper}; */
      top: 100%;
      left: calc(50% - 8px);
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 6px solid white;
    }
    &[data-popper-placement^='bottom']:after {
      top: -6px;
      left: calc(50% - 8px);
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 6px solid white;
    }
  `}
`;
