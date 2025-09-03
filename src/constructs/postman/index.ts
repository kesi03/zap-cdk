import { Construct } from 'constructs';
import { IPostman } from "../../models/postman"; // Adjust the import path as necessary

interface PostmanProps {
  postman: IPostman; // Ensure that the postman property matches the IPostmanParameters interface
}

class PostmanConfig extends Construct {
  config: IPostman;

  constructor(scope: Construct, id: string, props: PostmanProps) {
    super(scope, id);

    // Validate that props.postman is provided
    if (!props.postman) {
      throw new Error("The postman property is required.");
    }

    this.config = props.postman;
  }

  toYaml() {
    return this.config;
  }
}

export { PostmanConfig };
