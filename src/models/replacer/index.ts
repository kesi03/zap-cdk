/**
 * @interface IReplacerRule
 * Represents a rule for replacing strings in requests or responses.
 * @property {string} description - The name of the rule.
 * @property {string} [url] - A regex to match URLs; if empty, it will match all.
 * @property {'req_header' | 'req_header_str' | 'req_body_str' | 'resp_header' | 'resp_header_str' | 'resp_body_str'} matchType - Type of match.
 * @property {string} matchString - String used to identify what should be replaced.
 * @property {boolean} [matchRegex] - If set, matchString will be treated as a regex, default: false.
 * @property {string} replacementString - The new string that will replace the specified selection.
 * @property {boolean} [tokenProcessing] - When enabled, replacementString may contain a single token.
 * @property {number[]} [initiators] - A list of integers representing the initiators.
 */
export interface IReplacerRule {
  description: string; // The name of the rule
  url?: string; // A regex to match URLs, if empty then it will match all
  matchType: 'req_header' | 'req_header_str' | 'req_body_str' | 'resp_header' | 'resp_header_str' | 'resp_body_str'; // Type of match
  matchString: string; // String used to identify what should be replaced
  matchRegex?: boolean; // If set, matchString will be treated as a regex, default false
  replacementString: string; // The new string that will replace the specified selection
  tokenProcessing?: boolean; // When enabled, replacementString may contain a single token
  initiators?: number[]; // A list of integers representing the initiators
}

/**
 * Class representing a rule for replacing strings in requests or responses.
 * @implements {IReplacerRule}
 * @class ReplacerRule
 * @example
 * const replacerRule = new ReplacerRule({
 *   description: 'Replace API Key',
 *   url: '.*example.*',
 *   matchType: 'req_header_str',
 *   matchString: 'API-Key: .*',
 *   matchRegex: true,
 *   replacementString: 'API-Key: 12345',
 *   tokenProcessing: false,
 *   initiators: [1, 2, 3]
 * });
 */
export class ReplacerRule implements IReplacerRule {
  description: string; // The name of the rule
  url?: string; // A regex to match URLs, if empty then it will match all
  matchType: 'req_header' | 'req_header_str' | 'req_body_str' | 'resp_header' | 'resp_header_str' | 'resp_body_str'; // Type of match
  matchString: string; // String used to identify what should be replaced
  matchRegex?: boolean; // If set, matchString will be treated as a regex, default false
  replacementString: string; // The new string that will replace the specified selection
  tokenProcessing?: boolean; // When enabled, replacementString may contain a single token
  initiators?: number[]; // A list of integers representing the initiators

  /**
   * Creates an instance of ReplacerRule.
   * @param {IReplacerRule} options - The configuration options for the replacer rule.
   * @property {string} options.description - The name of the rule.
   * @property {string} [options.url] - A regex to match URLs; if empty, it will match all.
   * @property {string} options.matchType - Type of match.
   * @property {string} options.matchString - String used to identify what should be replaced.
   * @property {boolean} [options.matchRegex] - If set, matchString will be treated as a regex, default: false.
   * @property {string} options.replacementString - The new string that will replace the specified selection.
   * @property {boolean} [options.tokenProcessing] - When enabled, replacementString may contain a single token.
   * @property {number[]} [options.initiators] - A list of integers representing the initiators.
   * @example
   * const replacerRule = new ReplacerRule({
   *   description: 'Replace API Key',
   *   url: '.*example.*',
   *   matchType: 'req_header_str',
   *   matchString: 'API-Key: .*',
   *   matchRegex: true,
   *   replacementString: 'API-Key: 12345',
   *   tokenProcessing: false,
   *   initiators: [1, 2, 3]
   * });
   */
  constructor(options: IReplacerRule) {
    this.description = options.description;
    this.url = options.url;
    this.matchType = options.matchType;
    this.matchString = options.matchString;
    this.matchRegex = options.matchRegex ?? false;
    this.replacementString = options.replacementString;
    this.tokenProcessing = options.tokenProcessing ?? false;
    this.initiators = options.initiators;
  }
}

/**
 * @interface IReplacer
 * Represents the configuration for string replacement rules.
 * @property {boolean} [deleteAllRules] - If true, will delete all existing replacer rules, default: false.
 * @property {IReplacerRule[]} rules - A list of replacer rules.
 */
export interface IReplacer {
  deleteAllRules?: boolean; // If true, will delete all existing replacer rules, default false
  rules: IReplacerRule[]; // A list of replacer rules
}

/**
 * Class representing the configuration for string replacement rules.
 * @implements {IReplacer}
 * @class Replacer
 * @example
 * const replacerConfig = new Replacer({
 *   deleteAllRules: true,
 *   rules: [
 *     new ReplacerRule({
 *       description: 'Replace API Key',
 *       url: '.*example.*',
 *       matchType: 'req_header_str',
 *       matchString: 'API-Key: .*',
 *       matchRegex: true,
 *       replacementString: 'API-Key: 12345',
 *       tokenProcessing: false,
 *       initiators: [1, 2, 3]
 *     })
 *   ]
 * });
 */
export class Replacer implements IReplacer {
  deleteAllRules?: boolean; // If true, will delete all existing replacer rules, default false
  rules: IReplacerRule[]; // A list of replacer rules

  /**
   * Creates an instance of Replacer.
   * @param {IReplacer} options - The options to initialize the replacer configuration.
   * @property {boolean} [options.deleteAllRules] - If true, will delete all existing replacer rules, default: false.
   * @property {IReplacerRule[]} options.rules - A list of replacer rules.
   */
  constructor(options: IReplacer) {
    this.deleteAllRules = options.deleteAllRules ?? false;
    this.rules = options.rules;
  }
}