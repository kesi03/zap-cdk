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

export class GraphQL implements IGraphQL {
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

  /**
   * Creates an instance of GraphQL.
   * @param {IGraphQL} options - The options to initialize the GraphQL configuration.
   * @property {string} [options.endpoint] - The endpoint URL, default: null.
   * @property {string} [options.schemaUrl] - URL pointing to a GraphQL Schema, default: null.
   * @property {string} [options.schemaFile] - Local file path of a GraphQL Schema, default: null.
   * @property {boolean} [options.queryGenEnabled=true] - Whether the Query Generator is enabled, default: true.
   * @property {number} [options.maxQueryDepth=5] - The maximum query generation depth, default: 5.
   * @property {boolean} [options.lenientMaxQueryDepthEnabled=true] - Whether Maximum Query Depth is enforced leniently, default: true.
   * @property {number} [options.maxAdditionalQueryDepth=5] - The maximum additional query generation depth, default: 5.
   * @property {number} [options.maxArgsDepth=5] - The maximum arguments generation depth, default: 5.
   * @property {boolean} [options.optionalArgsEnabled=true] - Whether Optional Arguments should be specified, default: true.
   * @property {ArgsType} [options.argsType='both'] - How arguments are specified, default: both.
   * @property {QuerySplitType} [options.querySplitType='leaf'] - The level for which a single query is generated, default: leaf.
   * @property {RequestMethod} [options.requestMethod='post_json'] - The request method, default: post_json.
   */
  constructor(options: IGraphQL) {
    this.endpoint = options.endpoint ?? '';
    this.schemaUrl = options.schemaUrl ?? '';
    this.schemaFile = options.schemaFile ?? '';
    this.queryGenEnabled = options.queryGenEnabled ?? true;
    this.maxQueryDepth = options.maxQueryDepth ?? 5;
    this.lenientMaxQueryDepthEnabled = options.lenientMaxQueryDepthEnabled ?? true;
    this.maxAdditionalQueryDepth = options.maxAdditionalQueryDepth ?? 5;
    this.maxArgsDepth = options.maxArgsDepth ?? 5;
    this.optionalArgsEnabled = options.optionalArgsEnabled ?? true;
    this.argsType = options.argsType ?? 'both';
    this.querySplitType = options.querySplitType ?? 'leaf';
    this.requestMethod = options.requestMethod ?? 'post_json';
  }
}
