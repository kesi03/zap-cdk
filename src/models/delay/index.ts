export interface IDelayParameters {
  time?: string; // The time to wait, format any of ['hh:mm:ss', 'mm:ss', 'ss'], default: 0
  fileName?: string; // Name of a file which will cause the job to end early if created, default: empty
}

export interface IDelay {
  type: 'delay'; // Pause the plan for a set period of time or event
  parameters: IDelayParameters; // The parameters for the delay configuration
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}
