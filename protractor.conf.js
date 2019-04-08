module.exports.config = {
  specs: ['./test/*.js'],
  directConnect: true,
  baseUrl: 'https://demos.creative-tim.com/now-ui-dashboard-angular/',
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'mocha',
  mochaOpts: {
    timeout: 60000
  },
  allScriptsTimeout: 10000,
  onPrepare: async () => {
    await browser.driver.manage().window().maximize()
  }
}
