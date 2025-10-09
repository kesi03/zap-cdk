/**
 * Interface representing a single request configuration.
 * @interface IRequest
 * @class Request
 * @property {string} url - Mandatory URL of the request to be made.
 * @property {string} [name] - Optional name for the request, for documentation only.
 * @property {string} [method] - Non-empty request method, default: GET.
 * @property {string} [httpVersion] - The HTTP version to send the request with, default: HTTP/1.1.
 * @property {string[]} [headers] - Optional list of additional headers to include in the request.
 * @property {string} [data] - Optional data to send in the request body, supports vars.
 * @property {number} [responseCode] - Optional expected response code.
 */
export interface IRequest {
  url: string; // Mandatory URL of the request to be made
  name?: string; // Optional name for the request, for documentation only
  method?: string; // Non-empty request method, default: GET
  httpVersion?: string; // The HTTP version to send the request with, default: HTTP/1.1
  headers?: string[]; // Optional list of additional headers to include in the request
  data?: string; // Optional data to send in the request body, supports vars
  responseCode?: number; // Optional expected response code
}

export class Request implements IRequest {
  url: string; // Mandatory URL of the request to be made
  name?: string; // Optional name for the request, for documentation only
  method?: string; // Non-empty request method, default: GET
  httpVersion?: string; // The HTTP version to send the request with, default: HTTP/1.1
  headers?: string[]; // Optional list of additional headers to include in the request
  data?: string; // Optional data to send in the request body, supports vars
  responseCode?: number; // Optional expected response code

  /**
   * Creates an instance of Request.
   * @param {IRequest} options - The configuration options for the request.
   * @property {string} options.url - Mandatory URL of the request to be made.
   * @property {string} [options.name] - Optional name for the request, for documentation only.
   * @property {string} [options.method='GET']  - Non-empty request method, default: GET.
   * @property {string} [options.httpVersion='HTTP/1.1'] - The HTTP version to send the request with, default: HTTP/1.1.
   * @property {string[]} [options.headers] - Optional list of additional headers to include in the request.
   * @property {string} [options.data] - Optional data to send in the request body, supports vars.
   * @property {number} [options.responseCode] - Optional expected response code.
   * @example
   * const request = new Request({
   *   url: 'https://example.com/api',
   *   method: 'POST',
   *   headers: ['Content-Type: application/json'],
   *   data: '{"key":"value"}',
   *   responseCode: 200
   * });
   */
  constructor(options: IRequest) {
    this.url = options.url;
    this.name = options.name;
    this.method = options.method ?? 'GET';
    this.httpVersion = options.httpVersion ?? 'HTTP/1.1';
    this.headers = options.headers;
    this.data = options.data;
    this.responseCode = options.responseCode;
  }
}

/**
 * Interface representing the parameters for making requests.
 * @interface IRequestorParameters
 * @class RequestorParameters
 * @property {string} [user] - Optional user for authenticated requests.
 * @property {IRequest[]} requests - A list of requests to make.
 * @property {boolean} [enabled] - If set to false, the job will not be run, default: true.
 * @property {boolean} [alwaysRun] - If set and the job is enabled, it will run even if the plan exits early, default: false.
 */
export interface IRequestorParameters {
  user?: string; // Optional user for authenticated requests
  requests: IRequest[]; // A list of requests to make
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}

export class RequestorParameters implements IRequestorParameters {
  user?: string; // Optional user for authenticated requests
  requests: IRequest[]; // A list of requests to make
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false

  /**
   * Creates an instance of RequestorParameters.
   * @param {IRequestorParameters} options - The configuration options for the requestor parameters.
   * @property {string} [options.user] - Optional user for authenticated requests.
   * @property {IRequest[]} options.requests - A list of requests to make.
   * @property {boolean} [options.enabled] - If set to false, the job will not be run, default: true.
   * @property {boolean} [options.alwaysRun] - If set and the job is enabled, it will run even if the plan exits early, default: false.
   * @example
   * const requestorParams = new RequestorParameters({
   *   user: 'admin',
   *   requests: [
   *     new Request({ url: 'https://example.com/api1' }),
   *     new Request({ url: 'https://example.com/api2', method: 'POST' })
   *   ],
   *   enabled: true,
   *   alwaysRun: false
   * });
   */
  constructor(options: IRequestorParameters) {
    this.user = options.user;
    this.requests = options.requests;
    this.enabled = options.enabled ?? true;
    this.alwaysRun = options.alwaysRun ?? false;
  }
}