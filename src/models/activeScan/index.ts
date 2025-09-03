import { ITest } from '../test';

/**
 * @interface IActiveScanParameters
 * Represents the parameters for an active scan.
 * @property {string} [context] - Name of the context to attack, default: first context.
 * @property {string} [user] - An optional user to use for authentication, must be defined in the environment.
 * @property {string} [url] - The subtree to active scan, default: all URLs of the context.
 * @property {string} [policy] - Name of the scan policy to be used, default: Default Policy.
 * @property {number} [maxRuleDurationInMins] - The max time in minutes any individual rule will be allowed to run for, default: 0 (unlimited).
 * @property {number} [maxScanDurationInMins] - The max time in minutes the active scanner will be allowed to run for, default: 0 (unlimited).
 * @property {boolean} [addQueryParam] - If set, will add an extra query parameter to requests that do not have one, default: false.
 * @property {string} [defaultPolicy] - The name of the default scan policy to use, default: Default Policy.
 * @property {number} [delayInMs] - The delay in milliseconds between each request, default: 0.
 * @property {boolean} [handleAntiCSRFTokens] - If set, then automatically handle anti CSRF tokens, default: false.
 * @property {boolean} [injectPluginIdInHeader] - If set, then the relevant rule Id will be injected into the X-ZAP-Scan-ID header of each request, default: false.
 * @property {boolean} [scanHeadersAllRequests] - If set, then the headers of requests that do not include any parameters will be scanned, default: false.
 * @property {number} [threadPerHost] - The max number of threads per host, default: 2 * Number of available processor cores.
 * @property {number} [maxAlertsPerRule] - Maximum number of alerts to raise per rule, default: 0 (unlimited).
 * @property {ITest[]} [tests] - List of tests to perform.
 */
export interface IActiveScanParameters {
  context?: string; // Name of the context to attack, default: first context
  user?: string; // An optional user to use for authentication, must be defined in the env
  url?: string; // The subtree to active scan, default: all URLs of the context
  policy?: string; // Name of the scan policy to be used, default: Default Policy
  maxRuleDurationInMins?: number; // The max time in minutes any individual rule will be allowed to run for, default: 0 unlimited
  maxScanDurationInMins?: number; // The max time in minutes the active scanner will be allowed to run for, default: 0 unlimited
  addQueryParam?: boolean; // If set will add an extra query parameter to requests that do not have one, default: false
  defaultPolicy?: string; // The name of the default scan policy to use, default: Default Policy
  delayInMs?: number; // The delay in milliseconds between each request, default 0
  handleAntiCSRFTokens?: boolean; // If set then automatically handle anti CSRF tokens, default: false
  injectPluginIdInHeader?: boolean; // If set then the relevant rule Id will be injected into the X-ZAP-Scan-ID header of each request, default: false
  scanHeadersAllRequests?: boolean; // If set then the headers of requests that do not include any parameters will be scanned, default: false
  threadPerHost?: number; // The max number of threads per host, default: 2 * Number of available processor cores
  maxAlertsPerRule?: number; // Maximum number of alerts to raise per rule, default: 0 unlimited
  tests?: ITest[]; // List of tests to perform
}

/**
 * @interface IPolicyDefinition
 * Represents the policy definition for an active scan.
 * @property {string} [defaultStrength] - The default Attack Strength for all rules, one of Low, Medium, High, Insane, default: Medium.
 * @property {string} [defaultThreshold] - The default Alert Threshold for all rules, one of Off, Low, Medium, High, default: Medium.
 * @property {Object} [alertTags] - Configuration for alert tags.
 * @property {string[]} alertTags.include - List of alert tags to include, regex supported.
 * @property {string[]} alertTags.exclude - List of alert tags to exclude from this include list, regex supported.
 * @property {string} [alertTags.strength] - The Attack Strength for this set of rules, one of Low, Medium, High, Insane, default: Medium.
 * @property {string} [alertTags.threshold] - The Alert Threshold for this set of rules, one of Off, Low, Medium, High, default: Medium.
 * @property {Object[]} [rules] - A list of rules for the active scan.
 * @property {number} rules[].id - The rule id as per https://www.zaproxy.org/docs/alerts/.
 * @property {string} [rules[].name] - The name of the rule for documentation purposes - this is not required or actually used.
 * @property {string} [rules[].strength] - The Attack Strength for this rule, one of Low, Medium, High, Insane, default: Medium.
 * @property {string} [rules[].threshold] - The Alert Threshold for this rule, one of Off, Low, Medium, High, default: Medium.
 */
export interface IPolicyDefinition {
  defaultStrength?: string; // The default Attack Strength for all rules, one of Low, Medium, High, Insane, default: Medium
  defaultThreshold?: string; // The default Alert Threshold for all rules, one of Off, Low, Medium, High, default: Medium
  alertTags?: {
    include: string[]; // List of alert tags to include, regex supported
    exclude: string[]; // List of alert tags to exclude from this include list, regex supported
    strength?: string; // The Attack Strength for this set of rules, one of Low, Medium, High, Insane, default: Medium
    threshold?: string; // The Alert Threshold for this set of rules, one of Off, Low, Medium, High, default: Medium
  };
  rules?: {
    id: number; // The rule id as per https://www.zaproxy.org/docs/alerts/
    name?: string; // The name of the rule for documentation purposes - this is not required or actually used
    strength?: string; // The Attack Strength for this rule, one of Low, Medium, High, Insane, default: Medium
    threshold?: string; // The Alert Threshold for this rule, one of Off, Low, Medium, High, default: Medium
  }[];
}

/**
 * @interface IActiveScan
 * Represents an active scan configuration.
 * @property {'activeScan'} type - The active scanner type.
 * @property {IActiveScanParameters} parameters - The parameters for the active scan.
 * @property {IPolicyDefinition} [policyDefinition] - The policy definition - only used if the 'policy' is not set.
 * @property {boolean} [enabled] - If set to false, the job will not be run, default: true.
 * @property {boolean} [alwaysRun] - If set and the job is enabled, then it will run even if the plan exits early, default: false.
 */
export interface IActiveScan {
  type: 'activeScan'; // The active scanner type
  parameters: IActiveScanParameters; // The parameters for the active scan
  policyDefinition?: IPolicyDefinition; // The policy definition - only used if the 'policy' is not set
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}

/**
 * @interface IActiveScanJob
 * Represents an active scan job.
 * @property {IActiveScan} activeScan - The active scan configuration.
 */
export interface IActiveScanJob {
  activeScan: IActiveScan;
}


