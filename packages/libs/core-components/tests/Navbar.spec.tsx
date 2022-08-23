import { render } from '@testing-library/react';

import { Navbar } from '../src';

describe('Navbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navbar iconString={'RK'} />);
    expect(baseElement).toBeTruthy();
  });
});
