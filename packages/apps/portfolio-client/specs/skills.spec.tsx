import { render } from '@testing-library/react';
import React from 'react';

import Skills from '../pages/skills';

describe('Skills', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Skills />);
    expect(baseElement).toBeTruthy();
  });
});
