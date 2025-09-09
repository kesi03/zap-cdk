import { Construct } from 'constructs';
import { IGraphQL } from '../../models/graphql'; // Adjust the import path as necessary

/**
 * Properties for the GraphQLConfig construct.
 */
interface GraphQLProps {
  graphql: IGraphQL; // Ensure that the graphql property matches the IGraphQLParameters interface
}

/**
 * Class representing the GraphQL configuration.
 * @class GraphQLConfig
 * @extends {Construct}
 */
class GraphQLConfig extends Construct {
  config: IGraphQL;

  /** Creates an instance of GraphQLConfig.
   * 
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {GraphQLProps} props - The properties of the GraphQL configuration.
   */
  constructor(scope: Construct, id: string, props: GraphQLProps) {
    super(scope, id);

    // Validate that props.graphql is provided
    if (!props.graphql) {
      throw new Error('The graphql property is required.');
    }

    this.config = props.graphql;
  }

  toYaml() {
    return this.config;
  }
}

export { GraphQLConfig };
