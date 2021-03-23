import React from 'react';
import { IDropdownProps } from './types';
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
declare const Dropdown: React.FC<IDropdownProps>;
export default Dropdown;
