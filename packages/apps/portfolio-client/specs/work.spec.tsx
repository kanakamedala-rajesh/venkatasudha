import { render } from '@testing-library/react';
import React from 'react';

import Work from '../pages/work';

describe('Work', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Work />);
    expect(baseElement).toBeTruthy();
  });
});
