/**
 * @interface IPassiveScanRule
 * Represents a passive scan rule configuration.
 * @property {number} id - The rule id as per https://www.zaproxy.org/docs/alerts/.
 * @property {string} [name] - The name of the rule for documentation purposes - this is not required or actually used.
 * @property {'Off' | 'Low' | 'Medium' | 'High'} [threshold] - The Alert Threshold for this rule, default: Medium.
 */
export interface IPassiveScanRule {
  id: number; // The rule id as per https://www.zaproxy.org/docs/alerts/
  name?: string; // The name of the rule for documentation purposes - this is not required or actually used
  threshold?: 'Off' | 'Low' | 'Medium' | 'High'; // The Alert Threshold for this rule, default: Medium
}

/**
 * Class representing a passive scan rule configuration.
 * @implements {IPassiveScanRule}
 * @class PassiveScanRule
 * @example
 * const passiveScanRule = new PassiveScanRule({
 *   id: 10010,
 *   name: 'Cross-Domain Misconfiguration',
 *   threshold: 'Medium'
 * });
 */
export class PassiveScanRule implements IPassiveScanRule {
  id: number; // The rule id as per https://www.zaproxy.org/docs/alerts/
  name?: string; // The name of the rule for documentation purposes - this is not required or actually used
  threshold?: 'Off' | 'Low' | 'Medium' | 'High'; // The Alert Threshold for this rule, default: Medium

  /**
   * Creates an instance of PassiveScanRule.
   * @param {IPassiveScanRule} options - The options to initialize the passive scan rule.
   * @property {number} options.id - The rule id as per https://www.zaproxy.org/docs/alerts/.
   * @property {string} [options.name] - The name of the rule for documentation purposes - this is not required or actually used.
   * @property {'Off' | 'Low' | 'Medium' | 'High'} [options.threshold='Medium'] - The Alert Threshold for this rule, default: Medium.
   */
  constructor(options: IPassiveScanRule) {
    this.id = options.id;
    this.name = options.name;
    this.threshold = options.threshold ?? 'Medium';
  }
}

/**
 * @interface IPassiveScanParameters
 * Represents the parameters for configuring a passive scan.
 * @property {number} [maxAlertsPerRule] - Maximum number of alerts to raise per rule.
 * @property {boolean} [scanOnlyInScope] - Only scan URLs in scope (recommended).
 * @property {number} [maxBodySizeInBytesToScan] - Maximum body size to scan, default: 0 - will scan all messages.
 * @property {boolean} [enableTags] - Enable passive scan tags, default: false.
 * @property {boolean} [disableAllRules] - If true, then will disable all rules before applying the settings in the rules section.
 */
export interface IPassiveScanParameters {
  maxAlertsPerRule?: number; // Maximum number of alerts to raise per rule
  scanOnlyInScope?: boolean; // Only scan URLs in scope (recommended)
  maxBodySizeInBytesToScan?: number; // Maximum body size to scan, default: 0 - will scan all messages
  enableTags?: boolean; // Enable passive scan tags, default: false
  disableAllRules?: boolean; // If true then will disable all rules before applying the settings in the rules section
}

/**
 * Class representing the parameters for configuring a passive scan.
 * @implements {IPassiveScanParameters}
 * @class PassiveScanParameters
 * @example
 * const passiveScanParams = new PassiveScanParameters({
 *   maxAlertsPerRule: 5,
 *   scanOnlyInScope: true,
 *   maxBodySizeInBytesToScan: 0,
 *   enableTags: false,
 *   disableAllRules: true
 * });
 */
export class PassiveScanParameters implements IPassiveScanParameters {
  maxAlertsPerRule?: number; // Maximum number of alerts to raise per rule
  scanOnlyInScope?: boolean; // Only scan URLs in scope (recommended)
  maxBodySizeInBytesToScan?: number; // Maximum body size to scan, default: 0 - will scan all messages
  enableTags?: boolean; // Enable passive scan tags, default: false
  disableAllRules?: boolean; // If true then will disable all rules before applying the settings in the rules section

  /**
   * Creates an instance of PassiveScanParameters.
   * @param {IPassiveScanParameters} options - The options to initialize the passive scan parameters.
   * @property {number} [options.maxAlertsPerRule] - Maximum number of alerts to raise per rule.
   * @property {boolean} [options.scanOnlyInScope] - Only scan URLs in scope (recommended).
   * @property {number} [options.maxBodySizeInBytesToScan] - Maximum body size to scan, default: 0 - will scan all messages.
   * @property {boolean} [options.enableTags] - Enable passive scan tags, default: false.
   * @property {boolean} [options.disableAllRules] - If true, then will disable all rules before applying the settings in the rules section.
   */
  constructor(options: IPassiveScanParameters) {
    this.maxAlertsPerRule = options.maxAlertsPerRule;
    this.scanOnlyInScope = options.scanOnlyInScope;
    this.maxBodySizeInBytesToScan = options.maxBodySizeInBytesToScan ?? 0;
    this.enableTags = options.enableTags ?? false;
    this.disableAllRules = options.disableAllRules ?? false;
  }
}

/**
 * @interface IPassiveScanConfig
 * Represents the configuration for a passive scan.
 * @property {'passiveScan-config'} type - Passive scan configuration.
 * @property {IPassiveScanParameters} parameters - The parameters for the passive scan configuration.
 * @property {IPassiveScanRule[]} [rules] - A list of one or more passive scan rules.
 * @property {boolean} [enabled] - If set to false, the job will not be run, default: true.
 * @property {boolean} [alwaysRun] - If set and the job is enabled, then it will run even if the plan exits early, default: false.
 */
export interface IPassiveScanConfig {
  type: 'passiveScan-config'; // Passive scan configuration
  parameters: IPassiveScanParameters; // The parameters for the passive scan configuration
  rules?: IPassiveScanRule[]; // A list of one or more passive scan rules
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}

/**
 * Class representing the passive scan configuration.
 * @implements {IPassiveScanConfig}
 * @class PassiveScanConfig
 * @example
 * const passiveScanConfig = new PassiveScanConfig({
 *   parameters: {
 *     maxAlertsPerRule: 5,
 *     scanOnlyInScope: true,
 *     maxBodySizeInBytesToScan: 0,
 *     enableTags: false,
 *     disableAllRules: true
 *   },
 *   rules: [
 *     { id: 10010, name: 'Cross-Domain Misconfiguration', threshold: 'Medium' },
 *     { id: 10011, name: 'CSP Header Not Set', threshold: 'High' }
 *   ],
 *   enabled: true,
 *   alwaysRun: false
 * });
 */
export class PassiveScanConfig implements IPassiveScanConfig {
  type = 'passiveScan-config' as const; // Passive scan configuration
  parameters: IPassiveScanParameters; // The parameters for the passive scan configuration
  rules?: IPassiveScanRule[]; // A list of one or more passive scan rules
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false

  /**
   * Creates an instance of PassiveScanConfig.
   * @param {IPassiveScanConfig} options - The options to initialize the passive scan configuration.
   * @property {IPassiveScanParameters} options.parameters - The parameters for the passive scan configuration.
   * @property {IPassiveScanRule[]} [options.rules] - A list of one or more passive scan rules.
   * @property {boolean} [options.enabled=true] - If set to false, the job will not be run, default: true.
   * @property {boolean} [options.alwaysRun=false] - If set and the job is enabled, then it will run even if the plan exits early, default: false.
   */
  constructor(options: IPassiveScanConfig) {
    this.parameters = options.parameters;
    this.rules = options.rules ?? [];
    this.enabled = options.enabled ?? true;
    this.alwaysRun = options.alwaysRun ?? false;
  }
}

