exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['githubProfileFeature.js']
  // multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName : 'chrome'
  // }] - test for multiple browsers
};