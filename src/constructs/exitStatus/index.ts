import { Construct } from 'constructs';
import { IExitStatus } from '../../models/exitStatus'; // Adjust the import path as necessary

/**
 * Properties for the ExitStatusConfig construct.
 * @interface IExitStatusProps
 * @property {IExitStatus} exitStatus - The exit status configuration.
 */
export interface IExitStatusProps {
  exitStatus: IExitStatus; // Ensure that the exitStatus property matches the IExitStatus interface
}

/**
 * Class representing the exit status configuration.
 *
 * @class ExitStatusConfig
 * @extends {Construct}
 */
export class ExitStatusConfig extends Construct {
  config: IExitStatus;

  /**
   * Creates an instance of ExitStatusConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {IExitStatusProps} props - The properties of the exit status configuration.
   */
  constructor(scope: Construct, id: string, props: IExitStatusProps) {
    super(scope, id);

    // Validate that props.exitStatus is provided
    if (!props.exitStatus) {
      throw new Error('The exitStatus property is required.');
    }

    this.config = props.exitStatus;
  }

  /**
   * Converts the exit status configuration to YAML format.
   *
   * @returns {any} The exit status configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}