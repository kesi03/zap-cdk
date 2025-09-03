import { Construct } from 'constructs';
import { IReplacer } from '../../models/replacer'; // Adjust the import path as necessary

interface ReplacerProps {
  replacer: IReplacer; // Ensure that the replacer property matches the IReplacerParameters interface
}

/**
 * Class representing the replacer configuration.
 *
 * @class ReplacerConfig
 * @extends {Construct}
 */
class ReplacerConfig extends Construct {
  config: IReplacer;

  constructor(scope: Construct, id: string, props: ReplacerProps) {
    super(scope, id);

    // Validate that props.replacer is provided
    if (!props.replacer) {
      throw new Error('The replacer property is required.');
    }

    this.config = props.replacer;
  }

  toYaml() {
    return this.config;
  }
}

export { ReplacerConfig };
