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
 * @interface IAlertTags
 * Represents the configuration for alert tags.
 * @property {string[]} include - List of alert tags to include, regex supported.
 * @property {string[]} exclude - List of alert tags to exclude from this include list, regex supported.
 * @property {string} [strength] - The Attack Strength for this set of rules, one of Low, Medium, High, Insane, default: Medium.
 * @property {string} [threshold] - The Alert Threshold for this set of rules, one of Off, Low, Medium, High, default: Medium.
 */
export interface IAlertTags {
  include: string[]; // List of alert tags to include, regex supported
  exclude: string[]; // List of alert tags to exclude from this include list, regex supported
  strength?: string; // The Attack Strength for this set of rules, one of Low, Medium, High, Insane, default: Medium
  threshold?: string; // The Alert Threshold for this set of rules, one of Off, Low, Medium, High, default: Medium
}

/**
 *
 * @interface IRules
 * Represents a rule for the active scan.
 * @property {number} id - The rule id as per https://www.zaproxy.org/docs/alerts/.
 * @property {string} [name] - The name of the rule for documentation purposes - this is not required or actually used.
 * @property {string} [strength] - The Attack Strength for this rule, one of Low, Medium, High, Insane, default: Medium.
 * @property {string} [threshold] - The Alert Threshold for this rule, one of Off, Low, Medium, High, default: Medium.
 */
export interface IRules {
  id: number; // The rule id as per https://www.zaproxy.org/docs/alerts/
  name?: string; // The name of the rule for documentation purposes - this is not required or actually used
  strength?: string; // The Attack Strength for this rule, one of Low, Medium, High, Insane, default: Medium
  threshold?: string; // The Alert Threshold for this rule, one of Off, Low, Medium, High, default: Medium
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
  alertTags?: IAlertTags; // Configuration for alert tags
  rules?: IRules[];
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

/**
 * Class representing parameters for an active scan.
 * @implements {IActiveScanParameters}
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
export class ActiveScanParameters implements IActiveScanParameters {
  context?: string; // Name of the context to attack, default: first context
  user?: string; // An optional user to use for authentication, must be defined in the environment
  url?: string; // The subtree to active scan, default: all URLs of the context
  policy?: string; // Name of the scan policy to be used, default: Default Policy
  maxRuleDurationInMins?: number; // The max time in minutes any individual rule will be allowed to run for, default: 0 (unlimited)
  maxScanDurationInMins?: number; // The max time in minutes the active scanner will be allowed to run for, default: 0 (unlimited)
  addQueryParam?: boolean; // If set, will add an extra query parameter to requests without one, default: false
  defaultPolicy?: string; // The name of the default scan policy to use, default: Default Policy
  delayInMs?: number; // The delay in milliseconds between each request, default: 0
  handleAntiCSRFTokens?: boolean; // If set, automatically handle anti CSRF tokens, default: false
  injectPluginIdInHeader?: boolean; // If set, inject the relevant rule Id into the X-ZAP-Scan-ID header, default: false
  scanHeadersAllRequests?: boolean; // If set, scan headers of requests without parameters, default: false
  threadPerHost?: number; // The max number of threads per host, default: 2 * Number of available processor cores
  maxAlertsPerRule?: number; // Maximum number of alerts to raise per rule, default: 0 (unlimited)
  tests?: ITest[]; // List of tests to perform

  /**
   * Creates an instance of ActiveScanParameters.
   * @param {Object} options - The parameters for the active scan.
   * @param {string} [options.context] - Name of the context to attack, default: first context.
   * @param {string} [options.user] - An optional user to use for authentication, must be defined in the environment.
   * @param {string} [options.url] - The subtree to active scan, default: all URLs of the context.
   * @param {string} [options.policy] - Name of the scan policy to be used, default: Default Policy.
   * @param {number} [options.maxRuleDurationInMins] - The max time in minutes any individual rule will be allowed to run for, default: 0 (unlimited).
   * @param {number} [options.maxScanDurationInMins] - The max time in minutes the active scanner will be allowed to run for, default: 0 (unlimited).
   * @param {boolean} [options.addQueryParam] - If set, will add an extra query parameter to requests that do not have one, default: false.
   * @param {string} [options.defaultPolicy] - The name of the default scan policy to use, default: Default Policy.
   * @param {number} [options.delayInMs] - The delay in milliseconds between each request, default: 0.
   * @param {boolean} [options.handleAntiCSRFTokens] - If set, then automatically handle anti CSRF tokens, default: false.
   * @param {boolean} [options.injectPluginIdInHeader] - If set, then the relevant rule Id will be injected into the X-ZAP-Scan-ID header of each request, default: false.
   * @param {boolean} [options.scanHeadersAllRequests] - If set, then the headers of requests that do not include any parameters will be scanned, default: false.
   * @param {number} [options.threadPerHost] - The max number of threads per host, default: 2 * Number of available processor cores.
   * @param {number} [options.maxAlertsPerRule] - Maximum number of alerts to raise per rule, default: 0 (unlimited).
   * @param {ITest[]} [options.tests] - List of tests to perform.
   */
  constructor(options: IActiveScanParameters = {}) {
    this.context = options.context;
    this.user = options.user;
    this.url = options.url;
    this.policy = options.policy || 'Default Policy';
    this.maxRuleDurationInMins = options.maxRuleDurationInMins || 0;
    this.maxScanDurationInMins = options.maxScanDurationInMins || 0;
    this.addQueryParam = options.addQueryParam || false;
    this.defaultPolicy = options.defaultPolicy || 'Default Policy';
    this.delayInMs = options.delayInMs || 0;
    this.handleAntiCSRFTokens = options.handleAntiCSRFTokens || false;
    this.injectPluginIdInHeader = options.injectPluginIdInHeader || false;
    this.scanHeadersAllRequests = options.scanHeadersAllRequests || false;
    this.threadPerHost = options.threadPerHost || 0;
    this.maxAlertsPerRule = options.maxAlertsPerRule || 0;
    this.tests = options.tests || [];
  }
}

/**
 * Class representing the configuration for alert tags.
 * @implements {IAlertTags}
 * @property {string[]} include - List of alert tags to include, regex supported.
 * @property {string[]} exclude - List of alert tags to exclude from this include list, regex supported.
 * @property {string} [strength] - The Attack Strength for this set of rules, one of Low, Medium, High, Insane, default: Medium.
 * @property {string} [threshold] - The Alert Threshold for this set of rules, one of Off, Low, Medium, High, default: Medium.
 */
export class AlertTags implements IAlertTags {
  include: string[]; // List of alert tags to include, regex supported
  exclude: string[]; // List of alert tags to exclude from this include list, regex supported
  strength?: string; // The Attack Strength for this set of rules, default: Medium
  threshold?: string; // The Alert Threshold for this set of rules, default: Medium

  /**
   * Creates an instance of AlertTags.
   * @param {Object} options - The configuration for alert tags.
   * @param {string[]} options.include - List of alert tags to include, regex supported.
   * @param {string[]} options.exclude - List of alert tags to exclude from this include list, regex supported.
   * @param {string} [options.strength] - The Attack Strength for this set of rules, one of Low, Medium, High, Insane, default: Medium.
   * @param {string} [options.threshold] - The Alert Threshold for this set of rules, one of Off, Low, Medium, High, default: Medium.
   */
  constructor(options: IAlertTags) {
    this.include = options.include;
    this.exclude = options.exclude;
    this.strength = options.strength || 'Medium';
    this.threshold = options.threshold || 'Medium';
  }
}

/**
 * Class representing a rule for the active scan.
 * @implements {IRules}
 * @property {number} id - The rule id as per https://www.zaproxy.org/docs/alerts/.
 * @property {string} [name] - The name of the rule for documentation purposes - this is not required or actually used.
 * @property {string} [strength] - The Attack Strength for this rule, one of Low, Medium, High, Insane, default: Medium.
 * @property {string} [threshold] - The Alert Threshold for this rule, one of Off, Low, Medium, High, default: Medium.
 */
export class Rules implements IRules {
  id: number; // The rule id as per https://www.zaproxy.org/docs/alerts/
  name?: string; // The name of the rule for documentation purposes - optional
  strength?: string; // The Attack Strength for this rule, default: Medium
  threshold?: string; // The Alert Threshold for this rule, default: Medium

  /**
   * Creates an instance of Rules.
   * @param {Object} options - The rule details.
   * @param {number} options.id - The rule id as per https://www.zaproxy.org/docs/alerts/.
   * @param {string} [options.name] - The name of the rule for documentation purposes - this is not required or actually used.
   * @param {string} [options.strength] - The Attack Strength for this rule, one of Low, Medium, High, Insane, default: Medium.
   * @param {string} [options.threshold] - The Alert Threshold for this rule, one of Off, Low, Medium, High, default: Medium.
   */
  constructor(options: IRules) {
    this.id = options.id;
    this.name = options.name;
    this.strength = options.strength || 'Medium';
    this.threshold = options.threshold || 'Medium';
  }
}

/**
 * Class representing the policy definition for an active scan.
 * @implements {IPolicyDefinition}
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
export class PolicyDefinition implements IPolicyDefinition {
  defaultStrength?: string; // The default Attack Strength for all rules, default: Medium
  defaultThreshold?: string; // The default Alert Threshold for all rules, default: Medium
  alertTags?: IAlertTags; // Configuration for alert tags
  rules?: IRules[]; // A list of rules for the active scan

  /**
   * Creates an instance of PolicyDefinition.
   * @param {Object} options - The policy definition details.
   * @param {string} [options.defaultStrength] - The default Attack Strength for all rules, one of Low, Medium, High, Insane, default: Medium.
   * @param {string} [options.defaultThreshold] - The default Alert Threshold for all rules, one of Off, Low, Medium, High, default: Medium.
   * @param {Object} [options.alertTags] - Configuration for alert tags.
   * @param {string[]} options.alertTags.include - List of alert tags to include, regex supported.
   * @param {string[]} options.alertTags.exclude - List of alert tags to exclude from this include list, regex supported.
   * @param {string} [options.alertTags.strength] - The Attack Strength for this set of rules, one of Low, Medium, High, Insane, default: Medium.
   * @param {string} [options.alertTags.threshold] - The Alert Threshold for this set of rules, one of Off, Low, Medium, High, default: Medium.
   * @param {Object[]} [options.rules] - A list of rules for the active scan.
   * @param {number} options.rules[].id - The rule id as per https://www.zaproxy.org/docs/alerts/.
   * @param {string} [options.rules[].name] - The name of the rule for documentation purposes - this is not required or actually used.
   * @param {string} [options.rules[].strength] - The Attack Strength for this rule, one of Low, Medium, High, Insane, default: Medium.
   * @param {string} [options.rules[].threshold] - The Alert Threshold for this rule, one of Off, Low, Medium, High, default: Medium.
   */
  constructor(options: IPolicyDefinition= {}) {
    this.defaultStrength = options.defaultStrength || 'Medium';
    this.defaultThreshold = options.defaultThreshold || 'Medium';
    this.alertTags = options.alertTags;
    this.rules = options.rules || [];
  }
}

/**
 * Class representing an active scan configuration.
 * @implements {IActiveScan}
 * @property {string} type - The active scanner type, fixed value 'activeScan'.
 * @property {IActiveScanParameters} parameters - The parameters for the active scan.
 * @property {IPolicyDefinition} [policyDefinition] - The policy definition, used only if the 'policy' is not set.
 * @property {boolean} [enabled] - If set to false, the job will not run, default: true.
 * @property {boolean} [alwaysRun] - If set and the job is enabled, it will run even if the plan exits early, default: false.
 */
export class ActiveScan implements IActiveScan {
  type: 'activeScan'; // The active scanner type
  parameters: IActiveScanParameters; // The parameters for the active scan
  policyDefinition?: IPolicyDefinition; // The policy definition, used only if the 'policy' is not set
  enabled?: boolean; // If set to false, the job will not run, default: true
  alwaysRun?: boolean; // If set and the job is enabled, it will run even if the plan exits early, default: false

  /**
   * Creates an instance of ActiveScan.
   * @param {Object} options - The active scan configuration details.
   * @param {IActiveScanParameters} options.parameters - The parameters for the active scan.
   * @param {IPolicyDefinition} [options.policyDefinition] - The policy definition - only used if the 'policy' is not set.
   * @param {boolean} [options.enabled] - If set to false, the job will not be run, default: true.
   * @param {boolean} [options.alwaysRun] - If set and the job is enabled, then it will run even if the plan exits early, default: false.
   */
  constructor(options: IActiveScan) {
    this.type = 'activeScan'; // Fixed value for active scan type
    this.parameters = options.parameters;
    this.policyDefinition = options.policyDefinition;
    this.enabled = options.enabled ?? true; // Default to true
    this.alwaysRun = options.alwaysRun ?? false; // Default to false
  }
}