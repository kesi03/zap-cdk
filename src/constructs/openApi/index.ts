import { Construct } from 'constructs';
import { IOpenAPI } from "../../models/openApi"; // Adjust the import path as necessary

interface OpenAPIProps {
  openapi: IOpenAPI; // Ensure that the openapi property matches the IOpenAPIParameters interface
}

class OpenAPIConfig extends Construct {
  config: IOpenAPI;

  constructor(scope: Construct, id: string, props: OpenAPIProps) {
    super(scope, id);

    // Validate that props.openapi is provided
    if (!props.openapi) {
      throw new Error("The openapi property is required.");
    }

    this.config = props.openapi;
  }

  toYaml() {
    return this.config;
  }
}

export { OpenAPIConfig };
