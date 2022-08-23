import { render } from '@testing-library/react';
import React from 'react';

import Contact from '../pages/contact';

describe('Contact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Contact />);
    expect(baseElement).toBeTruthy();
  });
});
