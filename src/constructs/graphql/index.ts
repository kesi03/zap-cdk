import { Construct } from 'constructs';
import { IGraphQL } from "../../models/graphql"; // Adjust the import path as necessary

interface GraphQLProps {
  graphql: IGraphQL; // Ensure that the graphql property matches the IGraphQLParameters interface
}

class GraphQLConfig extends Construct {
  config: IGraphQL;

  constructor(scope: Construct, id: string, props: GraphQLProps) {
    super(scope, id);

    // Validate that props.graphql is provided
    if (!props.graphql) {
      throw new Error("The graphql property is required.");
    }

    this.config = props.graphql;
  }

  toYaml() {
    return this.config;
  }
}

export { GraphQLConfig };
