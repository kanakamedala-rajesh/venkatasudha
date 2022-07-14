// eslint-disable-next-line @typescript-eslint/no-var-requires
/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 * @type {import('next').NextConfig}
 **/
const withNx = require('@nrwl/next/plugins/with-nx');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withNx(
  withBundleAnalyzer(
    withPWA({
      pwa: {
        dest: 'public',
        runtimeCaching,
      },
    })
  )
);
