import { render } from '@testing-library/react';

import NetworkConnection from './NetworkConnection.component';

describe('NetworkConnection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NetworkConnection />);
    expect(baseElement).toBeTruthy();
  });
});
