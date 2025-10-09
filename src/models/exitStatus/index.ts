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

/**
 * Represents the parameters for configuring exit status in the scanning process.
 * @implements {IExitStatusParameters}
 * @example
 * const exitStatusParams = new ExitStatusParameters({
 *   errorLevel: 'High',
 *   warnLevel: 'Medium',
 *   okExitValue: 0,
 *   errorExitValue: 1,
 *   warnExitValue: 2
 * });
 */
export class ExitStatusParameters implements IExitStatusParameters {
  errorLevel?: 'Informational' | 'Low' | 'Medium' | 'High'; // Informational, Low, Medium, High, default: not set
  warnLevel?: 'Informational' | 'Low' | 'Medium' | 'High'; // Informational, Low, Medium, High, default: not set
  okExitValue?: number; // Exit value if all is ok, default: 0
  errorExitValue?: number; // Exit value if there are errors, default: 1
  warnExitValue?: number; // Exit value if there are warnings, default: 2

  /**
   * Creates an instance of ExitStatusParameters.
   * @param {IExitStatusParameters} options - The options to initialize the exit status parameters.
   * @property {string} [options.errorLevel] - The error level, default: not set.
   * @property {string} [options.warnLevel] - The warning level, default: not set.
   * @property {number} [options.okExitValue] - Exit value if all is ok, default: 0.
   * @property {number} [options.errorExitValue] - Exit value if there are errors, default: 1.
   * @property {number} [options.warnExitValue] - Exit value if there are warnings, default: 2.
   */
  constructor(options: IExitStatusParameters) {
    this.errorLevel = options.errorLevel;
    this.warnLevel = options.warnLevel;
    this.okExitValue = options.okExitValue ?? 0; // default to 0
    this.errorExitValue = options.errorExitValue ?? 1; // default to 1
    this.warnExitValue = options.warnExitValue ?? 2; // default to 2
  }
}

/**
 * Represents the exit status configuration for the scanning process.
 */
export class ExitStatus implements IExitStatus {
  type = 'exitStatus' as const; // Sets the exit code based on scan results
  parameters: IExitStatusParameters; // The parameters for the exit status configuration
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled, it will run even if the plan exits early, default: false

  /**
   * Creates an instance of ExitStatus.
   * @param {ExitStatusParameters} parameters - The parameters for the exit status configuration.
   * @param {boolean} [enabled=true] - If set to false the job will not be run, default: true.
   * @param {boolean} [alwaysRun=false] - If set and the job is enabled, then it will run even if the plan exits early, default: false.
   */
  constructor(options: IExitStatus) {
    this.parameters = options.parameters;
    this.enabled = options.enabled ?? true;
    this.alwaysRun = options.alwaysRun ?? false;
  }
}

