import { Construct } from 'constructs';
import { IEnvironment } from '../../models/environment'; // Adjust the import path as necessary

interface EnvironmentProps {
  environment: IEnvironment; // Ensure that the environment property matches the IEnvironment interface
}

/**
 * Class representing the environment configuration.
 *
 * @class EnvironmentConfig
 * @extends {Construct}
 */
class EnvironmentConfig extends Construct {
  config: IEnvironment;

  constructor(scope: Construct, id: string, props: EnvironmentProps) {
    super(scope, id);

    // Validate that props.environment is provided
    if (!props.environment) {
      throw new Error('The environment property is required.');
    }

    this.config = props.environment;
  }

  toYaml() {
    return this.config;
  }
}
export { EnvironmentConfig };