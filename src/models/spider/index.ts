export interface ISpiderParameters {
  context?: string; // Name of the context to spider, default: first context
  user?: string; // An optional user to use for authentication, must be defined in the env
  url?: string; // URL to start spidering from, default: first context URL
  maxDuration?: number; // The max time in minutes the spider will be allowed to run for, default: 0 unlimited
  maxDepth?: number; // The maximum tree depth to explore, default 5
  maxChildren?: number; // The maximum number of children to add to each node in the tree
  acceptCookies?: boolean; // Whether the spider will accept cookies, default: true
  handleODataParametersVisited?: boolean; // Whether the spider will handle OData responses, default: false
  handleParameters?: 'ignore_completely' | 'ignore_value' | 'use_all'; // How query string parameters are used
  logoutAvoidance?: boolean; // Whether the Spider should attempt to avoid logout related paths/functionality, default: false
  maxParseSizeBytes?: number; // The max size of a response that will be parsed, default: 2621440 - 2.5 Mb
  parseComments?: boolean; // Whether the spider will parse HTML comments in order to find URLs, default: true
  parseGit?: boolean; // Whether the spider will parse Git metadata in order to find URLs, default: false
  parseDsStore?: boolean; // Whether the spider will parse .DS_Store files in order to find URLs, default: false
  parseRobotsTxt?: boolean; // Whether the spider will parse 'robots.txt' files in order to find URLs, default: true
  parseSitemapXml?: boolean; // Whether the spider will parse 'sitemap.xml' files in order to find URLs, default: true
  parseSVNEntries?: boolean; // Whether the spider will parse SVN metadata in order to find URLs, default: false
  postForm?: boolean; // Whether the spider will submit POST forms, default: true
  processForm?: boolean; // Whether the spider will process forms, default: true
  sendRefererHeader?: boolean; // Whether the spider will send the referer header, default: true
  threadCount?: number; // The number of spider threads, default: 2 * Number of available processor cores
  userAgent?: string; // The user agent to use in requests, default: '' - use the default ZAP one
}

export interface ISpiderTest {
  name?: string; // Name of the test, default: statistic + operator + value
  type: 'stats'; // Type of test, only 'stats' is supported for now
  statistic: string; // Name of an integer / long statistic
  operator: '==' | '!=' | '>=' | '>' | '<' | '<='; // Operator used for testing
  value: number; // Change this to the number of URLs you expect to find
  onFail: 'warn' | 'error' | 'info'; // One of 'warn', 'error', 'info', mandatory
}

export interface ISpider {
  type: 'spider'; // The type of the spider
  parameters: ISpiderParameters; // The parameters for the spider configuration
  tests?: ISpiderTest[]; // List of tests to perform
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}
