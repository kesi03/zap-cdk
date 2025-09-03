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

export interface IAlertFilterParameters {
  deleteGlobalAlerts?: boolean; // Boolean, if true then will delete all existing global alerts, default false
  alertFilters: IAlertFilter[]; // A list of alertFilters to be applied
}
