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

export interface IActiveScanConfig {
  type: 'activeScan-config'; // Configures the settings of the active scanner
  parameters: IActiveScanConfigParameters; // The parameters for the active scan configuration
  excludePaths?: string[]; // An optional list of regexes to exclude
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}
