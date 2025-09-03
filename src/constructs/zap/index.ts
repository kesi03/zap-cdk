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
  constructor(scope: Construct, id: string, props: IZap) {
    super(scope, id);
    this.config = props;
  }

  toYaml() {
    return this.config;
  }

  synth(): string {
    // Convert the configuration to YAML
    const yamlOutput = this.toYaml();
    return yaml.dump(yamlOutput);
  }
}

export { Zap };