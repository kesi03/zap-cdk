import { Construct } from 'constructs';
import * as yaml from 'js-yaml';
import { IZap } from '../../models/zap';

/**
 * Class representing the Zap configuration.
 *
 * @class ZapConfig
 * @extends {Construct}
 */
class Zap extends Construct {
  config: IZap;
  /** 
   * Creates an instance of Zap.
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {IZap} props - The properties of the Zap configuration.
   */
  constructor(scope: Construct, id: string, props: IZap) {
    super(scope, id);
    this.config = props;
  }

  /** Converts the Zap configuration to YAML format.
   *
   * @returns {any} The Zap configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }

  /** Synthesizes the Zap configuration to a YAML string.
   *
   * @returns {string} The Zap configuration as a YAML string.
   */
  synth(): string {
    // Convert the configuration to YAML
    const yamlOutput = this.toYaml();
    return yaml.dump(yamlOutput);
  }
}

export { Zap };