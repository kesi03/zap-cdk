import { Construct } from 'constructs';
import { IPassiveScanWait } from '../../models/passiveScanWait'; // Adjust the import path as necessary

/**
 * Properties for the PassiveScanWaitConfig construct.
 * @interface IPassiveScanWaitProps
 * @property {IPassiveScanWait} passiveScanWait - The passive scan wait configuration.
 */
export interface IPassiveScanWaitProps {
  passiveScanWait: IPassiveScanWait; // Ensure that the passiveScanWait property matches the IPassiveScanWaitParameters interface
}

/**
 * Class representing the passive scan wait configuration.
 *
 * @class PassiveScanWaitConfig
 * @extends {Construct}
 */
export class PassiveScanWaitConfig extends Construct {
  config: IPassiveScanWait;

  /** Creates an instance of PassiveScanWaitConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {IPassiveScanWaitProps} props - The properties of the passive scan wait configuration.
   */
  constructor(scope: Construct, id: string, props: IPassiveScanWaitProps) {
    super(scope, id);

    // Validate that props.passiveScanWait is provided
    if (!props.passiveScanWait) {
      throw new Error('The passiveScanWait property is required.');
    }

    this.config = props.passiveScanWait;
  }

  /** Converts the passive scan wait configuration to YAML format.
   *
   * @returns {any} The passive scan wait configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}

