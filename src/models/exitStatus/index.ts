/**
 * @interface IExitStatusParameters
 * Represents the parameters for configuring exit status in the scanning process.
 * @property {'Informational' | 'Low' | 'Medium' | 'High'} [errorLevel] - The error level, default: not set.
 * @property {'Informational' | 'Low' | 'Medium' | 'High'} [warnLevel] - The warning level, default: not set.
 * @property {number} [okExitValue] - Exit value if all is ok, default: 0.
 * @property {number} [errorExitValue] - Exit value if there are errors, default: 1.
 * @property {number} [warnExitValue] - Exit value if there are warnings, default: 2.
 */
export interface IExitStatusParameters {
  errorLevel?: 'Informational' | 'Low' | 'Medium' | 'High'; // Informational, Low, Medium, High, default: not set
  warnLevel?: 'Informational' | 'Low' | 'Medium' | 'High'; // Informational, Low, Medium, High, default: not set
  okExitValue?: number; // Exit value if all ok, default 0
  errorExitValue?: number; // Exit value if there are errors, default 1
  warnExitValue?: number; // Exit value if there are warnings, default 2
}

/**
 * @interface IExitStatus
 * Represents the exit status configuration for the scanning process.
 * @property {'exitStatus'} type - Sets the exit code based on scan results.
 * @property {IExitStatusParameters} parameters - The parameters for the exit status configuration.
 * @property {boolean} [enabled] - If set to false, the job will not be run, default: true.
 * @property {boolean} [alwaysRun] - If set and the job is enabled, then it will run even if the plan exits early, default: false.
 */
export interface IExitStatus {
  type: 'exitStatus'; // Sets the exit code based on scan results
  parameters: IExitStatusParameters; // The parameters for the exit status configuration
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}
