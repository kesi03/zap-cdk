export interface IExcludedElement {
  description: string; // Description of the exclusion
  element: string; // Name of the element
  xpath?: string; // Optional XPath of the element
  text?: string; // Optional text of the element (exact match and case sensitive)
  attributeName?: string; // Optional name of the attribute
  attributeValue?: string; // Optional value of the attribute
}

export interface ITest {
  name: string; // Name of the test
  type: 'stats'; // Type of test, only 'stats' is supported for now
  statistic: string; // Name of an integer / long statistic
  operator: string; // Operator used for testing
  value: number; // Value to compare against
  onFail?: 'warn' | 'error' | 'info'; // Action to take on failure
}

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
