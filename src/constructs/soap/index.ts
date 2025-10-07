import { Construct } from 'constructs';
import { ISOAP } from '../../models/soap'; // Adjust the import path as necessary

/**
 * Properties for the SOAPConfig construct.
 * @interface SOAPProps
 */
interface SOAPProps {
  soap: ISOAP; // Ensure that the soap property matches the ISOAPParameters interface
}

/**
 * Class representing the SOAP configuration.
 *
 * @class SOAPConfig
 * @extends {Construct}
 */
class SOAPConfig extends Construct {
  config: ISOAP;

  constructor(scope: Construct, id: string, props: SOAPProps) {
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

export { SOAPConfig };
