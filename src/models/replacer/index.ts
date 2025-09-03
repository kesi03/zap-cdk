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

export interface IReplacer {
  deleteAllRules?: boolean; // If true, will delete all existing replacer rules, default false
  rules: IReplacerRule[]; // A list of replacer rules
}
