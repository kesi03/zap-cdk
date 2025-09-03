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
