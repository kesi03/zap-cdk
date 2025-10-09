/**
 * @interface IDelayParameters
 * Represents the parameters for configuring a delay in the execution plan.
 * @property {string} [time] - The time to wait, format any of ['hh:mm:ss', 'mm:ss', 'ss'], default: 0.
 * @property {string} [fileName] - Name of a file which will cause the job to end early if created, default: empty.
 */
export interface IDelayParameters {
  time?: string; // The time to wait, format any of ['hh:mm:ss', 'mm:ss', 'ss'], default: 0
  fileName?: string; // Name of a file which will cause the job to end early if created, default: empty
}

export class DelayParameters implements IDelayParameters {
  time?: string; // The time to wait, format any of ['hh:mm:ss', 'mm:ss', 'ss'], default: 0
  fileName?: string; // Name of a file which will cause the job to end early if created, default: empty

  /**
   * Creates an instance of DelayParameters.
   * @param {string} [time] - The time to wait, format any of ['hh:mm:ss', 'mm:ss', 'ss'], default: 0.
   * @param {string} [fileName] - Name of a file which will cause the job to end early if created, default: empty.
   */
  constructor(time?: string, fileName?: string) {
    this.time = time ?? '0';
    this.fileName = fileName ?? '';
  }
}

/**
 * @interface IDelay
 * Represents a delay configuration in the execution plan.
 * @property {'delay'} type - Indicates that this is a delay action.
 * @property {IDelayParameters} parameters - The parameters for the delay configuration.
 * @property {boolean} [enabled] - If set to false, the job will not be run, default: true.
 * @property {boolean} [alwaysRun] - If set and the job is enabled, then it will run even if the plan exits early, default: false.
 */
export interface IDelay {
  type: 'delay'; // Pause the plan for a set period of time or event
  parameters: IDelayParameters; // The parameters for the delay configuration
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}

export class Delay implements IDelay {
  type = 'delay' as const; // Pause the plan for a set period of time or event
  parameters: IDelayParameters; // The parameters for the delay configuration
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false

  /**
   * Creates an instance of Delay.
   * @param {IDelayParameters} parameters - The parameters for the delay configuration.
   * @param {boolean} [enabled=true] - If set to false the job will not be run, default: true.
   * @param {boolean} [alwaysRun=false] - If set and the job is enabled then it will run even if the plan exits early, default: false.
   */
  constructor(parameters: IDelayParameters, enabled = true, alwaysRun = false) {
    this.parameters = parameters;
    this.enabled = enabled ?? true;
    this.alwaysRun = alwaysRun ?? false;
  }
}


