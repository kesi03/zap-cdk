import { Construct } from 'constructs';
import { IPassiveScanConfig } from '../../models/passiveScanConfig';

/**
 * Properties for the PassiveScanConfig construct.
 */
interface PassiveScanConfigProps {
  passiveScanConfig: IPassiveScanConfig; // Ensure that the passiveScanConfig property matches the IPassiveScanConfig interface
}

/**
 * Class representing the passive scan configuration.
 *
 * @class PassiveScanConfig
 * @extends {Construct}
 */
class PassiveScanConfig extends Construct {
  config: IPassiveScanConfig;

  /** Creates an instance of PassiveScanConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.   
   * @param {string} id - The ID of the construct.
   * @param {PassiveScanConfigProps} props - The properties of the passive scan configuration.
   */
  constructor(scope: Construct, id: string, props: PassiveScanConfigProps) {
    super(scope, id);

    // Validate that props.passiveScanConfig is provided
    if (!props.passiveScanConfig) {
      throw new Error('The passiveScanConfig property is required.');
    }

    this.config = props.passiveScanConfig;
  }

  /** Converts the passive scan configuration to YAML format.
   *
   * @returns {any} The passive scan configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}
export { PassiveScanConfig };