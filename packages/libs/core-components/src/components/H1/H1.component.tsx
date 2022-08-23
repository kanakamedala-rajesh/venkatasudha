import { pageGreeting } from '@venkatasudha/core';

export interface H1Props {
  pageTitle: string;
}

export function H1(props: H1Props) {
  return (
    <h1 className="text-primary font-arimaMadurai py-36 text-center text-6xl font-bold">
      {pageGreeting(props.pageTitle)}
    </h1>
  );
}

export default H1;
