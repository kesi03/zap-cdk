export type strength = 'Low' | 'Medium' | 'High' | 'Insane';
export type threshold = 'Off' | 'Low' | 'Medium' | 'High';

export interface IAlertTag {
  include?: string[]; // List of alert tags to include, regex supported
  exclude?: string[]; // List of alert tags to exclude from this include list, regex supported
  strength?: strength; // The Attack Strength for this set of rules, default: Medium
  threshold?: threshold; // The Alert Threshold for this set of rules, default: Medium
}

export interface IRule {
  id: number; // The rule id as per https://www.zaproxy.org/docs/alerts/
  name?: string; // The name of the rule for documentation purposes - this is not required or actually used
  strength?: strength; // The Attack Strength for this rule, default: Medium
  threshold?: threshold; // The Alert Threshold for this rule, default: Medium
}

export interface IActiveScanPolicyParameters {
  name: string; // Name of the policy, mandatory
  policyDefinition: {
    defaultStrength?: strength; // Default Attack Strength for all rules, default: Medium
    defaultThreshold?: threshold; // Default Alert Threshold for all rules, default: Medium
    alertTags?: IAlertTag; // Rules based on alert tags
    rules?: IRule[]; // A list of one or more active scan rules
  };
}

export interface IActiveScanPolicy {
  type: 'activeScan-policy'; // Defines a new active scan policy
  parameters: IActiveScanPolicyParameters; // The parameters for the active scan policy configuration
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}
