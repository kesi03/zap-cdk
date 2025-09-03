export interface IPassiveScanRule {
  id: number; // The rule id as per https://www.zaproxy.org/docs/alerts/
  name?: string; // The name of the rule for documentation purposes - this is not required or actually used
  threshold?: 'Off' | 'Low' | 'Medium' | 'High'; // The Alert Threshold for this rule, default: Medium
}

export interface IPassiveScanParameters {
  maxAlertsPerRule?: number; // Maximum number of alerts to raise per rule
  scanOnlyInScope?: boolean; // Only scan URLs in scope (recommended)
  maxBodySizeInBytesToScan?: number; // Maximum body size to scan, default: 0 - will scan all messages
  enableTags?: boolean; // Enable passive scan tags, default: false
  disableAllRules?: boolean; // If true then will disable all rules before applying the settings in the rules section
}

export interface IPassiveScanConfig {
  type: 'passiveScan-config'; // Passive scan configuration
  parameters: IPassiveScanParameters; // The parameters for the passive scan configuration
  rules?: IPassiveScanRule[]; // A list of one or more passive scan rules
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}
