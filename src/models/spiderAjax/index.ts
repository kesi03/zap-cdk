/**
 * Interface representing an excluded HTML element configuration.
 * @interface IExcludedElement
 * @property {string} description - Description of the exclusion.
 * @property {string} element - Name of the element.
 * @property {string} [xpath] - Optional XPath of the element.
 * @property {string} [text] - Optional text of the element (exact match and case sensitive).
 * @property {string} [attributeName] - Optional name of the attribute.
 * @property {string} [attributeValue] - Optional value of the attribute.
 */
export interface IExcludedElement {
  description: string; // Description of the exclusion
  element: string; // Name of the element
  xpath?: string; // Optional XPath of the element
  text?: string; // Optional text of the element (exact match and case sensitive)
  attributeName?: string; // Optional name of the attribute
  attributeValue?: string; // Optional value of the attribute
}

/**
 * Interface representing a test configuration.
 * @interface ITest
 * @property {string} name - Name of the test.
 * @property {'stats'} type - Type of test, only 'stats' is supported for now.
 * @property {string} statistic - Name of an integer / long statistic.
 * @property {string} operator - Operator used for testing.
 * @property {number} value - Value to compare against.
 * @property {'warn' | 'error' | 'info'} [onFail] - Action to take on failure.
 */
export interface ITest {
  name: string; // Name of the test
  type: 'stats'; // Type of test, only 'stats' is supported for now
  statistic: string; // Name of an integer / long statistic
  operator: string; // Operator used for testing
  value: number; // Value to compare against
  onFail?: 'warn' | 'error' | 'info'; // Action to take on failure
}

/**
 * Interface representing the parameters for an AJAX spider configuration.
 * @interface ISpiderAjax
 * @property {string} [context] - Name of the context to spider.
 * @property {string} [user] - Optional user for authentication.
 * @property {string} [url] - URL to start spidering from.
 * @property {number} [maxDuration] - Max time in minutes the AJAX spider will run.
 * @property {number} [maxCrawlDepth] - Max depth the crawler can reach.
 * @property {number} [numberOfBrowsers] - Number of browsers to use.
 * @property {boolean} [runOnlyIfModern] - Run only if a "modern app" alert is raised.
 * @property {boolean} [inScopeOnly] - Ignore out of scope URLs.
 * @property {string} [browserId] - Browser ID to use.
 * @property {boolean} [clickDefaultElems] - Click only default elements.
 * @property {boolean} [clickElemsOnce] - Click each element only once.
 * @property {number} [eventWait] - Time to wait after a client-side event.
 * @property {number} [maxCrawlStates] - Maximum number of crawl states.
 * @property {boolean} [randomInputs] - Enter random values into input elements.
 * @property {number} [reloadWait] - Time to wait after the URL is loaded.
 * @property {'Flexible' | 'Strict'} [scopeCheck] - Scope check type.
 * @property {string[]} [elements] - List of HTML elements to click.
 * @property {IExcludedElement[]} [excludedElements] - List of HTML elements to exclude.
 * @property {ITest[]} [tests] - List of tests to perform.
 */
export interface ISpiderAjax {
  context?: string; // Name of the context to spider
  user?: string; // Optional user for authentication
  url?: string; // URL to start spidering from
  maxDuration?: number; // Max time in minutes the ajax spider will run
  maxCrawlDepth?: number; // Max depth the crawler can reach
  numberOfBrowsers?: number; // Number of browsers to use
  runOnlyIfModern?: boolean; // Run only if a "modern app" alert is raised
  inScopeOnly?: boolean; // Ignore out of scope URLs
  browserId?: string; // Browser Id to use
  clickDefaultElems?: boolean; // Click only default elements
  clickElemsOnce?: boolean; // Click each element only once
  eventWait?: number; // Time to wait after a client-side event
  maxCrawlStates?: number; // Maximum number of crawl states
  randomInputs?: boolean; // Enter random values into input elements
  reloadWait?: number; // Time to wait after the URL is loaded
  scopeCheck?: 'Flexible' | 'Strict'; // Scope check type
  elements?: string[]; // List of HTML elements to click
  excludedElements?: IExcludedElement[]; // List of HTML elements to exclude
  tests?: ITest[]; // List of tests to perform
}
