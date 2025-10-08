import { Construct } from 'constructs';
import { IReplacer } from '../../models/replacer'; // Adjust the import path as necessary

/**
 * Properties for the ReplacerConfig construct.
 * @interface IReplacerProps
 * @property {IReplacer} replacer - The replacer configuration.
 */
export interface IReplacerProps {
  replacer: IReplacer; // Ensure that the replacer property matches the IReplacerParameters interface
}

/**
 * Class representing the replacer configuration.
 *
 * @class ReplacerConfig
 * @extends {Construct}
 */
export class ReplacerConfig extends Construct {
  config: IReplacer;

  /** Creates an instance of ReplacerConfig.
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {ReplacerProps} props - The properties of the replacer configuration.
   */
  constructor(scope: Construct, id: string, props: IReplacerProps) {
    super(scope, id);

    // Validate that props.replacer is provided
    if (!props.replacer) {
      throw new Error('The replacer property is required.');
    }

    this.config = props.replacer;
  }

  /** Converts the replacer configuration to YAML format.
   *
   * @returns {any} The replacer configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}

