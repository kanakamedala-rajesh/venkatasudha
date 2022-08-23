import { render } from '@testing-library/react';
import { FaLaptopCode } from 'react-icons/fa';

import { Icon } from '../src';

describe('Icon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon name="RK" icon={FaLaptopCode} />);
    expect(baseElement).toBeTruthy();
  });
});
