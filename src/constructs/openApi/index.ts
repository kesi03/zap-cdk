import { Construct } from 'constructs';
import { IOpenAPI } from '../../models/openApi'; // Adjust the import path as necessary

/**
 * Properties for the OpenAPIConfig construct.
 *
 * @interface IOpenAPIProps
 * @property {IOpenAPI} openapi - The OpenAPI configuration.
 */
export interface IOpenAPIProps {
  openapi: IOpenAPI; // Ensure that the openapi property matches the IOpenAPIParameters interface
}

/**
 * Class representing the OpenAPI configuration.
 *
 * @class OpenAPIConfig
 * @extends {Construct}
 */
export class OpenAPIConfig extends Construct {
  config: IOpenAPI;

  /** Creates an instance of OpenAPIConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {IOpenAPIProps} props - The properties of the OpenAPI configuration.
   */
  constructor(scope: Construct, id: string, props: IOpenAPIProps) {
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

