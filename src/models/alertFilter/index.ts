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

/**
 * Class representing a filter for alerts in the scanning process.
 * @implements {IAlertFilter}
 * @example
 * const alertFilter = new AlertFilter({
 *   ruleId: 10010,
 *   newRisk: 'Low',
 *   context: 'MyContext',
 *   url: '.*example.*',
 *   urlRegex: true,
 *   parameter: 'sessionid',
 *   parameterRegex: false,
 *   attack: 'SQL Injection',
 *   attackRegex: false,
 *   evidence: 'SELECT',
 *   evidenceRegex: true
 * });
 */
export class AlertFilter implements IAlertFilter {
  ruleId: number; // Mandatory, the scan rule ID or the alert reference
  newRisk: 'False Positive' | 'Info' | 'Low' | 'Medium' | 'High'; // Mandatory new risk level
  context?: string; // Optional context name; if empty, a global alert filter will be created
  url?: string; // Optional string to match against the alert
  urlRegex?: boolean; // Optional; if true, then the url is treated as a regex
  parameter?: string; // Optional string to match against the alert parameter field
  parameterRegex?: boolean; // Optional; if true, then the parameter is treated as a regex
  attack?: string; // Optional string to match against the alert attack field
  attackRegex?: boolean; // Optional; if true, then the attack is treated as a regex
  evidence?: string; // Optional string to match against the alert evidence field
  evidenceRegex?: boolean; // Optional; if true, then the evidence is treated as a regex

  /**
   * Creates an instance of AlertFilter.
   * @param {IAlertFilter} options - The configuration options for the alert filter.
   * @example
   * const alertFilter = new AlertFilter({
   *   ruleId: 10010,
   *   newRisk: 'Low',
   *   context: 'MyContext',
   *   url: '.*example.*',
   *   urlRegex: true,
   *   parameter: 'sessionid',
   *   parameterRegex: false,
   *   attack: 'SQL Injection',
   *   attackRegex: false,
   *   evidence: 'SELECT',
   *   evidenceRegex: true
   * });
   */
  constructor(options: IAlertFilter) {
    this.ruleId = options.ruleId;
    this.newRisk = options.newRisk;
    this.context = options.context;
    this.url = options.url;
    this.urlRegex = options.urlRegex ?? false; // Default to false
    this.parameter = options.parameter;
    this.parameterRegex = options.parameterRegex ?? false; // Default to false
    this.attack = options.attack;
    this.attackRegex = options.attackRegex ?? false; // Default to false
    this.evidence = options.evidence;
    this.evidenceRegex = options.evidenceRegex ?? false; // Default to false
  }
}

export class AlertFilterParameters implements IAlertFilterParameters {
  deleteGlobalAlerts?: boolean; // Boolean, if true then will delete all existing global alerts, default false
  alertFilters: IAlertFilter[]; // A list of alertFilters to be applied

  /**
   * Creates an instance of AlertFilterParameters.
   * @param {IAlertFilterParameters} options - The configuration options for the alert filter parameters.
   * @example
   * const alertFilterParams = new AlertFilterParameters({
   *   deleteGlobalAlerts: true,
   *   alertFilters: [
   *     new AlertFilter({
   *       ruleId: 10010,
   *       newRisk: 'Low',
   *       context: 'MyContext',
   *       url: '.*example.*',
   *       urlRegex: true,
   *       parameter: 'sessionid',
   *       parameterRegex: false,
   *       attack: 'SQL Injection',
   *       attackRegex: false,
   *       evidence: 'SELECT',
   *       evidenceRegex: true
   *     })
   *   ]
   * });
   */
  constructor(options: IAlertFilterParameters) {
    this.deleteGlobalAlerts = options.deleteGlobalAlerts ?? false; // Default to false
    this.alertFilters = options.alertFilters;
  }
}