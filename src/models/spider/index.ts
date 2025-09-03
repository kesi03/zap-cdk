/**
 * Interface representing the parameters for a spider configuration.
 * @interface ISpiderParameters
 * @property {string} [context] - Name of the context to spider, default: first context.
 * @property {string} [user] - An optional user to use for authentication, must be defined in the env.
 * @property {string} [url] - URL to start spidering from, default: first context URL.
 * @property {number} [maxDuration] - The max time in minutes the spider will be allowed to run for, default: 0 (unlimited).
 * @property {number} [maxDepth] - The maximum tree depth to explore, default: 5.
 * @property {number} [maxChildren] - The maximum number of children to add to each node in the tree.
 * @property {boolean} [acceptCookies] - Whether the spider will accept cookies, default: true.
 * @property {boolean} [handleODataParametersVisited] - Whether the spider will handle OData responses, default: false.
 * @property {'ignore_completely' | 'ignore_value' | 'use_all'} [handleParameters] - How query string parameters are used.
 * @property {boolean} [logoutAvoidance] - Whether the Spider should attempt to avoid logout related paths/functionality, default: false.
 * @property {number} [maxParseSizeBytes] - The max size of a response that will be parsed, default: 2621440 (2.5 Mb).
 * @property {boolean} [parseComments] - Whether the spider will parse HTML comments in order to find URLs, default: true.
 * @property {boolean} [parseGit] - Whether the spider will parse Git metadata in order to find URLs, default: false.
 * @property {boolean} [parseDsStore] - Whether the spider will parse .DS_Store files in order to find URLs, default: false.
 * @property {boolean} [parseRobotsTxt] - Whether the spider will parse 'robots.txt' files in order to find URLs, default: true.
 * @property {boolean} [parseSitemapXml] - Whether the spider will parse 'sitemap.xml' files in order to find URLs, default: true.
 * @property {boolean} [parseSVNEntries] - Whether the spider will parse SVN metadata in order to find URLs, default: false.
 * @property {boolean} [postForm] - Whether the spider will submit POST forms, default: true.
 * @property {boolean} [processForm] - Whether the spider will process forms, default: true.
 * @property {boolean} [sendRefererHeader] - Whether the spider will send the referer header, default: true.
 * @property {number} [threadCount] - The number of spider threads, default: 2 * Number of available processor cores.
 * @property {string} [userAgent] - The user agent to use in requests, default: '' (use the default ZAP one).
 */
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
/**
 * Interface representing a test configuration for the spider.
 * @interface ISpiderTest
 * @property {string} [name] - Name of the test, default: statistic + operator + value.
 * @property {'stats'} type - Type of test, only 'stats' is supported for now.
 * @property {string} statistic - Name of an integer / long statistic.
 * @property {'==' | '!=' | '>=' | '>' | '<' | '<='} operator - Operator used for testing.
 * @property {number} value - Change this to the number of URLs you expect to find.
 * @property {'warn' | 'error' | 'info'} onFail - One of 'warn', 'error', 'info', mandatory.
 */
export interface ISpiderTest {
  name?: string; // Name of the test, default: statistic + operator + value
  type: 'stats'; // Type of test, only 'stats' is supported for now
  statistic: string; // Name of an integer / long statistic
  operator: '==' | '!=' | '>=' | '>' | '<' | '<='; // Operator used for testing
  value: number; // Change this to the number of URLs you expect to find
  onFail: 'warn' | 'error' | 'info'; // One of 'warn', 'error', 'info', mandatory
}

/**
 * Interface representing a spider configuration.
 * @interface ISpider
 * @property {'spider'} type - The type of the spider.
 * @property {ISpiderParameters} parameters - The parameters for the spider configuration.
 * @property {ISpiderTest[]} [tests] - List of tests to perform.
 * @property {boolean} [enabled] - If set to false, the job will not be run, default: true.
 * @property {boolean} [alwaysRun] - If set and the job is enabled, it will run even if the plan exits early, default: false.
 */
export interface ISpider {
  type: 'spider'; // The type of the spider
  parameters: ISpiderParameters; // The parameters for the spider configuration
  tests?: ISpiderTest[]; // List of tests to perform
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}
