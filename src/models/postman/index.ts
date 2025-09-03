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
