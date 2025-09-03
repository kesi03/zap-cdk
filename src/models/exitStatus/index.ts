export interface IExitStatusParameters {
  errorLevel?: 'Informational' | 'Low' | 'Medium' | 'High'; // Informational, Low, Medium, High, default: not set
  warnLevel?: 'Informational' | 'Low' | 'Medium' | 'High'; // Informational, Low, Medium, High, default: not set
  okExitValue?: number; // Exit value if all ok, default 0
  errorExitValue?: number; // Exit value if there are errors, default 1
  warnExitValue?: number; // Exit value if there are warnings, default 2
}

export interface IExitStatus {
  type: 'exitStatus'; // Sets the exit code based on scan results
  parameters: IExitStatusParameters; // The parameters for the exit status configuration
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}
