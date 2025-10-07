import { Construct } from 'constructs';
import { IPostman } from '../../models/postman'; // Adjust the import path as necessary

/**
 * Properties for the PostmanConfig construct.
 */
interface PostmanProps {
  postman: IPostman; // Ensure that the postman property matches the IPostmanParameters interface
}

/**
 * Class representing the Postman configuration.
 * @class PostmanConfig
 * @extends {Construct}
 */
class PostmanConfig extends Construct {
  config: IPostman;

  /** Creates an instance of PostmanConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {PostmanProps} props - The properties of the Postman configuration.
   */
  constructor(scope: Construct, id: string, props: PostmanProps) {
    super(scope, id);

    // Validate that props.postman is provided
    if (!props.postman) {
      throw new Error('The postman property is required.');
    }

    this.config = props.postman;
  }

  /** Converts the Postman configuration to YAML format.
   *
   * @returns {any} The Postman configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}

export { PostmanConfig };
