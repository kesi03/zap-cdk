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

/**
 * Class representing the OpenAPI import configuration.
 * @implements {IOpenAPI}
 * @class OpenAPI
 * @property {string} [apiFile] - Local file containing the OpenAPI definition, default: null.
 * @property {string} [apiUrl] - URL containing the OpenAPI definition, default: null.
 * @property {string} [context] - Context to use when importing the OpenAPI definition, default: first context.
 * @property {string} [user] - Optional user for authentication, must be defined in the environment.
 * @property {string} [targetUrl] - URL which overrides the target defined in the definition, default: null.
 * @example
 * // Example usage:
 * @example
 * const openApiConfig = new OpenAPI({
 *   apiFile: 'api-definition.yaml',
 *   context: 'MyContext',
 *   user: 'apiUser',
 *   targetUrl: 'https://api.example.com'
 * });
 */
export class OpenAPI implements IOpenAPI {
  apiFile?: string; // Local file containing the OpenAPI definition, default: null
  apiUrl?: string; // URL containing the OpenAPI definition, default: null
  context?: string; // Context to use when importing the OpenAPI definition, default: first context
  user?: string; // Optional user for authentication, must be defined in the env
  targetUrl?: string; // URL which overrides the target defined in the definition, default: null

  /**
   * Creates an instance of OpenAPI.
   * @param {IOpenAPI} options - The options to initialize the OpenAPI configuration.
   * @property {string} [options.apiFile] - Local file containing the OpenAPI definition, default: null.
   * @property {string} [options.apiUrl] - URL containing the OpenAPI definition, default: null.
   * @property {string} [options.context] - Context to use when importing the OpenAPI definition, default: first context.
   * @property {string} [options.user] - Optional user for authentication, must be defined in the environment.
   * @property {string} [options.targetUrl] - URL which overrides the target defined in the definition, default: null.
   */
  constructor(options: IOpenAPI) {
    this.apiFile = options.apiFile;
    this.apiUrl = options.apiUrl;
    this.context = options.context;
    this.user = options.user;
    this.targetUrl = options.targetUrl;
  }
}