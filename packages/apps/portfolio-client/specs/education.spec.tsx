import { render } from '@testing-library/react';
import React from 'react';

import Education from '../pages/education';

describe('Education', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Education />);
    expect(baseElement).toBeTruthy();
  });
});
