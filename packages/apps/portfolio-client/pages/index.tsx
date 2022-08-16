import {
  Icon,
  NetworkConnectionIcon,
  SafeHydrate,
} from '@venkatasudha/core-components';
import { portfolioCore } from '@venkatasudha/portfolio-core';
import { FaLaptopCode } from 'react-icons/fa';

export function Index() {
  return (
    <div className="flex justify-center">
      <Icon name="RK" icon={FaLaptopCode} />
      <h1 className="text-primary cursor-pointer text-center text-5xl hover:underline">
        Hello world!
      </h1>
      <span className="text-center">{portfolioCore()}</span>
      <SafeHydrate>
        <NetworkConnectionIcon />
      </SafeHydrate>
    </div>
  );
}

export default Index;
