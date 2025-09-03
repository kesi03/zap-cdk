export type ArgsType = 'inline' | 'variables' | 'both'; // Enum for argument specification
export type QuerySplitType = 'leaf' | 'root_field' | 'operation'; // Enum for query split type
export type RequestMethod = 'post_json' | 'post_graphql' | 'get'; // Enum for request method

export interface IGraphQL {
  endpoint?: string; // The endpoint URL, default: null
  schemaUrl?: string; // URL pointing to a GraphQL Schema, default: null
  schemaFile?: string; // Local file path of a GraphQL Schema, default: null
  queryGenEnabled?: boolean; // Whether the Query Generator is enabled, default: true
  maxQueryDepth?: number; // The maximum query generation depth, default: 5
  lenientMaxQueryDepthEnabled?: boolean; // Whether Maximum Query Depth is enforced leniently, default: true
  maxAdditionalQueryDepth?: number; // The maximum additional query generation depth, default: 5
  maxArgsDepth?: number; // The maximum arguments generation depth, default: 5
  optionalArgsEnabled?: boolean; // Whether Optional Arguments should be specified, default: true
  argsType?: ArgsType; // How arguments are specified, default: both
  querySplitType?: QuerySplitType; // The level for which a single query is generated, default: leaf
  requestMethod?: RequestMethod; // The request method, default: post_json
}
