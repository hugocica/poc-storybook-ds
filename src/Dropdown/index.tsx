import React, { useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';

import * as s from './styles';
import { IDropdownProps } from './types';

const initialOffset = {
  horizontal: 0,
  vertical: 0,
};

const Dropdown: React.FC<IDropdownProps> = ({
  children,
  anchorElement,
  placement = 'bottom-start',
  offset: { horizontal, vertical } = initialOffset,
  trigger = 'hover',
  ...rest
}) => {
  const referenceElement = useRef(null);
  const popperElement = useRef(null);

  const [visible, setVisibility] = useState(false);

  const actions = () => {
    if (trigger === 'click') {
      return { onClick: () => setVisibility((currentState) => !currentState) };
    }

    return {
      onMouseEnter: () => setVisibility(true),
    };
  };

  const { styles, attributes } = usePopper(
    referenceElement?.current,
    popperElement?.current,
    {
      placement,
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
      // only stays visible if mouse is inside anchor
      if (
        referenceElement.current?.contains(target) ||
        (popperElement.current?.contains(target) && trigger === 'hover')
      ) {
        return;
      }

      setVisibility(false);
    };

    const eventListener = trigger === 'hover' ? 'mousemove' : 'mousedown';

    document.addEventListener(eventListener, handleDocumentClick);

    return () => {
      document.removeEventListener(eventListener, handleDocumentClick);
    };
  }, []);

  return (
    <s.Container {...rest}>
      <div
        ref={referenceElement}
        style={{ display: 'inline-flex' }}
        {...actions()}
      >
        {anchorElement}
      </div>

      <s.PopperContainer
        ref={popperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <s.DropdownItemsContainer style={styles.offset} visible={visible}>
          {children &&
            React.Children.map(children, (child) => {
              return <s.DropdownItem>{child}</s.DropdownItem>;
            })}
        </s.DropdownItemsContainer>
      </s.PopperContainer>
    </s.Container>
  );
};

export default Dropdown;
