
/**
 * @interface IAuthenticationParametersParameters
 * Represents the parameters for authentication in the scanning process.
 * @property {string} [hostname] - Only for 'http' authentication.
 * @property {number} [port] - Only for 'http' authentication.
 * @property {string} [realm] - Only for 'http' authentication.
 * @property {string} [loginPageUrl] - Only for 'form' or 'json' authentication.
 * @property {string} [loginRequestUrl] - Only for 'form' or 'json' authentication.
 * @property {string} [loginRequestBody] - Only for 'form' or 'json' authentication.
 * @property {string} [script] - Path to script, only for 'script' authentication.
 * @property {string} [scriptInline] - Full script (may be multi-line), only for 'script' authentication.
 * @property {string} [scriptEngine] - Name of the script engine to use, only for 'script' authentication.
 */
export interface IAuthenticationParametersParameters {
  hostname?: string; // Only for 'http' authentication
  port?: number; // Only for 'http' authentication
  realm?: string; // Only for 'http' authentication
  loginPageUrl?: string; // Only for 'form' or 'json' authentication
  loginRequestUrl?: string; // Only for 'form' or 'json' authentication
  loginRequestBody?: string; // Only for 'form' or 'json' authentication
  script?: string; // Path to script, only for 'script' authentication
  scriptInline?: string; // Full script (may be multi-line), only for 'script' authentication
  scriptEngine?: string; // Name of the script engine to use, only for 'script' authentication
}

/**
 * @interface IPollAdditionalHeaders
 * Represents additional headers for poll request in authentication verification.
 * @property {string} header - The header name.
 * @property {string} value - The header value.
 */
export interface IPollAdditionalHeaders {
  header: string; // The header name
  value: string; // The header value
}

/**
 * @interface IAuthenticationParametersVerification
 * Represents the verification details for authentication in the scanning process.
 * @property {'response' | 'request' | 'both' | 'poll'} method - Verification method.
 * @property {string} [loggedInRegex] - Regex pattern for determining if logged in.
 * @property {string} [loggedOutRegex] - Regex pattern for determining if logged out.
 * @property {number} [pollFrequency] - Poll frequency, only for 'poll' verification.
 * @property {'requests' | 'seconds'} [pollUnits] - Poll units, only for 'poll' verification.
 * @property {string} [pollUrl] - URL to poll, only for 'poll' verification.
 * @property {string} [pollPostData] - Post data to include in the poll, only for 'poll' verification.
 * @property {Object[]} [pollAdditionalHeaders] - Additional headers for poll request, only for 'poll' verification.
 * @property {string} pollAdditionalHeaders[].header - The header name.
 * @property {string} pollAdditionalHeaders[].value - The header value.
 */
export interface IAuthenticationParametersVerification {
  method: 'response' | 'request' | 'both' | 'poll'; // Verification method
  loggedInRegex?: string; // Regex pattern for determining if logged in
  loggedOutRegex?: string; // Regex pattern for determining if logged out
  pollFrequency?: number; // Poll frequency, only for 'poll' verification
  pollUnits?: 'requests' | 'seconds'; // Poll units, only for 'poll' verification
  pollUrl?: string; // URL to poll, only for 'poll' verification
  pollPostData?: string; // Post data to include in the poll, only for 'poll' verification
  pollAdditionalHeaders?: IPollAdditionalHeaders[]; // Additional headers for poll request, only for 'poll' verification
}

/**
 * @interface IAuthenticationParameters
 * Represents the parameters for authentication in the scanning process.
 * @property {'manual' | 'http' | 'form' | 'json' | 'script' | 'autodetect' | 'browser' | 'client'} method - Authentication method.
 * @property {Object} parameters - Parameters specific to the authentication method.
 * @property {string} [parameters.hostname] - Only for 'http' authentication.
 * @property {number} [parameters.port] - Only for 'http' authentication.
 * @property {string} [parameters.realm] - Only for 'http' authentication.
 * @property {string} [parameters.loginPageUrl] - Only for 'form' or 'json' authentication.
 * @property {string} [parameters.loginRequestUrl] - Only for 'form' or 'json' authentication.
 * @property {string} [parameters.loginRequestBody] - Only for 'form' or 'json' authentication.
 * @property {string} [parameters.script] - Path to script, only for 'script' authentication.
 * @property {string} [parameters.scriptInline] - Full script (may be multi-line), only for 'script' authentication.
 * @property {string} [parameters.scriptEngine] - Name of the script engine to use, only for 'script' authentication.
 * @property {Object} verification - Verification details for authentication.
 * @property {'response' | 'request' | 'both' | 'poll'} verification.method - Verification method.
 * @property {string} [verification.loggedInRegex] - Regex pattern for determining if logged in.
 * @property {string} [verification.loggedOutRegex] - Regex pattern for determining if logged out.
 * @property {number} [verification.pollFrequency] - Poll frequency, only for 'poll' verification.
 * @property {'requests' | 'seconds'} [verification.pollUnits] - Poll units, only for 'poll' verification.
 * @property {string} [verification.pollUrl] - URL to poll, only for 'poll' verification.
 * @property {string} [verification.pollPostData] - Post data to include in the poll, only for 'poll' verification.
 * @property {Object[]} [verification.pollAdditionalHeaders] - Additional headers for poll request, only for 'poll' verification.
 * @property {string} verification.pollAdditionalHeaders[].header - The header name.
 * @property {string} verification.pollAdditionalHeaders[].value - The header value.
 */
export interface IAuthenticationParameters {
  method: 'manual' | 'http' | 'form' | 'json' | 'script' | 'autodetect' | 'browser' | 'client'; // Authentication method
  parameters: IAuthenticationParametersParameters; // Parameters specific to the authentication method
  verification: IAuthenticationParametersVerification; // Verification details for authentication
}

export interface ISessionManagementParametersParameters {
  script?: string; // Path to script, only for 'script' session management
  scriptEngine?: string; // Name of the script engine to use, only for 'script' session management
}

/**
 * @interface ISessionManagementParameters
 * Represents the parameters for session management in the scanning process.
 * @property {'cookie' | 'http' | 'script'} method - Session management method.
 * @property {Object} parameters - Parameters specific to the session management method.
 * @property {string} [parameters.script] - Path to script, only for 'script' session management.
 * @property {string} [parameters.scriptEngine] - Name of the script engine to use, only for 'script' session management.
 */
export interface ISessionManagementParameters {
  method: 'cookie' | 'http' | 'script'; // Session management method
  parameters: ISessionManagementParametersParameters; // Parameters specific to the session management method
}

/**
 * @interface ITechnology
 * Represents the technology details for the scanning context.
 * @property {string[]} [exclude] - List of tech to exclude.
 * @property {string[]} [include] - List of tech to include.
 */
export interface ITechnology {
  exclude?: string[]; // List of tech to exclude
  include?: string[]; // List of tech to include
}

/**
 * @interface IDataDrivenNode
 * Represents a data-driven node in the scanning process.
 * @property {string} name - Name of the data driven node.
 * @property {string} regex - Regex of the data driven node, must contain 2 or 3 regex groups.
 */
export interface IDataDrivenNode {
  name: string; // Name of the data driven node
  regex: string; // Regex of the data driven node, must contain 2 or 3 regex groups
}

/**
 * @interface IContextStructure
 * Represents the structure details of the context.
 * @property {string[]} [structuralParameters] - List of names of structural parameters.
 * @property {IDataDrivenNode[]} [dataDrivenNodes] - List of data driven nodes.
 */
export interface IContextStructure {
  structuralParameters?: string[]; // List of names of structural parameters
  dataDrivenNodes?: IDataDrivenNode[]; // List of data driven nodes
}

/**
 * @interface ITotpConfig
 * Represents the TOTP (Time-based One-Time Password) configuration for a user.
 * @property {string} secret - TOTP secret.
 * @property {number} [period] - TOTP period, default: 30.
 * @property {number} [digits] - Number of digits, default: 6.
 * @property {string} [algorithm] - Algorithm, default: SHA1.
 */
export interface ITotpConfig {
  secret: string; // TOTP secret
  period?: number; // TOTP period, default: 30
  digits?: number; // Number of digits, default: 6
  algorithm?: string; // Algorithm, default: SHA1
}

/**
 * @interface IUserCredentials
 * Represents the credentials for a user.
 * @property {string} username - Username for authentication.
 * @property {string} password - Password for authentication.
 * @property {ITotpConfig} [totp] - Optional TOTP configuration.
 */
export interface IUserCredentials {
  username: string; // Username for authentication
  password: string; // Password for authentication
  totp?: ITotpConfig; // Optional TOTP configuration
}

/**
 * @interface IContextUser
 * Represents a user in the context.
 * @property {string} name - Name to be used by the jobs.
 * @property {IUserCredentials[]} credentials - User credentials for authentication.
 */
export interface IContextUser {
  name: string; // Name to be used by the jobs
  credentials: IUserCredentials[]; // User credentials for authentication
}

/**
 * @interface IContext
 * Represents a scanning context with its configuration.
 * @property {string} name - Name to refer to this context.
 * @property {string[]} urls - Mandatory list of top-level URLs.
 * @property {string[]} [includePaths] - Optional list of regexes to include.
 * @property {string[]} [excludePaths] - Optional list of regexes to exclude.
 * @property {IAuthenticationParameters} authentication - Authentication details.
 * @property {ISessionManagementParameters} sessionManagement - Session management details.
 * @property {ITechnology} technology - Technology details.
 * @property {Object} structure - Structure details of the context.
 * @property {string[]} [structure.structuralParameters] - List of names of structural parameters.
 * @property {IDataDrivenNode[]} [structure.dataDrivenNodes] - List of data driven nodes.
 * @property {Object[]} users - List of users for the context.
 * @property {string} users[].name - Name to be used by the jobs.
 * @property {Object[]} users[].credentials - User credentials for authentication.
 * @property {string} users[].credentials[].username - Username for authentication.
 * @property {string} users[].credentials[].password - Password for authentication.
 * @property {Object} [users[].credentials[].totp] - Optional TOTP configuration.
 * @property {string} users[].credentials[].totp.secret - TOTP secret.
 * @property {number} [users[].credentials[].totp.period] - TOTP period, default: 30.
 * @property {number} [users[].credentials[].totp.digits] - Number of digits, default: 6.
 * @property {string} [users[].credentials[].totp.algorithm] - Algorithm, default: SHA1.
 */
export interface IContext {
  name: string; // Name to refer to this context
  urls: string[]; // Mandatory list of top-level URLs
  includePaths?: string[]; // Optional list of regexes to include
  excludePaths?: string[]; // Optional list of regexes to exclude
  authentication: IAuthenticationParameters; // Authentication details
  sessionManagement: ISessionManagementParameters; // Session management details
  technology: ITechnology; // Technology details
  structure: IContextStructure; // Structure details of the context
  users: IContextUser[];
}

/**
 * @interface IEnvironmentParameters
 * Represents the parameters for the environment configuration in the scanning process.
 * @property {boolean} [failOnError] - If true, exit on error.
 * @property {boolean} [failOnWarning] - If true, exit on warning.
 * @property {boolean} [continueOnFailure] - If true, continue running all jobs even if one fails.
 * @property {boolean} [progressToStdout] - If true, write job progress to stdout.
 */
export interface IEnvironmentParameters {
  failOnError?: boolean; // Exit on error
  failOnWarning?: boolean; // Exit on warning
  continueOnFailure?: boolean; // Continue running all jobs even if one fails
  progressToStdout?: boolean; // Write job progress to stdout
}

/**
 * @interface IEnvironmentProxy
 * Represents the proxy configuration for the environment.
 * @property {string} [hostname] - Proxy host.
 * @property {number} [port] - Proxy port.
 * @property {string} [realm] - Proxy realm.
 * @property {string} [username] - Proxy username.
 * @property {string} [password] - Proxy password.
 */
export interface IEnvironmentProxy {
  hostname?: string; // Proxy host
  port?: number; // Proxy port
  realm?: string; // Proxy realm
  username?: string; // Proxy username
  password?: string; // Proxy password
}

/**
 * @interface IEnvironment
 * Represents the environment configuration for the scanning process.
 * @property {IContext[]} contexts - List of contexts for the scanning environment.
 * @property {Object} [vars] - Custom variables for the environment.
 * @property {string} [vars.key] - Custom variable key-value pairs.
 * @property {Object} parameters - Parameters for the environment configuration.
 * @property {boolean} [parameters.failOnError] - If true, exit on error.
 * @property {boolean} [parameters.failOnWarning] - If true, exit on warning.
 * @property {boolean} [parameters.continueOnFailure] - If true, continue running all jobs even if one fails.
 * @property {boolean} [parameters.progressToStdout] - If true, write job progress to stdout.
 * @property {Object} [proxy] - Proxy configuration for the environment.
 * @property {string} [proxy.hostname] - Proxy host.
 * @property {number} [proxy.port] - Proxy port.
 * @property {string} [proxy.realm] - Proxy realm.
 * @property {string} [proxy.username] - Proxy username.
 * @property {string} [proxy.password] - Proxy password.
 */
export interface IEnvironment {
  contexts: IContext[]; // List of contexts
  vars?: { [key: string]: string }; // Custom variables
  parameters: IEnvironmentParameters;
  proxy?: IEnvironmentProxy;
}
