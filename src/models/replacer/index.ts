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
 * @interface IReplacer
 * Represents the configuration for string replacement rules.
 * @property {boolean} [deleteAllRules] - If true, will delete all existing replacer rules, default: false.
 * @property {IReplacerRule[]} rules - A list of replacer rules.
 */
export interface IReplacer {
  deleteAllRules?: boolean; // If true, will delete all existing replacer rules, default false
  rules: IReplacerRule[]; // A list of replacer rules
}
