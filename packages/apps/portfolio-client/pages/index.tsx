import { portfolioCore } from '@rajesh542/portfolio-core';

export function Index() {
  return (
    <h1 className="cursor-pointer text-center text-3xl font-bold hover:underline">
      Hello world!
      <span>{portfolioCore()}</span>
    </h1>
  );
}

export default Index;
