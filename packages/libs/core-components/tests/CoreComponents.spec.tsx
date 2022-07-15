import { render } from '@testing-library/react';

import CoreComponents from '../src/lib/CoreComponents';

describe('CoreComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreComponents />);
    expect(baseElement).toBeTruthy();
  });
});
