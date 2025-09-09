import { Construct } from 'constructs';
import { IActiveScanConfig } from '../../models/activeScanConfig';

interface ActiveScanConfigProps {
  activeScanConfig: IActiveScanConfig; // Ensure that the activeScanConfig property matches the IActiveScanConfig interface
}

/**
 * Class representing the active scan configuration.
 *
 * @class ActiveScanConfig
 * @extends {Construct}
 */
class ActiveScanConfig extends Construct {

  /** The active scan configuration properties. */
  config: IActiveScanConfig;

  /**
   * Creates an instance of ActiveScanConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {ActiveScanConfigProps} props - The properties of the active scan configuration.
   */
  constructor(scope: Construct, id: string, props: ActiveScanConfigProps) {
    super(scope, id);

    // Validate that props.activeScanConfig is provided
    if (!props.activeScanConfig) {
      throw new Error('The activeScanConfig property is required.');
    }

    this.config = props.activeScanConfig;
  }

  /**
   * Converts the active scan configuration to YAML format.
   *
   * @returns {any} The active scan configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}

export { ActiveScanConfig };