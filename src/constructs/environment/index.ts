import { Construct } from 'constructs';
import { IEnvironment } from '../../models/environment'; // Adjust the import path as necessary

/**
 * Properties for the EnvironmentConfig construct.
 * @interface IEnvironmentProps
 * @property {IEnvironment} environment - The environment configuration.
 */
export interface IEnvironmentProps {
  environment: IEnvironment; // Ensure that the environment property matches the IEnvironment interface
}

/**
 * Class representing the environment configuration.
 *
 * @class EnvironmentConfig
 * @extends {Construct}
 */
export class EnvironmentConfig extends Construct {
  config: IEnvironment;

  /**
   * Creates an instance of EnvironmentConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {IEnvironmentProps} props - The properties of the environment configuration.
   */
  constructor(scope: Construct, id: string, props: IEnvironmentProps) {
    super(scope, id);

    // Validate that props.environment is provided
    if (!props.environment) {
      throw new Error('The environment property is required.');
    }

    this.config = props.environment;
  }

  /**
   * Converts the environment configuration to YAML format.
   *
   * @returns {any} The environment configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}