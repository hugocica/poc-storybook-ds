import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

import * as s from './styles';
import { IDropdownProps } from './types';

const initialOffset = {
  horizontal: 0,
  vertical: 0,
};

/**
 * # Props #
 * anchorElement: the element that it will trigger the dropdown. dropdown it'll be created using this element as reference
 * placement: 'bottom-start' || 'bottom' || 'bottom-end' || 'top-start' || 'top' || 'top-end'
 *
 * # Using the component #
 *  <Dropdown anchorElement={<Button>Click here to open dropdown</Button>}>
 *    <p>Item 1</p>
 *    <p>Item 2</p>
 *  </Dropdown>
 */

const Dropdown: React.FC<IDropdownProps> = ({
  children,
  anchorElement,
  open,
  toggleOpen,
  trigger,
  placement = 'bottom-start',
  offset: { horizontal, vertical } = initialOffset,
  ...rest
}) => {
  const containerElement = document.getElementById('root');
  const referenceElement = useRef(null);
  const popperElement = useRef(null);

  const { styles, attributes, update } = usePopper(
    referenceElement?.current,
    popperElement?.current,
    {
      placement,
      strategy: 'absolute',
      modifiers: [
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
    switch (trigger) {
      case 'click': {
        return {
          onClick: () => {
            toggleOpen(!open);
          },
        };
      }
      case 'hover':
        return {
          onMouseEnter: () => {
            toggleOpen(true);
          },
        };
      default:
        break;
    }
  };

  return (
    <s.ReferenceContainer ref={referenceElement} {...actions()}>
      {anchorElement}

      {ReactDOM.createPortal(
        <s.PopperContainer
          ref={popperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <s.DropdownItemsContainer
            style={styles.offset}
            visible={open}
            {...rest}
          >
            {React.Children.map(children, (child) => {
              return (
                <s.DropdownItem onClick={() => toggleOpen(false)}>
                  {child}
                </s.DropdownItem>
              );
            })}
          </s.DropdownItemsContainer>
        </s.PopperContainer>,
        containerElement
      )}
    </s.ReferenceContainer>
  );
};

export default Dropdown;
