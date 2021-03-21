import React from 'react';
import { renderWithProviders, screen } from 'setupTests';

import Dropdown from './index';

describe('Dropdown Component', () => {
  it('should render foo text correctly', () => {
    // renderWithProviders(<Dropdown />);

    const component = screen.getByTestId('Dropdown');

    expect(component).toHaveTextContent('harvey was here');
  });
});
