import { Construct } from 'constructs';
import { IOpenAPI } from '../../models/openApi'; // Adjust the import path as necessary

/**
 * Properties for the OpenAPIConfig construct.
 */
interface OpenAPIProps {
  openapi: IOpenAPI; // Ensure that the openapi property matches the IOpenAPIParameters interface
}

/**
 * Class representing the OpenAPI configuration.
 *
 * @class OpenAPIConfig
 * @extends {Construct}
 */
class OpenAPIConfig extends Construct {
  config: IOpenAPI;

  /** Creates an instance of OpenAPIConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {OpenAPIProps} props - The properties of the OpenAPI configuration.
   */
  constructor(scope: Construct, id: string, props: OpenAPIProps) {
    super(scope, id);

    // Validate that props.openapi is provided
    if (!props.openapi) {
      throw new Error('The openapi property is required.');
    }

    this.config = props.openapi;
  }

  toYaml() {
    return this.config;
  }
}

export { OpenAPIConfig };
