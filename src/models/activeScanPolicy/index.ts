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


/**
 * Class representing the configuration for alert tags.
 * @implements {IAlertTag}
 * @class AlertTag
 * @property {string[]} [include] - List of alert tags to include, regex supported.
 * @property {string[]} [exclude] - List of alert tags to exclude from the include list, regex supported.
 * @property {strength} [strength] - The Attack Strength for this set of rules, default: Medium.
 * @property {threshold} [threshold] - The Alert Threshold for this set of rules, default: Medium.
 */
export class AlertTag implements IAlertTag {
  include?: string[]; // List of alert tags to include, regex supported
  exclude?: string[]; // List of alert tags to exclude from this include list, regex supported
  strength?: strength; // The Attack Strength for this set of rules, default: Medium
  threshold?: threshold; // The Alert Threshold for this set of rules, default: Medium

  /**
   * Creates an instance of AlertTag.
   * @param {IAlertTag} options - The configuration options for alert tags.
   * @property {string[]} [options.include] - List of alert tags to include, regex supported.
   * @property {string[]} [options.exclude] - List of alert tags to exclude from the include list, regex supported.
   * @property {strength} [options.strength] - The Attack Strength for this set of rules, default: Medium.
   * @property {threshold} [options.threshold] - The Alert Threshold for this set of rules, default: Medium.
   */
  constructor(options: IAlertTag = {}) {
    this.include = options.include || [];
    this.exclude = options.exclude || [];
    this.strength = options.strength; // Defaults to undefined
    this.threshold = options.threshold; // Defaults to undefined
  }
}


/**
 * Class representing an individual rule in the active scan policy.
 * @implements {IRule}
 * @class Rule
 * @property {number} id - The rule id as per https://www.zaproxy.org/docs/alerts/.
 * @property {string} [name] - The name of the rule for documentation purposes - optional.
 * @property {strength} [strength] - The Attack Strength for this rule, default: Medium.
 * @property {threshold} [threshold] - The Alert Threshold for this rule, default: Medium.
 */
export class Rule implements IRule {
  id: number; // The rule id as per https://www.zaproxy.org/docs/alerts/
  name?: string; // The name of the rule for documentation purposes - optional
  strength?: strength; // The Attack Strength for this rule, default: Medium
  threshold?: threshold; // The Alert Threshold for this rule, default: Medium

  /**
   * Creates an instance of Rule.
   * @param {IRule} options - The configuration options for the rule.
   * @property {number} options.id - The rule id as per https://www.zaproxy.org/docs/alerts/.
   * @property {string} [options.name] - The name of the rule for documentation purposes - optional.
   * @property {strength} [options.strength] - The Attack Strength for this rule, default: Medium.
   * @property {threshold} [options.threshold] - The Alert Threshold for this rule, default: Medium.
   */
  constructor(options: IRule) {
    this.id = options.id;
    this.name = options.name;
    this.strength = options.strength; // Defaults to undefined
    this.threshold = options.threshold; // Defaults to undefined
  }
}

/**
 * Class representing the policy definition for an active scan.
 * @implements {IActiveScanPolicyDefinition}
 * @class ActiveScanPolicyDefinition
 * @property {number} id - Unique identifier for the policy.
 * @property {string} name - Name of the policy.
 * @property {string} [description] - Description of the policy.
 * @property {Date} createdAt - Creation date of the policy.
 * @property {Date} updatedAt - Last updated date of the policy.
 */
export class ActiveScanPolicyDefinition implements IActiveScanPolicyDefinition {
  id: number; // Unique identifier for the policy
  name: string; // Name of the policy
  description?: string; // Description of the policy
  createdAt: Date; // Creation date of the policy
  updatedAt: Date; // Last updated date of the policy

  /**
   * Creates an instance of ActiveScanPolicyDefinition.
   * @param {IActiveScanPolicyDefinition} options - The configuration options for the policy definition.
   * @property {number} options.id - Unique identifier for the policy.
   * @property {string} options.name - Name of the policy.
   * @property {string} [options.description] - Description of the policy.
   * @property {Date} options.createdAt - Creation date of the policy.
   * @property {Date} options.updatedAt - Last updated date of the policy.
   */
  constructor(options: IActiveScanPolicyDefinition) {
    this.id = options.id;
    this.name = options.name;
    this.description = options.description; // Defaults to undefined
    this.createdAt = options.createdAt ?? new Date();
    this.updatedAt = options.updatedAt ?? new Date();
  }
}


/**
 * Class representing the parameters for an active scan policy.
 * @implements {IActiveScanPolicyParameters}
 * @class ActiveScanPolicyParameters
 * @property {string} name - Name of the policy, mandatory.
 * @property {ActiveScanPolicyDefinition} policyDefinition - The definition of the policy.
 */
export class ActiveScanPolicyParameters implements IActiveScanPolicyParameters {
  name: string; // Name of the policy, mandatory
  policyDefinition: IActiveScanPolicyDefinition; // The definition of the policy

  /**
   * Creates an instance of ActiveScanPolicyParameters.
   * @param {IActiveScanPolicyParameters} options - The configuration options for the active scan policy parameters.
   * @property {string} options.name - Name of the policy, mandatory.
   * @property {IActiveScanPolicyDefinition} options.policyDefinition - The definition of the policy.
   * @throws {Error} If the name property is not provided.
   */
  constructor(options: IActiveScanPolicyParameters) {
    if (!options.name) {
      throw new Error('The name property is required.');
    }
    this.name = options.name;
    this.policyDefinition = new ActiveScanPolicyDefinition(options.policyDefinition);
  }
}


/**
 * Class representing an active scan policy configuration.
 * @implements {IActiveScanPolicy}
 * @class ActiveScanPolicy
 * @property {'activeScan-policy'} type - Defines a new active scan policy.
 * @property {ActiveScanPolicyParameters} parameters - The parameters for the active scan policy configuration.
 * @property {boolean} [enabled] - If set to false the job will not be run, default: true.
 * @property {boolean} [alwaysRun] - If set and the job is enabled then it will run even if the plan exits early, default: false.
 */
export class ActiveScanPolicy implements IActiveScanPolicy {
  type: 'activeScan-policy'; // Defines a new active scan policy
  parameters: IActiveScanPolicyParameters; // The parameters for the active scan policy configuration
  enabled?: boolean; // If set to false, the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled, it will run even if the plan exits early, default: false

  /**
   * Creates an instance of ActiveScanPolicy.
   * @param {IActiveScanPolicy} options - The configuration options for the active scan policy.
   * @property {IActiveScanPolicyParameters} options.parameters - The parameters for the active scan policy configuration.
   * @property {boolean} [options.enabled] - If set to false the job will not be run, default: true.
   * @property {boolean} [options.alwaysRun] - If set and the job is enabled then it will run even if the plan exits early, default: false.
   * @throws {Error} If the parameters property is not provided.
   */
  constructor(options: IActiveScanPolicy) {
    this.type = 'activeScan-policy'; // Fixed value for active scan policy type
    this.parameters = new ActiveScanPolicyParameters(options.parameters);
    this.enabled = options.enabled ?? true; // Default to true if not provided
    this.alwaysRun = options.alwaysRun ?? false; // Default to false if not provided
  }
}
