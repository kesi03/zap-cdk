import { Construct } from 'constructs';
import { IGraphQL } from '../../models/graphql'; // Adjust the import path as necessary

/**
 * Properties for the GraphQLConfig construct.
 * @interface IGraphQLProps
 * @property {IGraphQL} graphql - The GraphQL configuration.
 */
export interface IGraphQLProps {
  graphql: IGraphQL; // Ensure that the graphql property matches the IGraphQLParameters interface
}

/**
 * Class representing the GraphQL configuration.
 * @class GraphQLConfig
 * @extends {Construct}
 */
export class GraphQLConfig extends Construct {
  config: IGraphQL;

  /** Creates an instance of GraphQLConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {IGraphQLProps} props - The properties of the GraphQL configuration.
   */
  constructor(scope: Construct, id: string, props: IGraphQLProps) {
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
