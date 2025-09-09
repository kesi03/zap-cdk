import { Construct } from 'constructs';
import * as yaml from 'js-yaml';
import { IZap } from './models/zap';

/**
 * Class representing the ZAP (Zed Attack Proxy) construct.
 *
 * @class Zap
 * @extends {Construct}
 */
class Zap extends Construct {
  config: IZap;
  
  /**
   * Creates an instance of Zap.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {IZap} props - The properties of the ZAP construct.
   */
  constructor(scope: Construct, id: string, props: IZap) {
    super(scope, id);
    this.config = props;
  }

  /**
   * Converts the ZAP configuration to YAML format.
   *
   * @returns {any} The ZAP configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }

  /**
   * Synthesizes the ZAP construct into a YAML representation.
   *
   * @returns {string} The YAML representation of the ZAP construct.
   */
  synth(): string {
    // Convert the configuration to YAML
    const yamlOutput = this.toYaml();
    return yaml.dump(yamlOutput);
  }
}

export { Zap };