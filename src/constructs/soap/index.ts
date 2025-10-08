import { Construct } from 'constructs';
import { ISoap } from '../../models/soap'; // Adjust the import path as necessary

/**
 * Properties for the SOAPConfig construct.
 * @interface ISoapProps
 * @property {ISoap} soap - The SOAP configuration.
 */
export interface ISoapProps {
  soap: ISoap; // Ensure that the soap property matches the ISOAPParameters interface
}

/**
 * Class representing the SOAP configuration.
 *
 * @class SOAPConfig
 * @extends {Construct}
 */
export class SOAPConfig extends Construct {
  config: ISoap;

  /** Creates an instance of SOAPConfig.
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {ISoapProps} props - The properties of the SOAP configuration.
   */
  constructor(scope: Construct, id: string, props: ISoapProps) {
    super(scope, id);

    // Validate that props.soap is provided
    if (!props.soap) {
      throw new Error('The soap property is required.');
    }

    this.config = props.soap;
  }

  /** Converts the SOAP configuration to YAML format.
   *
   * @returns {any} The SOAP configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}

