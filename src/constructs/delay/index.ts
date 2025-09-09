import { Construct } from 'constructs';
import { IDelay } from '../../models/delay';

/**
 * Properties for the DelayConfig construct.
 */
interface DelayProps {
  delay: IDelay; // Ensure that the delay property matches the IDelay interface
}

/**
 * Class representing the delay configuration.
 *
 * @class DelayConfig
 * @extends {Construct}
 */
class DelayConfig extends Construct {
  config: IDelay;

  /**
   * Creates an instance of DelayConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {DelayProps} props - The properties of the delay configuration.
   */
  constructor(scope: Construct, id: string, props: DelayProps) {
    super(scope, id);

    // Validate that props.delay is provided
    if (!props.delay) {
      throw new Error('The delay property is required.');
    }

    this.config = props.delay;
  }

  /**
   * Converts the delay configuration to YAML format.
   *
   * @returns {any} The delay configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}
export { DelayConfig };