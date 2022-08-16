import dynamic from 'next/dynamic';
import React from 'react';

type DynamicProps = {
  children: React.ReactNode;
};

const NonSSRWrapper = (props: DynamicProps) => (
  <React.Fragment>{props.children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
