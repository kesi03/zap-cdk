import { Construct } from 'constructs';
import { IRequestorParameters } from '../../models/requestor'; // Adjust the import path as necessary

/**
 * Properties for the RequestorConfig construct.
 * @interface IRequestorProps
 * @property {IRequestorParameters} requestor - The requestor configuration.
 */
export interface IRequestorProps {
  requestor: IRequestorParameters; // Ensure that the requestor property matches the IRequestorParameters interface
}

/**
 * Class representing the requestor configuration.
 *
 * @class RequestorConfig
 * @extends {Construct}
 */
export class RequestorConfig extends Construct {
  config: IRequestorParameters;

  /** Creates an instance of RequestorConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {RequestorProps} props - The properties of the requestor configuration.
   */
  constructor(scope: Construct, id: string, props: IRequestorProps) {
    super(scope, id);

    // Validate that props.requestor is provided
    if (!props.requestor) {
      throw new Error('The requestor property is required.');
    }

    this.config = props.requestor;
  }

  /** Converts the requestor configuration to YAML format.
   *
   * @returns {any} The requestor configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}

