const { chromium } = require("playwright")
const expect = require("expect")

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  // Change checklyhq.com to your site's URL,
  // or, even better, define a SITE_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.YOUR_SITE_URL || "https://portfolio.venkatasudha.com/")

  // Inject a PerformanceObserver and access web performance metrics
  const LCP = await page.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const LCP = entries.at(-1)
        resolve(LCP.startTime)
      }).observe({
        type: "largest-contentful-paint",
        buffered: true,
      })
    })
  })

  // Add custom assertions to fail your check
  // if your web performance degraded
  console.log("Largest Contentful Paint", parseInt(LCP, 10))
  expect(parseInt(LCP, 10)).toBeLessThan(500)

  // Close the browser and end the session
  await browser.close()
})()