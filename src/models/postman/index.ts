/**
 * @interface IPostman
 * Represents the configuration for importing a Postman collection.
 * @property {string} [collectionFile] - Local file containing the Postman collection, default: null.
 * @property {string} [collectionUrl] - URL containing the Postman collection, default: null.
 * @property {string} [variables] - Comma-separated list of variables as key-value pairs.
 */
export interface IPostman {
  collectionFile?: string; // Local file containing the Postman collection, default: null
  collectionUrl?: string; // URL containing the Postman collection, default: null
  variables?: string; // Comma-separated list of variables as key-value pairs
}

/**
 * Class representing the Postman import configuration.
 * @implements {IPostman}
 * @class Postman
 * @property {string} [collectionFile] - Local file containing the Postman collection, default: null.
 * @property {string} [collectionUrl] - URL containing the Postman collection, default: null.
 * @property {string} [variables] - Comma-separated list of variables as key-value pairs.
 * @example
 * // Example usage:
 * @example
 * const postmanConfig = new Postman({
 *   collectionFile: 'postman-collection.json',
 *   variables: 'baseUrl=https://api.example.com,apiKey=12345'
 * });
 */
export class Postman implements IPostman {
  collectionFile?: string; // Local file containing the Postman collection, default: null
  collectionUrl?: string; // URL containing the Postman collection, default: null
  variables?: string; // Comma-separated list of variables as key-value pairs

  /**
   * Creates an instance of Postman.
   * @param {IPostman} options - The options to initialize the Postman configuration.
   * @property {string} [options.collectionFile] - Local file containing the Postman collection, default: null.
   * @property {string} [options.collectionUrl] - URL containing the Postman collection, default: null.
   * @property {string} [options.variables] - Comma-separated list of variables as key-value pairs.
   */
  constructor(options: IPostman) {
    this.collectionFile = options.collectionFile ?? '';
    this.collectionUrl = options.collectionUrl ?? '';
    this.variables = options.variables ?? '';
  }
}