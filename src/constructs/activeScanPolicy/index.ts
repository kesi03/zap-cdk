import { Construct } from 'constructs';
import { IActiveScanPolicy } from '../../models/activeScanPolicy'; // Adjust the import path as necessary

/**
 * Properties for the ActiveScanPolicyConfig construct.
 * @interface IActiveScanPolicyProps
 * @property {IActiveScanPolicy} activeScanPolicy - The active scan policy configuration.
 */
export interface IActiveScanPolicyProps {
  activeScanPolicy: IActiveScanPolicy; // Ensure that the activeScanPolicy property matches the IActiveScanPolicy interface
}

/**
 * Class representing the active scan policy configuration.
 *
 * @class ActiveScanPolicyConfig
 * @extends {Construct}
 */
export class ActiveScanPolicyConfig extends Construct {
  config: IActiveScanPolicy;

  /**
   * Creates an instance of ActiveScanPolicyConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {IActiveScanPolicyProps} props - The properties of the active scan policy configuration.
   */
  constructor(scope: Construct, id: string, props: IActiveScanPolicyProps) {
    super(scope, id);

    // Validate that props.activeScanPolicy is provided
    if (!props.activeScanPolicy) {
      throw new Error('The activeScanPolicy property is required.');
    }

    this.config = props.activeScanPolicy;
  }

  /**
   * Converts the active scan policy configuration to YAML format.
   *
   * @returns {any} The active scan policy configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}