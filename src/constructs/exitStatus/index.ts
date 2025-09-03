import { Construct } from 'constructs';
import { IExitStatus } from "../../models/exitStatus"; // Adjust the import path as necessary

interface ExitStatusProps {
  exitStatus: IExitStatus; // Ensure that the exitStatus property matches the IExitStatus interface
}

class ExitStatusConfig extends Construct {
  config: IExitStatus;

  constructor(scope: Construct, id: string, props: ExitStatusProps) {
    super(scope, id);

    // Validate that props.exitStatus is provided
    if (!props.exitStatus) {
      throw new Error("The exitStatus property is required.");
    }

    this.config = props.exitStatus;
  }

  toYaml() {
    return this.config;
  }
}
export { ExitStatusConfig };