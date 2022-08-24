import { render } from '@testing-library/react';

import Navbar from './Navbar.component';

describe('Navbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navbar iconString={'RK'} />);
    expect(baseElement).toBeTruthy();
  });
});
