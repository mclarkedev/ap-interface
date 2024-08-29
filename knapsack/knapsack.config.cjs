const KnapsackHtmlRenderer = require('@knapsack/renderer-html');
const { configureKnapsack } = require('@knapsack/app');
const { join } = require('path');
const { version } = require('./../package.json');

module.exports = configureKnapsack({
  data: join(__dirname, './data'),
  dist: join(__dirname, './dist'),
  public: join(__dirname, './public'),
  version,
  templateRenderers: [new KnapsackHtmlRenderer()],
  plugins: [],
  cloud: {
    siteId: 'ap-sandbox',
    repoRoot: join(__dirname, '..'),
  },
});
