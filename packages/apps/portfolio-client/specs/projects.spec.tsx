import { render } from '@testing-library/react';
import React from 'react';

import Projects from '../pages/projects';

describe('Projects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Projects />);
    expect(baseElement).toBeTruthy();
  });
});
