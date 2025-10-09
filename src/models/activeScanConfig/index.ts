/**
 * Configuration options for scanning URL query strings and Data Driven Nodes (DDNs).
 *
 * @interface IUrlQueryStringAndDataDrivenNodes
 *
 * @property {boolean} [enabled] - If query parameters and DDNs scanning should be enabled. Default: true
 * @property {boolean} [addParam] - If a query parameter should be added if none present. Default: false
 * @property {boolean} [odata] - If OData query filters should be scanned. Default: true
 */
export interface IUrlQueryStringAndDataDrivenNodes {
  /** If query parameters and DDNs scanning should be enabled. Default: true */
  enabled?: boolean;

  /** If a query parameter should be added if none present. Default: false */
  addParam?: boolean;

  /** If OData query filters should be scanned. Default: true */
  odata?: boolean;
}

/**
 * Configuration for JSON body scanning in POST data.
 * @interface IJsonPostData
 * @property {boolean} [enabled] - If JSON scanning should be enabled. Default: true.
 * @property {boolean} [scanNullValues] - If null values should be scanned. Default: false.
 */
export interface IJsonPostData {
  /** If JSON scanning should be enabled. Default: true */
  enabled?: boolean;

  /** If null values should be scanned. Default: false */
  scanNullValues?: boolean;
}

/**
 * Configuration for POST data scanning.
 * @interface IPostData
 * @property {boolean} [enabled] - If enabled. Default: true.
 * @property {boolean} [multiPartFormData] - If multipart form data bodies should be scanned. Default: true.
 * @property {boolean} [xml] - If XML bodies should be scanned. Default: true.
 * @property {IJsonPostData} json - Configuration for JSON bodies.
 * @property {boolean} [googleWebToolkit] - If GWT scanning should be enabled. Default: false.
 * @property {boolean} [directWebRemoting] - If DWR scanning should be enabled. Default: false.
 */
export interface IPostData {
  /** If POST data scanning is enabled. Default: true */
  enabled?: boolean;

  /** If multipart form data bodies should be scanned. Default: true */
  multiPartFormData?: boolean;

  /** If XML bodies should be scanned. Default: true */
  xml?: boolean;

  /** Configuration for JSON bodies */
  json: IJsonPostData;

  /** If GWT scanning should be enabled. Default: false */
  googleWebToolkit?: boolean;

  /** If DWR scanning should be enabled. Default: false */
  directWebRemoting?: boolean;
}

/**
 * Configuration for HTTP header scanning.
 * @interface IHttpHeaders
 * @property {boolean} [enabled] - If HTTP header scanning should be enabled. Default: false.
 * @property {boolean} [allRequests] - If set, then the headers of requests that do not include any parameters will be scanned. Default: false.
 */
export interface IHttpHeaders {
  /** If HTTP header scanning should be enabled. Default: false */
  enabled?: boolean;

  /** If headers of requests without parameters should be scanned. Default: false */
  allRequests?: boolean;
}

/**
 * Configuration for cookie data scanning.
 * @interface ICookieData
 * @property {boolean} [enabled] - If enabled. Default: false.
 * @property {boolean} [encodeCookieValues] - If cookie values should be encoded. Default: false.
 */
export interface ICookieData {
  /** If cookie scanning is enabled. Default: false */
  enabled?: boolean;

  /** If cookie values should be encoded. Default: false */
  encodeCookieValues?: boolean;
}

/**
 * Represents the configuration for input vectors used in an active scan.
 * @interface IInputVectors
 * @property {Object} urlQueryStringAndDataDrivenNodes - Configuration for query parameters and data-driven nodes.
 * @property {boolean} [urlQueryStringAndDataDrivenNodes.enabled] - If query parameters and DDNs scanning should be enabled. Default: true.
 * @property {boolean} [urlQueryStringAndDataDrivenNodes.addParam] - If a query parameter should be added if none present. Default: false.
 * @property {boolean} [urlQueryStringAndDataDrivenNodes.odata] - If OData query filters should be scanned. Default: true.
 * @property {Object} postData - Configuration for POST data scanning.
 * @property {boolean} [postData.enabled] - If enabled. Default: true.
 * @property {boolean} [postData.multiPartFormData] - If multipart form data bodies should be scanned. Default: true.
 * @property {boolean} [postData.xml] - If XML bodies should be scanned. Default: true.
 * @property {Object} postData.json - Configuration for JSON bodies.
 * @property {boolean} [postData.json.enabled] - If JSON scanning should be enabled. Default: true.
 * @property {boolean} [postData.json.scanNullValues] - If null values should be scanned. Default: false.
 * @property {boolean} [postData.googleWebToolkit] - If GWT scanning should be enabled. Default: false.
 * @property {boolean} [postData.directWebRemoting] - If DWR scanning should be enabled. Default: false.
 * @property {boolean} [urlPath] - If URL path segments should be scanned. Default: false.
 * @property {Object} httpHeaders - Configuration for HTTP header scanning.
 * @property {boolean} [httpHeaders.enabled] - If HTTP header scanning should be enabled. Default: false.
 * @property {boolean} [httpHeaders.allRequests] - If set, then the headers of requests that do not include any parameters will be scanned. Default: false.
 * @property {Object} cookieData - Configuration for cookie data scanning.
 * @property {boolean} [cookieData.enabled] - If enabled. Default: false.
 * @property {boolean} [cookieData.encodeCookieValues] - If cookie values should be encoded. Default: false.
 * @property {boolean} [scripts] - If Input Vector scripts should be used. Default: true.
 */
export interface IInputVectors {
  /** Configuration for query parameters and data-driven nodes */
  urlQueryStringAndDataDrivenNodes: IUrlQueryStringAndDataDrivenNodes;

  /** Configuration for POST data scanning */
  postData: IPostData;

  /** If URL path segments should be scanned. Default: false */
  urlPath?: boolean;

  /** Configuration for HTTP header scanning */
  httpHeaders: IHttpHeaders;

  /** Configuration for cookie data scanning */
  cookieData: ICookieData;

  /** If Input Vector scripts should be used. Default: true */
  scripts?: boolean;
}

/**
 * @interface IInputVectors
 * Represents the configuration for input vectors used in an active scan.
 * @property {Object} urlQueryStringAndDataDrivenNodes - Configuration for query parameters and data-driven nodes.
 * @property {boolean} [urlQueryStringAndDataDrivenNodes.enabled] - If query parameters and DDNs scanning should be enabled. Default: true.
 * @property {boolean} [urlQueryStringAndDataDrivenNodes.addParam] - If a query parameter should be added if none present. Default: false.
 * @property {boolean} [urlQueryStringAndDataDrivenNodes.odata] - If OData query filters should be scanned. Default: true.
 * @property {Object} postData - Configuration for POST data scanning.
 * @property {boolean} [postData.enabled] - If enabled. Default: true.
 * @property {boolean} [postData.multiPartFormData] - If multipart form data bodies should be scanned. Default: true.
 * @property {boolean} [postData.xml] - If XML bodies should be scanned. Default: true.
 * @property {Object} postData.json - Configuration for JSON bodies.
 * @property {boolean} [postData.json.enabled] - If JSON scanning should be enabled. Default: true.
 * @property {boolean} [postData.json.scanNullValues] - If null values should be scanned. Default: false.
 * @property {boolean} [postData.googleWebToolkit] - If GWT scanning should be enabled. Default: false.
 * @property {boolean} [postData.directWebRemoting] - If DWR scanning should be enabled. Default: false.
 * @property {boolean} [urlPath] - If URL path segments should be scanned. Default: false.
 * @property {Object} httpHeaders - Configuration for HTTP header scanning.
 * @property {boolean} [httpHeaders.enabled] - If HTTP header scanning should be enabled. Default: false.
 * @property {boolean} [httpHeaders.allRequests] - If set, then the headers of requests that do not include any parameters will be scanned. Default: false.
 * @property {Object} cookieData - Configuration for cookie data scanning.
 * @property {boolean} [cookieData.enabled] - If enabled. Default: false.
 * @property {boolean} [cookieData.encodeCookieValues] - If cookie values should be encoded. Default: false.
 * @property {boolean} [scripts] - If Input Vector scripts should be used. Default: true.
 */
export interface IInputVectors {
  urlQueryStringAndDataDrivenNodes: IUrlQueryStringAndDataDrivenNodes;
  postData: IPostData;
  urlPath?: boolean; // If URL path segments should be scanned. Default: false
  httpHeaders: IHttpHeaders;
  cookieData: ICookieData;
  scripts?: boolean; // If Input Vector scripts should be used. Default: true
}

/**
 * @interface IActiveScanConfigParameters
 * Represents the parameters for configuring an active scan.
 * @property {number} [maxRuleDurationInMins] - The max time in minutes any individual rule will be allowed to run for, default: 0 (unlimited).
 * @property {number} [maxScanDurationInMins] - The max time in minutes the active scanner will be allowed to run for, default: 0 (unlimited).
 * @property {number} [maxAlertsPerRule] - Maximum number of alerts to raise per rule, default: 0 (unlimited).
 * @property {string} [defaultPolicy] - The name of the default scan policy to use, default: Default Policy.
 * @property {boolean} [handleAntiCSRFTokens] - If set, then automatically handle anti CSRF tokens, default: false.
 * @property {boolean} [injectPluginIdInHeader] - If set, then the relevant rule ID will be injected into the X-ZAP-Scan-ID header of each request, default: false.
 * @property {number} [threadPerHost] - The max number of threads per host, default: 2 * Number of available processor cores.
 * @property {IInputVectors} inputVectors - The input vectors used during the active scan.
 */
export interface IActiveScanConfigParameters {
  maxRuleDurationInMins?: number; // The max time in minutes any individual rule will be allowed to run for, default: 0 unlimited
  maxScanDurationInMins?: number; // The max time in minutes the active scanner will be allowed to run for, default: 0 unlimited
  maxAlertsPerRule?: number; // Maximum number of alerts to raise per rule, default: 0 unlimited
  defaultPolicy?: string; // The name of the default scan policy to use, default: Default Policy
  handleAntiCSRFTokens?: boolean; // If set then automatically handle anti CSRF tokens, default: false
  injectPluginIdInHeader?: boolean; // If set then the relevant rule ID will be injected into the X-ZAP-Scan-ID header of each request, default: false
  threadPerHost?: number; // The max number of threads per host, default: 2 * Number of available processor cores
  inputVectors: IInputVectors; // The input vectors used during the active scan
}

/**
 * @interface IActiveScanConfig
 * Represents the configuration for an active scan.
 * @property {'activeScan-config'} type - Configures the settings of the active scanner.
 * @property {IActiveScanConfigParameters} parameters - The parameters for the active scan configuration.
 * @property {string[]} [excludePaths] - An optional list of regexes to exclude.
 * @property {boolean} [enabled] - If set to false, the job will not be run, default: true.
 * @property {boolean} [alwaysRun] - If set and the job is enabled, then it will run even if the plan exits early, default: false.
 */
export interface IActiveScanConfig {
  type: 'activeScan-config'; // Configures the settings of the active scanner
  parameters: IActiveScanConfigParameters; // The parameters for the active scan configuration
  excludePaths?: string[]; // An optional list of regexes to exclude
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}

/**
 * Class representing the configuration options for scanning URL query strings and Data Driven Nodes (DDNs).
 * @implements {IUrlQueryStringAndDataDrivenNodes}
 * @property {boolean} [enabled] - If query parameters and DDNs scanning should be enabled. Default: true
 * @property {boolean} [addParam] - If a query parameter should be added if none present. Default: false
 * @property {boolean} [odata] - If OData query filters should be scanned. Default: true
 * @example
 * const config = new UrlQueryStringAndDataDrivenNodes({ enabled: true, addParam: false, odata: true });
 * console.log(config.enabled); // true
 */
export class UrlQueryStringAndDataDrivenNodes implements IUrlQueryStringAndDataDrivenNodes {
  enabled?: boolean; // If query parameters and DDNs scanning should be enabled, default: true
  addParam?: boolean; // If a query parameter should be added if none present, default: false
  odata?: boolean; // If OData query filters should be scanned, default: true

  /**
   * Creates an instance of UrlQueryStringAndDataDrivenNodes.
   * @param {IUrlQueryStringAndDataDrivenNodes} options - The configuration options.
   * @memberof UrlQueryStringAndDataDrivenNodes
   * @example
   * const config = new UrlQueryStringAndDataDrivenNodes({ enabled: true, addParam: false, odata: true });
   * console.log(config.enabled); // true
   */
  constructor(options: IUrlQueryStringAndDataDrivenNodes = {}) {
    this.enabled = options.enabled ?? true;
    this.addParam = options.addParam || false;
    this.odata = options.odata ?? true;
  }
}

/**
 * Class representing the configuration for JSON body scanning in POST data.
 * @implements {IJsonPostData}
 * @property {boolean} [enabled] - If JSON scanning should be enabled. Default: true.
 * @property {boolean} [scanNullValues] - If null values should be scanned. Default: false.
 * @example
 * const jsonConfig = new JsonPostData({ enabled: true, scanNullValues: false });
 * console.log(jsonConfig.enabled); // true
 */
export class JsonPostData implements IJsonPostData {
  enabled?: boolean; // If JSON scanning should be enabled, default: true
  scanNullValues?: boolean; // If null values should be scanned, default: false

  /**
   * Creates an instance of JsonPostData.
   * @param {IJsonPostData} options - The configuration options for JSON scanning.
   * @memberof JsonPostData
   * @example
   * const jsonConfig = new JsonPostData({ enabled: true, scanNullValues: false });
   * console.log(jsonConfig.enabled); // true
   */
  constructor(options: IJsonPostData = {}) {
    this.enabled = options.enabled ?? true;
    this.scanNullValues = options.scanNullValues || false;
  }
}

/**
 * Class representing the configuration for POST data scanning.
 * @implements {IPostData}
 * @property {boolean} [enabled] - If enabled. Default: true.
 * @property {boolean} [multiPartFormData] - If multipart form data bodies should be scanned. Default: true.
 * @property {boolean} [xml] - If XML bodies should be scanned. Default: true.
 * @property {IJsonPostData} json - Configuration for JSON bodies.
 * @property {boolean} [googleWebToolkit] - If GWT scanning should be enabled. Default: false.
 * @property {boolean} [directWebRemoting] - If DWR scanning should be enabled. Default: false.
 * @example
 * const postDataConfig = new PostData({ enabled: true, multiPartFormData: true, xml: true, json: new JsonPostData(), googleWebToolkit: false, directWebRemoting: false });
 * console.log(postDataConfig.enabled); // true
 */
export class PostData implements IPostData {
  enabled?: boolean; // If enabled, default: true
  multiPartFormData?: boolean; // If multipart form data bodies should be scanned, default: true
  xml?: boolean; // If XML bodies should be scanned, default: true
  json: IJsonPostData; // Configuration for JSON bodies
  googleWebToolkit?: boolean; // If GWT scanning should be enabled, default: false
  directWebRemoting?: boolean; // If DWR scanning should be enabled, default: false

  /**
   * Creates an instance of PostData.
   * @param {IPostData} options - The configuration options for POST data scanning.
   * @memberof PostData
   * @example
   * const postDataConfig = new PostData({ enabled: true, multiPartFormData: true, xml: true, json: new JsonPostData(), googleWebToolkit: false, directWebRemoting: false });
   * console.log(postDataConfig.enabled); // true
   */
  constructor(options: IPostData = { json: new JsonPostData() }) {
    this.enabled = options.enabled ?? true;
    this.multiPartFormData = options.multiPartFormData ?? true;
    this.xml = options.xml ?? true;
    this.json = options.json || new JsonPostData(); // Default to a new instance of JsonPostData
    this.googleWebToolkit = options.googleWebToolkit || false;
    this.directWebRemoting = options.directWebRemoting || false;
  }
}

/**
 * Class representing the configuration for HTTP header scanning.
 * @implements {IHttpHeaders}
 * @property {boolean} [enabled] - If HTTP header scanning should be enabled. Default: false.
 * @property {boolean} [allRequests] - If set, then the headers of requests that do not include any parameters will be scanned. Default: false.
 * @example
 * const headerConfig = new HttpHeaders({ enabled: false, allRequests: false });
 * console.log(headerConfig.enabled); // false
 */
export class HttpHeaders implements IHttpHeaders {
  enabled?: boolean; // If HTTP header scanning should be enabled, default: false
  allRequests?: boolean; // If headers of requests without parameters should be scanned, default: false

  /**
   * Creates an instance of HttpHeaders.
   * @param {IHttpHeaders} options - The configuration options for HTTP header scanning.
   * @memberof HttpHeaders
   * @example
   * const headerConfig = new HttpHeaders({ enabled: false, allRequests: false });
   * console.log(headerConfig.enabled); // false
   */
  constructor(options: IHttpHeaders = {}) {
    this.enabled = options.enabled || false;
    this.allRequests = options.allRequests || false;
  }
}

/**
 * Class representing the configuration for cookie data scanning.
 * @implements {ICookieData}
 * @property {boolean} [enabled] - If enabled. Default: false.
 * @property {boolean} [encodeCookieValues] - If cookie values should be encoded. Default: false.
 * @example
 * const cookieConfig = new CookieData({ enabled: false, encodeCookieValues: false });
 * console.log(cookieConfig.enabled); // false
 */
export class CookieData implements ICookieData {
  enabled?: boolean; // If cookie scanning is enabled, default: false
  encodeCookieValues?: boolean; // If cookie values should be encoded, default: false

  /**
   * Creates an instance of CookieData.
   * @param {ICookieData} options - The configuration options for cookie data scanning.
   * @memberof CookieData
   * @example
   * const cookieConfig = new CookieData({ enabled: false, encodeCookieValues: false });
   * console.log(cookieConfig.enabled); // false
   */
  constructor(options: ICookieData = {}) {
    this.enabled = options.enabled || false;
    this.encodeCookieValues = options.encodeCookieValues || false;
  }
}


/**
 * Class representing the configuration for input vectors used in an active scan.
 * @implements {IInputVectors}
 * @property {Object} urlQueryStringAndDataDrivenNodes - Configuration for query parameters and data-driven nodes.
 * @property {boolean} [urlQueryStringAndDataDrivenNodes.enabled] - If query parameters and DDNs scanning should be enabled. Default: true.
 * @property {boolean} [urlQueryStringAndDataDrivenNodes.addParam] - If a query parameter should be added if none present. Default: false.
 * @property {boolean} [urlQueryStringAndDataDrivenNodes.odata] - If OData query filters should be scanned. Default: true.
 * @property {Object} postData - Configuration for POST data scanning.
 * @property {boolean} [postData.enabled] - If enabled. Default: true.
 * @property {boolean} [postData.multiPartFormData] - If multipart form data bodies should be scanned. Default: true.
 * @property {boolean} [postData.xml] - If XML bodies should be scanned. Default: true.
 * @property {Object} postData.json - Configuration for JSON bodies.
 * @property {boolean} [postData.json.enabled] - If JSON scanning should be enabled. Default: true.
 * @property {boolean} [postData.json.scanNullValues] - If null values should be scanned. Default: false.
 * @property {boolean} [postData.googleWebToolkit] - If GWT scanning should be enabled. Default: false.
 * @property {boolean} [postData.directWebRemoting] - If DWR scanning should be enabled. Default: false.
 * @property {boolean} [urlPath] - If URL path segments should be scanned. Default: false.
 * @property {Object} httpHeaders - Configuration for HTTP header scanning.
 * @property {boolean} [httpHeaders.enabled] - If HTTP header scanning should be enabled. Default: false.
 * @property {boolean} [httpHeaders.allRequests] - If set, then the headers of requests that do not include any parameters will be scanned. Default: false.
 * @property {Object} cookieData - Configuration for cookie data scanning.
 * @property {boolean} [cookieData.enabled] - If enabled. Default: false.
 * @property {boolean} [cookieData.encodeCookieValues] - If cookie values should be encoded. Default: false.
 * @property {boolean} [scripts] - If Input Vector scripts should be used. Default: true.
 * @example
 * const inputVectorsConfig = new InputVectors({
 *   urlQueryStringAndDataDrivenNodes: new UrlQueryStringAndDataDrivenNodes(),
 *   postData: new PostData(),
 */
export class InputVectors implements IInputVectors {
  urlQueryStringAndDataDrivenNodes: IUrlQueryStringAndDataDrivenNodes; // Configuration for query parameters and DDNs
  postData: IPostData; // Configuration for POST data scanning
  urlPath?: boolean; // If URL path segments should be scanned, default: false
  httpHeaders: IHttpHeaders; // Configuration for HTTP header scanning
  cookieData: ICookieData; // Configuration for cookie data scanning
  scripts?: boolean; // If Input Vector scripts should be used, default: true

  /**
   * Creates an instance of InputVectors.
   * @param {IInputVectors} options - The configuration options for input vectors.
   * @memberof InputVectors
   * @example
   * const inputVectorsConfig = new InputVectors({
   *   urlQueryStringAndDataDrivenNodes: new UrlQueryStringAndDataDrivenNodes(),
   *   postData: new PostData(),
   *   urlPath: false,
   *   httpHeaders: new HttpHeaders(),
   *   cookieData: new CookieData(),
   *   scripts: true
   * });
   * console.log(inputVectorsConfig.postData.enabled); // true
   */
  constructor(options: IInputVectors = {
    urlQueryStringAndDataDrivenNodes: new UrlQueryStringAndDataDrivenNodes(),
    postData: new PostData(),
    httpHeaders: new HttpHeaders(),
    cookieData: new CookieData(),
  }) {
    this.urlQueryStringAndDataDrivenNodes = options.urlQueryStringAndDataDrivenNodes || new UrlQueryStringAndDataDrivenNodes();
    this.postData = options.postData || new PostData();
    this.urlPath = options.urlPath || false;
    this.httpHeaders = options.httpHeaders || new HttpHeaders();
    this.cookieData = options.cookieData || new CookieData();
    this.scripts = options.scripts ?? true;
  }
}


/**
 * Class representing the parameters for configuring an active scan.
 * @implements {IActiveScanConfigParameters}
 * @property {number} [maxRuleDurationInMins] - The max time in minutes any individual rule will be allowed to run for, default: 0 (unlimited).
 * @property {number} [maxScanDurationInMins] - The max time in minutes the active scanner will be allowed to run for, default: 0 (unlimited).
 * @property {number} [maxAlertsPerRule] - Maximum number of alerts to raise per rule, default: 0 (unlimited).
 * @property {string} [defaultPolicy] - The name of the default scan policy to use, default: Default Policy.
 * @property {boolean} [handleAntiCSRFTokens] - If set, then automatically handle anti CSRF tokens, default: false.
 * @property {boolean} [injectPluginIdInHeader] - If set, then the relevant rule ID will be injected into the X-ZAP-Scan-ID header of each request, default: false.
 * @property {number} [threadPerHost] - The max number of threads per host, default: 2 * Number of available processor cores.
 * @property {IInputVectors} inputVectors - The input vectors used during the active scan.
 * @example
 * const activeScanConfig = new ActiveScanConfigParameters({
 *   maxRuleDurationInMins: 0,
 *   maxScanDurationInMins: 0,
 *   maxAlertsPerRule: 0,
 *   defaultPolicy: 'Default Policy',
 *   handleAntiCSRFTokens: false,
 *   injectPluginIdInHeader: false,
 *   threadPerHost: 4,
 *   inputVectors: new InputVectors()
 * });
 * console.log(activeScanConfig.defaultPolicy); // 'Default Policy'
 */
export class ActiveScanConfigParameters implements IActiveScanConfigParameters {
  maxRuleDurationInMins?: number; // The max time in minutes any individual rule will be allowed to run for, default: 0 (unlimited)
  maxScanDurationInMins?: number; // The max time in minutes the active scanner will be allowed to run for, default: 0 (unlimited)
  maxAlertsPerRule?: number; // Maximum number of alerts to raise per rule, default: 0 (unlimited)
  defaultPolicy?: string; // The name of the default scan policy to use, default: Default Policy
  handleAntiCSRFTokens?: boolean; // If set, automatically handle anti CSRF tokens, default: false
  injectPluginIdInHeader?: boolean; // If set, inject the relevant rule ID into the X-ZAP-Scan-ID header, default: false
  threadPerHost?: number; // The max number of threads per host, default: 2 * Number of available processor cores
  inputVectors: IInputVectors; // The input vectors used during the active scan

  /**
   * Creates an instance of ActiveScanConfigParameters.
   * @param {IActiveScanConfigParameters} options - The configuration options for the active scan.
   * @memberof ActiveScanConfigParameters
   * @example
   * const activeScanConfig = new ActiveScanConfigParameters({
   *   maxRuleDurationInMins: 0,
   *   maxScanDurationInMins: 0,
   *   maxAlertsPerRule: 0,
   *   defaultPolicy: 'Default Policy',
   *   handleAntiCSRFTokens: false,
   *   injectPluginIdInHeader: false,
   *   threadPerHost: 4,
   *   inputVectors: new InputVectors()
   * });
   * console.log(activeScanConfig.defaultPolicy); // 'Default Policy'
   */
  constructor(options: IActiveScanConfigParameters = { inputVectors: new InputVectors() }) {
    this.maxRuleDurationInMins = options.maxRuleDurationInMins || 0;
    this.maxScanDurationInMins = options.maxScanDurationInMins || 0;
    this.maxAlertsPerRule = options.maxAlertsPerRule || 0;
    this.defaultPolicy = options.defaultPolicy || 'Default Policy';
    this.handleAntiCSRFTokens = options.handleAntiCSRFTokens || false;
    this.injectPluginIdInHeader = options.injectPluginIdInHeader || false;
    this.threadPerHost = options.threadPerHost || 0;
    this.inputVectors = options.inputVectors || new InputVectors();
  }
}

/**
 * Class representing the configuration for an active scan.
 * @implements {IActiveScanConfig}
 * @property {'activeScan-config'} type - Configures the settings of the active scanner.
 * @property {IActiveScanConfigParameters} parameters - The parameters for the active scan configuration.
 * @property {string[]} [excludePaths] - An optional list of regexes to exclude.
 * @property {boolean} [enabled] - If set to false, the job will not be run, default: true.
 * @property {boolean} [alwaysRun] - If set and the job is enabled, then it will run even if the plan exits early, default: false.
 * @example
 * const activeScanConfig = new ActiveScanConfig({
 *   parameters: new ActiveScanConfigParameters(),
 *   excludePaths: ['^/api/health$', '^/static/.*$'],
 *   enabled: true,
 *   alwaysRun: false
 * });
 * console.log(activeScanConfig.type); // 'activeScan-config'
 */
export class ActiveScanConfig implements IActiveScanConfig {
  type: 'activeScan-config'; // Configures the settings of the active scanner
  parameters: IActiveScanConfigParameters; // The parameters for the active scan configuration
  excludePaths?: string[]; // An optional list of regexes to exclude
  enabled?: boolean; // If set to false, the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled, then it will run even if the plan exits early, default: false

  /**
   * Creates an instance of ActiveScanConfig.
   * @param {IActiveScanConfig} options - The configuration options for the active scan.
   * @memberof ActiveScanConfig
   * @example
   * const activeScanConfig = new ActiveScanConfig({
   *   parameters: new ActiveScanConfigParameters(),
   *   excludePaths: ['^/api/health$', '^/static/.*$'],
   *   enabled: true,
   *   alwaysRun: false
   * });
   * console.log(activeScanConfig.type); // 'activeScan-config'
   */
  constructor(options: IActiveScanConfig) {
    this.type = 'activeScan-config'; // Fixed value for active scan config type
    this.parameters = options.parameters;
    this.excludePaths = options.excludePaths || [];
    this.enabled = options.enabled ?? true; // Default to true
    this.alwaysRun = options.alwaysRun || false; // Default to false
  }
}

