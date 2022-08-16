import { render } from '@testing-library/react';

import {Icon} from '../src';
import { FaLaptopCode } from 'react-icons/fa';

describe('Icon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon name="RK" icon={FaLaptopCode} />);
    expect(baseElement).toBeTruthy();
  });
});
