export interface IAuthenticationParameters {
  method: 'manual' | 'http' | 'form' | 'json' | 'script' | 'autodetect' | 'browser' | 'client'; // Authentication method
  parameters: {
    hostname?: string; // Only for 'http' authentication
    port?: number; // Only for 'http' authentication
    realm?: string; // Only for 'http' authentication
    loginPageUrl?: string; // Only for 'form' or 'json' authentication
    loginRequestUrl?: string; // Only for 'form' or 'json' authentication
    loginRequestBody?: string; // Only for 'form' or 'json' authentication
    script?: string; // Path to script, only for 'script' authentication
    scriptInline?: string; // Full script (may be multi-line), only for 'script' authentication
    scriptEngine?: string; // Name of the script engine to use, only for 'script' authentication
  };
  verification: {
    method: 'response' | 'request' | 'both' | 'poll'; // Verification method
    loggedInRegex?: string; // Regex pattern for determining if logged in
    loggedOutRegex?: string; // Regex pattern for determining if logged out
    pollFrequency?: number; // Poll frequency, only for 'poll' verification
    pollUnits?: 'requests' | 'seconds'; // Poll units, only for 'poll' verification
    pollUrl?: string; // URL to poll, only for 'poll' verification
    pollPostData?: string; // Post data to include in the poll, only for 'poll' verification
    pollAdditionalHeaders?: {
      header: string; // The header name
      value: string; // The header value
    }[]; // Additional headers for poll request, only for 'poll' verification
  };
}

export interface ISessionManagementParameters {
  method: 'cookie' | 'http' | 'script'; // Session management method
  parameters: {
    script?: string; // Path to script, only for 'script' session management
    scriptEngine?: string; // Name of the script engine to use, only for 'script' session management
  };
}

export interface ITechnology {
  exclude?: string[]; // List of tech to exclude
  include?: string[]; // List of tech to include
}

export interface IDataDrivenNode {
  name: string; // Name of the data driven node
  regex: string; // Regex of the data driven node, must contain 2 or 3 regex groups
}

export interface IContext {
  name: string; // Name to refer to this context
  urls: string[]; // Mandatory list of top-level URLs
  includePaths?: string[]; // Optional list of regexes to include
  excludePaths?: string[]; // Optional list of regexes to exclude
  authentication: IAuthenticationParameters; // Authentication details
  sessionManagement: ISessionManagementParameters; // Session management details
  technology: ITechnology; // Technology details
  structure: {
    structuralParameters?: string[]; // List of names of structural parameters
    dataDrivenNodes?: IDataDrivenNode[]; // List of data driven nodes
  };
  users: {
    name: string; // Name to be used by the jobs
    credentials: {
      username: string; // Username for authentication
      password: string; // Password for authentication
      totp?: {
        secret: string; // TOTP secret
        period?: number; // TOTP period, default: 30
        digits?: number; // Number of digits, default: 6
        algorithm?: string; // Algorithm, default: SHA1
      };
    }[];
  }[];
}

export interface IEnvironment {
  contexts: IContext[]; // List of contexts
  vars?: { [key: string]: string }; // Custom variables
  parameters: {
    failOnError?: boolean; // Exit on error
    failOnWarning?: boolean; // Exit on warning
    continueOnFailure?: boolean; // Continue running all jobs even if one fails
    progressToStdout?: boolean; // Write job progress to stdout
  };
  proxy?: {
    hostname?: string; // Proxy host
    port?: number; // Proxy port
    realm?: string; // Proxy realm
    username?: string; // Proxy username
    password?: string; // Proxy password
  };
}
