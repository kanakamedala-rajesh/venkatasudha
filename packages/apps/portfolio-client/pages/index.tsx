import { portfolioCore } from '@rajesh542/portfolio-core';

export function Index() {
  return (
    <div className="flex flex-col">
      <h1 className="text-primary cursor-pointer text-center text-5xl hover:underline">
        Hello world!
      </h1>
      <span className="text-center">{portfolioCore()}</span>
    </div>
  );
}

export default Index;
