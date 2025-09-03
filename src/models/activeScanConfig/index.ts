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
  urlQueryStringAndDataDrivenNodes: {
    enabled?: boolean; // If query parameters and DDNs scanning should be enabled. Default: true
    addParam?: boolean; // If a query parameter should be added if none present. Default: false
    odata?: boolean; // If OData query filters should be scanned. Default: true
  };
  postData: {
    enabled?: boolean; // If enabled. Default: true
    multiPartFormData?: boolean; // If multipart form data bodies should be scanned. Default: true
    xml?: boolean; // If XML bodies should be scanned. Default: true
    json: {
      enabled?: boolean; // If JSON scanning should be enabled. Default: true
      scanNullValues?: boolean; // If null values should be scanned. Default: false
    };
    googleWebToolkit?: boolean; // If GWT scanning should be enabled. Default: false
    directWebRemoting?: boolean; // If DWR scanning should be enabled. Default: false
  };
  urlPath?: boolean; // If URL path segments should be scanned. Default: false
  httpHeaders: {
    enabled?: boolean; // If HTTP header scanning should be enabled. Default: false
    allRequests?: boolean; // If set then the headers of requests that do not include any parameters will be scanned. Default: false
  };
  cookieData: {
    enabled?: boolean; // If enabled. Default: false
    encodeCookieValues?: boolean; // If cookie values should be encoded. Default: false
  };
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
