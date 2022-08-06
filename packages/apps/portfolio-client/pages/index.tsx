import { Icon, NetworkConnectionIcon } from '@rajesh542/core-components';
import { portfolioCore } from '@rajesh542/portfolio-core';
import { FaLaptopCode } from 'react-icons/fa';

export function Index() {
  return (
    <div className="flex justify-center">
      <Icon name="RK" icon={FaLaptopCode} />
      <h1 className="text-primary cursor-pointer text-center text-5xl hover:underline">
        Hello world!
      </h1>
      <span className="text-center">{portfolioCore()}</span>
      <NetworkConnectionIcon />
    </div>
  );
}

export default Index;
