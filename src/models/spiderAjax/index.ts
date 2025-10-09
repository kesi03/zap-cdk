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
 * Class representing an excluded HTML element configuration.
 * @implements {IExcludedElement}
 * @class ExcludedElement
 * @example
 * const excludedElement = new ExcludedElement({
 *   description: 'Exclude login button',
 *   element: 'button',
 *   text: 'Login'
 * });
 */
export class ExcludedElement implements IExcludedElement {
  description: string; // Description of the exclusion
  element: string; // Name of the element
  xpath?: string; // Optional XPath of the element
  text?: string; // Optional text of the element (exact match and case sensitive)
  attributeName?: string; // Optional name of the attribute
  attributeValue?: string; // Optional value of the attribute

  /**
   * Creates an instance of ExcludedElement.
   * @param {IExcludedElement} options - The options to initialize the excluded element.
   * @property {string} options.description - Description of the exclusion.
   * @property {string} options.element - Name of the element.
   * @property {string} [options.xpath] - Optional XPath of the element.
   * @property {string} [options.text] - Optional text of the element (exact match and case sensitive).
   * @property {string} [options.attributeName] - Optional name of the attribute.
   * @property {string} [options.attributeValue] - Optional value of the attribute.
   * @example
   * const excludedElement = new ExcludedElement({
   *   description: 'Exclude login button',
   *   element: 'button',
   *   text: 'Login'
   * });
   */
  constructor(options: IExcludedElement) {
    this.description = options.description;
    this.element = options.element;
    this.xpath = options.xpath;
    this.text = options.text;
    this.attributeName = options.attributeName;
    this.attributeValue = options.attributeValue;
  }
}

/**
 * Interface representing a test configuration.
 * @interface IAjaxTest
 * @property {string} name - Name of the test.
 * @property {'stats'} type - Type of test, only 'stats' is supported for now.
 * @property {string} statistic - Name of an integer / long statistic.
 * @property {string} operator - Operator used for testing.
 * @property {number} value - Value to compare against.
 * @property {'warn' | 'error' | 'info'} [onFail] - Action to take on failure.
 */
export interface IAjaxTest {
  name: string; // Name of the test
  type: 'stats'; // Type of test, only 'stats' is supported for now
  statistic: string; // Name of an integer / long statistic
  operator: string; // Operator used for testing
  value: number; // Value to compare against
  onFail?: 'warn' | 'error' | 'info'; // Action to take on failure
}

export class AjaxTest implements IAjaxTest {
  name: string; // Name of the test
  type: 'stats'; // Type of test, only 'stats' is supported for now
  statistic: string; // Name of an integer / long statistic
  operator: string; // Operator used for testing
  value: number; // Value to compare against
  onFail?: 'warn' | 'error' | 'info'; // Action to take on failure

  /**
   * Creates an instance of AjaxTest.
   * @param {IAjaxTest} options - The options to initialize the AJAX test.
   * @property {string} options.name - Name of the test.
   * @property {'stats'} options.type - Type of test, only 'stats' is supported for now.
   * @property {string} options.statistic - Name of an integer / long statistic.
   * @property {string} options.operator - Operator used for testing.
   * @property {number} options.value - Value to compare against.
   * @property {'warn' | 'error' | 'info'} [options.onFail] - Action to take on failure.
   * @example
   * const ajaxTest = new AjaxTest({
   *   name: 'Check AJAX requests',
   *   type: 'stats',
   *   statistic: 'ajax.requests',
   *   operator: '>',
   *   value: 10,
   *   onFail: 'warn'
   * });
   */
  constructor(options: IAjaxTest) {
    this.name = options.name;
    this.type = options.type ?? 'stats';
    this.statistic = options.statistic;
    this.operator = options.operator;
    this.value = options.value;
    this.onFail = options.onFail ?? 'error';
  }
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
  tests?: IAjaxTest[]; // List of tests to perform
}

/**
 * Class representing the configuration for an AJAX spider.
 * @implements {ISpiderAjax}
 * @class SpiderAjax
 * @property {string} [context] - Name of the context to spider.
 * @property {string} [user] - Optional user for authentication.
 * @property {string} [url] - URL to start spidering from.
 * @property {number} [maxDuration=5] - Max time in minutes the AJAX spider will run, default: 5.
 * @property {number} [maxCrawlDepth=5] - Max depth the crawler can reach, default: 5.
 * @property {number} [numberOfBrowsers=1] - Number of browsers to use, default: 1.
 * @property {boolean} [runOnlyIfModern=false] - Run only if a "modern app" alert is raised, default: false.
 * @property {boolean} [inScopeOnly=true] - Ignore out of scope URLs, default: true.
 * @property {string} [browserId] - Browser ID to use, default: null.
 * @property {boolean} [clickDefaultElems=true] - Click only default elements, default: true.
 * @property {boolean} [clickElemsOnce=true] - Click each element only once, default: true.
 * @property {number} [eventWait=500] - Time to wait after a client-side event, default: 500.
 * @property {number} [maxCrawlStates=100] - Maximum number of crawl states, default: 100.
 * @property {boolean} [randomInputs=false] - Enter random values into input elements, default: false.
 * @property {number} [reloadWait=1000] - Time to wait after the URL is loaded, default: 1000.
 * @property {'Flexible' | 'Strict'} [scopeCheck='Flexible'] - Scope check type, default: 'Flexible'.
 * @property {string[]} [elements] - List of HTML elements to click, default: ['a', 'button', 'input'].
 * @property {IExcludedElement[]} [excludedElements] - List of HTML elements to exclude, default: empty list.
 * @property {IAjaxTest[]} [tests] - List of tests to perform, default: empty list.
 * @example
 * const spiderAjax = new SpiderAjax({
 *   context: 'MyContext',
 *   url: 'https://example.com',
 *   maxDuration: 10,
 *   inScopeOnly: true,
 *   elements: ['a', 'button'],
 *   excludedElements: [
 *     new ExcludedElement({
 *       description: 'Exclude login button',
 *       element: 'button',
 *       text: 'Login'
 *     })
 *   ],
 *   tests: [
 *     new AjaxTest({
 *       name: 'Check AJAX requests',
 *       type: 'stats',
 *       statistic: 'ajax.requests',
 *       operator: '>',
 *       value: 10,
 *       onFail: 'warn'
 *     })
 *   ]
 * });
 */
export class SpiderAjax implements ISpiderAjax {
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
  tests?: IAjaxTest[]; // List of tests to perform
  /**
   * Creates an instance of SpiderAjax.
   * @param {ISpiderAjax} options - The options to initialize the AJAX spider configuration.
   * @property {string} [options.context] - Name of the context to spider.
   * @property {string} [options.user] - Optional user for authentication.
   * @property {string} [options.url] - URL to start spidering from.
   * @property {number} [options.maxDuration=5] - Max time in minutes the AJAX spider will run, default: 5.
   * @property {number} [options.maxCrawlDepth=5] - Max depth the crawler can reach, default: 5.
   * @property {number} [options.numberOfBrowsers=1] - Number of browsers to use, default: 1.
   * @property {boolean} [options.runOnlyIfModern=false] - Run only if a "modern app" alert is raised, default: false.
   * @property {boolean} [options.inScopeOnly=true] - Ignore out of scope URLs, default: true.
   * @property {string} [options.browserId] - Browser ID to use, default: null.
   * @property {boolean} [options.clickDefaultElems=true] - Click only default elements, default: true.
   * @property {boolean} [options.clickElemsOnce=true] - Click each element only once, default: true.
   * @property {number} [options.eventWait=500] - Time to wait after a client-side event, default: 500.
   * @property {number} [options.maxCrawlStates=100] - Maximum number of crawl states, default: 100.
   * @property {boolean} [options.randomInputs=false] - Enter random values into input elements, default: false.
   * @property {number} [options.reloadWait=1000] - Time to wait after the URL is loaded, default: 1000.
   * @property {'Flexible' | 'Strict'} [options.scopeCheck='Flexible'] - Scope check type, default: 'Flexible'.
   * @property {string[]} [options.elements] - List of HTML elements to click, default: ['a', 'button', 'input'].
   * @property {IExcludedElement[]} [options.excludedElements] - List of HTML elements to exclude, default: empty list.
   * @property {IAjaxTest[]} [options.tests] - List of tests to perform, default: empty list.
   * @example
   * const spiderAjax = new SpiderAjax({
   *   context: 'MyContext',
   *   url: 'https://example.com',
   *   maxDuration: 10,
   *   inScopeOnly: true,
   *   elements: ['a', 'button'],
   *   excludedElements: [
   *     new ExcludedElement({
   *       description: 'Exclude login button',
   *       element: 'button',
   *       text: 'Login'
   *     })
   *   ],
   *   tests: [
   *     new AjaxTest({
   *       name: 'Check AJAX requests',
   *       type: 'stats',
   *       statistic: 'ajax.requests',
   *       operator: '>',
   *       value: 10,
   *       onFail: 'warn'
   *     })
   *   ]
   * });
   */
  constructor(options: ISpiderAjax) {
    this.context = options.context;
    this.user = options.user;
    this.url = options.url;
    this.maxDuration = options.maxDuration ?? 5;
    this.maxCrawlDepth = options.maxCrawlDepth ?? 5;
    this.numberOfBrowsers = options.numberOfBrowsers ?? 1;
    this.runOnlyIfModern = options.runOnlyIfModern ?? false;
    this.inScopeOnly = options.inScopeOnly ?? true;
    this.browserId = options.browserId;
    this.clickDefaultElems = options.clickDefaultElems ?? true;
    this.clickElemsOnce = options.clickElemsOnce ?? true;
    this.eventWait = options.eventWait ?? 500;
    this.maxCrawlStates = options.maxCrawlStates ?? 100;
    this.randomInputs = options.randomInputs ?? false;
    this.reloadWait = options.reloadWait ?? 1000;
    this.scopeCheck = options.scopeCheck ?? 'Flexible';
    this.elements = options.elements ?? ['a', 'button', 'input'];
    this.excludedElements = options.excludedElements ?? [];
    this.tests = options.tests ?? [];
  }
}

