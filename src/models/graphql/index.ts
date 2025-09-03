/**
 * @typedef {'inline' | 'variables' | 'both'} ArgsType
 * Enum for argument specification.
 */
export type ArgsType = 'inline' | 'variables' | 'both'; // Enum for argument specification
/**
 * @typedef {'leaf' | 'root_field' | 'operation'} QuerySplitType
 * Enum for query split type.
 */
export type QuerySplitType = 'leaf' | 'root_field' | 'operation'; // Enum for query split type

/**
 * @typedef {'post_json' | 'post_graphql' | 'get'} RequestMethod
 * Enum for request method.
 */
export type RequestMethod = 'post_json' | 'post_graphql' | 'get'; // Enum for request method

/**
 * @interface IGraphQL
 * Represents the configuration for a GraphQL operation.
 * @property {string} [endpoint] - The endpoint URL, default: null.
 * @property {string} [schemaUrl] - URL pointing to a GraphQL Schema, default: null.
 * @property {string} [schemaFile] - Local file path of a GraphQL Schema, default: null.
 * @property {boolean} [queryGenEnabled] - Whether the Query Generator is enabled, default: true.
 * @property {number} [maxQueryDepth] - The maximum query generation depth, default: 5.
 * @property {boolean} [lenientMaxQueryDepthEnabled] - Whether Maximum Query Depth is enforced leniently, default: true.
 * @property {number} [maxAdditionalQueryDepth] - The maximum additional query generation depth, default: 5.
 * @property {number} [maxArgsDepth] - The maximum arguments generation depth, default: 5.
 * @property {boolean} [optionalArgsEnabled] - Whether Optional Arguments should be specified, default: true.
 * @property {ArgsType} [argsType] - How arguments are specified, default: both.
 * @property {QuerySplitType} [querySplitType] - The level for which a single query is generated, default: leaf.
 * @property {RequestMethod} [requestMethod] - The request method, default: post_json.
 */
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
