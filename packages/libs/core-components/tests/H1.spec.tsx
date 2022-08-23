import { render } from '@testing-library/react';

import { H1 } from '../src';

describe('H1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<H1 pageTitle={'Home'} />);
    expect(baseElement).toBeTruthy();
  });
});
