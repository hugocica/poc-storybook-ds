import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

import * as s from './styles';
import { IPopoverProps } from './types';

const Popover: React.FC<IPopoverProps> = ({
  children,
  content,
  open,
  toggleOpen,
  placement = 'top',
  trigger = 'hover',
  offset: { horizontal, vertical } = { horizontal: 0, vertical: 0 },
  ...rest
}) => {
  const referenceElement = useRef(null);
  const popperElement = useRef(null);
  const arrowElement = useRef(null);

  const { styles, attributes, update } = usePopper(
    referenceElement?.current,
    popperElement?.current,
    {
      placement,
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: arrowElement.current,
          },
        },
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [horizontal, vertical],
          },
        },
      ],
    }
  );

  useEffect(() => {
    const handleDocumentClick = ({ target }: MouseEvent) => {
      // (if trigger is 'click' and mouse click's outside anchorElement: hide dropdown)
      // if trigger is 'hover' and mouse outside achorElement/dropdown: hide dropdown.
      if (
        referenceElement.current?.contains(target) ||
        popperElement.current?.contains(target)
      ) {
        return;
      }

      toggleOpen(false);
    };

    const eventListener = trigger === 'hover' ? 'mousemove' : 'mousedown';

    document.addEventListener(eventListener, handleDocumentClick);

    return () => {
      document.removeEventListener(eventListener, handleDocumentClick);
    };
  }, []);

  const updatePopperPosition = () => update && update();

  useLayoutEffect(() => {
    updatePopperPosition();
  }, [open]);

  const actions = () => {
    if (trigger === 'click') {
      return {
        onClick: () => {
          toggleOpen(!open);
        },
      };
    }

    return {
      onMouseEnter: () => {
        toggleOpen(true);
      },
    };
  };

  return (
    <>
      <s.Container ref={referenceElement} {...actions()} {...rest}>
        {children}
      </s.Container>

      {ReactDOM.createPortal(
        <s.PopoverContent
          ref={popperElement}
          style={{ ...styles.popper, ...styles.offset }}
          {...attributes.popper}
          visible={open}
        >
          {content}
        </s.PopoverContent>,
        document.getElementById('root')
      )}
    </>
  );
};

export default Popover;
