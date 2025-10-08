/**
 * @typedef {'Low' | 'Medium' | 'High' | 'Insane'} strength
 * Represents the attack strength levels.
 */
export type strength = 'Low' | 'Medium' | 'High' | 'Insane';
/**
 * @typedef {'Off' | 'Low' | 'Medium' | 'High'} threshold
 * Represents the alert threshold levels.
 */
export type threshold = 'Off' | 'Low' | 'Medium' | 'High';

/**
 * @interface IAlertTag
 * Represents the configuration for alert tags.
 * @property {string[]} [include] - List of alert tags to include, regex supported.
 * @property {string[]} [exclude] - List of alert tags to exclude from the include list, regex supported.
 * @property {strength} [strength] - The Attack Strength for this set of rules, default: Medium.
 * @property {threshold} [threshold] - The Alert Threshold for this set of rules, default: Medium.
 */
export interface IAlertTag {
  include?: string[]; // List of alert tags to include, regex supported
  exclude?: string[]; // List of alert tags to exclude from this include list, regex supported
  strength?: strength; // The Attack Strength for this set of rules, default: Medium
  threshold?: threshold; // The Alert Threshold for this set of rules, default: Medium
}

/**
 * @interface IRule
 * Represents an individual rule in the active scan policy.
 * @property {number} id - The rule id as per https://www.zaproxy.org/docs/alerts/.
 * @property {string} [name] - The name of the rule for documentation purposes - this is not required or actually used.
 * @property {strength} [strength] - The Attack Strength for this rule, default: Medium.
 * @property {threshold} [threshold] - The Alert Threshold for this rule, default: Medium.
 */
export interface IRule {
  id: number; // The rule id as per https://www.zaproxy.org/docs/alerts/
  name?: string; // The name of the rule for documentation purposes - this is not required or actually used
  strength?: strength; // The Attack Strength for this rule, default: Medium
  threshold?: threshold; // The Alert Threshold for this rule, default: Medium
}

/**
 * @interface IActiveScanPolicyDefinition
 * Represents the policy definition for an active scan.
 * @property {number} id - Unique identifier for the policy.
 * @property {string} name - Name of the policy.
 * @property {string} [description] - Description of the policy.
 * @property {Date} createdAt - Creation date of the policy.
 * @property {Date} updatedAt - Last updated date of the policy.
 */
export interface IActiveScanPolicyDefinition {
  id: number; // Unique identifier for the policy
  name: string; // Name of the policy
  description?: string; // Description of the policy
  createdAt: Date; // Creation date of the policy
  updatedAt: Date; // Last updated date of the policy
}

/**
 * @interface IActiveScanPolicyParameters
 * Represents the parameters for an active scan policy.
 * @property {string} name - Name of the policy, mandatory.
 * @property {Object} policyDefinition - The definition of the policy.
 * @property {strength} [policyDefinition.defaultStrength] - Default Attack Strength for all rules, default: Medium.
 * @property {threshold} [policyDefinition.defaultThreshold] - Default Alert Threshold for all rules, default: Medium.
 * @property {IAlertTag} [policyDefinition.alertTags] - Rules based on alert tags.
 * @property {IRule[]} [policyDefinition.rules] - A list of one or more active scan rules.
 */
export interface IActiveScanPolicyParameters {
  name: string; // Name of the policy, mandatory
  policyDefinition: IActiveScanPolicyDefinition;
}

/**
 * @interface IActiveScanPolicy
 * Represents an active scan policy configuration.
 * @property {'activeScan-policy'} type - Defines a new active scan policy.
 * @property {IActiveScanPolicyParameters} parameters - The parameters for the active scan policy configuration.
 * @property {boolean} [enabled] - If set to false the job will not be run, default: true.
 * @property {boolean} [alwaysRun] - If set and the job is enabled then it will run even if the plan exits early, default: false.
 */
export interface IActiveScanPolicy {
  type: 'activeScan-policy'; // Defines a new active scan policy
  parameters: IActiveScanPolicyParameters; // The parameters for the active scan policy configuration
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}
