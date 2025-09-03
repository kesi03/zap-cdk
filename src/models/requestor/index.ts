export interface IRequest {
  url: string; // Mandatory URL of the request to be made
  name?: string; // Optional name for the request, for documentation only
  method?: string; // Non-empty request method, default: GET
  httpVersion?: string; // The HTTP version to send the request with, default: HTTP/1.1
  headers?: string[]; // Optional list of additional headers to include in the request
  data?: string; // Optional data to send in the request body, supports vars
  responseCode?: number; // Optional expected response code
}

export interface IRequestorParameters {
  user?: string; // Optional user for authenticated requests
  requests: IRequest[]; // A list of requests to make
  enabled?: boolean; // If set to false the job will not be run, default: true
  alwaysRun?: boolean; // If set and the job is enabled then it will run even if the plan exits early, default: false
}
