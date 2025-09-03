export interface IPostman {
  collectionFile?: string; // Local file containing the Postman collection, default: null
  collectionUrl?: string; // URL containing the Postman collection, default: null
  variables?: string; // Comma-separated list of variables as key-value pairs
}
