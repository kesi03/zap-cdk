import { Construct } from 'constructs';
import { IActiveScanConfig } from '../../models/activeScanConfig';

/**
 * Properties for the ActiveScanConfig construct.
 * @interface IActiveScanConfigProps
 * @property {IActiveScanConfig} activeScanConfig - The active scan configuration.
 *
 */
export interface IActiveScanConfigProps {
  activeScanConfig: IActiveScanConfig; // Ensure that the activeScanConfig property matches the IActiveScanConfig interface
}

/**
 * Class representing the active scan configuration.
 *
 * @class ActiveScanConfig
 * @extends {Construct}
 */
export class ActiveScanConfig extends Construct {

  /** The active scan configuration properties. */
  config: IActiveScanConfig;

  /**
   * Creates an instance of ActiveScanConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {IActiveScanConfigProps} props - The properties of the active scan configuration.
   */
  constructor(scope: Construct, id: string, props: IActiveScanConfigProps) {
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
