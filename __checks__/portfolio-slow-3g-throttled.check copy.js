const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Use the Chrome DevTools Protocol to change the network conditions
  const client = await page.context().newCDPSession(page);
  await client.send('Network.enable');
  await client.send('Network.emulateNetworkConditions', {
    offline: false,
    downloadThroughput: ((500 * 1024) / 8) * 0.8,
    uploadThroughput: ((500 * 1024) / 8) * 0.8,
    latency: 400 * 5,
  });

  // Change checklyhq.com to your site's URL,
  // or, even better, define a SITE_URL environment variable
  // to reuse it across your browser checks
  await page.goto(
    process.env.YOUR_SITE_URL || 'https://portfolio.venkatasudha.com/'
  );

  // Close the browser and end the session
  await browser.close();
})();
