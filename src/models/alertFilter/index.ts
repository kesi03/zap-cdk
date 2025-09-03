/**
 * @interface IAlertFilter
 * Represents a filter for alerts in the scanning process.
 * @property {number} ruleId - Mandatory, the scan rule ID or the alert reference.
 * @property {'False Positive' | 'Info' | 'Low' | 'Medium' | 'High'} newRisk - Mandatory new risk level.
 * @property {string} [context] - Optional context name; if empty, a global alert filter will be created.
 * @property {string} [url] - Optional string to match against the alert.
 * @property {boolean} [urlRegex] - Optional; if true, then the url is treated as a regex.
 * @property {string} [parameter] - Optional string to match against the alert parameter field.
 * @property {boolean} [parameterRegex] - Optional; if true, then the parameter is treated as a regex.
 * @property {string} [attack] - Optional string to match against the alert attack field.
 * @property {boolean} [attackRegex] - Optional; if true, then the attack is treated as a regex.
 * @property {string} [evidence] - Optional string to match against the alert evidence field.
 * @property {boolean} [evidenceRegex] - Optional; if true, then the evidence is treated as a regex.
 */
export interface IAlertFilter {
  ruleId: number; // Mandatory, the scan rule ID or the alert reference
  newRisk: 'False Positive' | 'Info' | 'Low' | 'Medium' | 'High'; // Mandatory new risk level
  context?: string; // Optional context name, if empty then a global alert filter will be created
  url?: string; // Optional string to match against the alert
  urlRegex?: boolean; // Optional, if true then the url is a regex
  parameter?: string; // Optional string to match against the alert parameter field
  parameterRegex?: boolean; // Optional, if true then the parameter is a regex
  attack?: string; // Optional string to match against the alert attack field
  attackRegex?: boolean; // Optional, if true then the attack is a regex
  evidence?: string; // Optional string to match against the alert evidence field
  evidenceRegex?: boolean; // Optional, if true then the evidence is a regex
}

/**
 * @interface IAlertFilterParameters
 * Represents the parameters for applying alert filters.
 * @property {boolean} [deleteGlobalAlerts] - If true, will delete all existing global alerts, default: false.
 * @property {IAlertFilter[]} alertFilters - A list of alertFilters to be applied.
 */
export interface IAlertFilterParameters {
  deleteGlobalAlerts?: boolean; // Boolean, if true then will delete all existing global alerts, default false
  alertFilters: IAlertFilter[]; // A list of alertFilters to be applied
}
