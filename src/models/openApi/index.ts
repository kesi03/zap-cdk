/**
 * @interface IOpenAPI
 * Represents the configuration for importing an OpenAPI definition.
 * @property {string} [apiFile] - Local file containing the OpenAPI definition, default: null.
 * @property {string} [apiUrl] - URL containing the OpenAPI definition, default: null.
 * @property {string} [context] - Context to use when importing the OpenAPI definition, default: first context.
 * @property {string} [user] - Optional user for authentication, must be defined in the environment.
 * @property {string} [targetUrl] - URL which overrides the target defined in the definition, default: null.
 */
export interface IOpenAPI {
  apiFile?: string; // Local file containing the OpenAPI definition, default: null
  apiUrl?: string; // URL containing the OpenAPI definition, default: null
  context?: string; // Context to use when importing the OpenAPI definition, default: first context
  user?: string; // Optional user for authentication, must be defined in the env
  targetUrl?: string; // URL which overrides the target defined in the definition, default: null
}
