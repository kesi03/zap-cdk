/**
 * Interface representing the configuration for a SOAP service.
 * @interface ISoap
 *
 * @property {string} [wsdlFile] - Local file path of the WSDL, default: null.
 * @property {string} [wsdlUrl] - URL pointing to the WSDL, default: null.
 */
export interface ISoap {
  wsdlFile?: string; // Local file path of the WSDL, default: null
  wsdlUrl?: string; // URL pointing to the WSDL, default: null
}

/**
 * Class representing the SOAP service configuration.
 * @implements {ISoap}
 * @class Soap
 * @property {string} [wsdlFile] - Local file path of the WSDL, default: null.
 * @property {string} [wsdlUrl] - URL pointing to the WSDL, default: null.
 * @example
 * // Example usage:
 * @example
 * const soapConfig = new Soap({
 *   wsdlFile: 'service.wsdl',
 *   wsdlUrl: 'https://example.com/service?wsdl'
 * });
 */
export class Soap implements ISoap {
  wsdlFile?: string; // Local file path of the WSDL, default: null
  wsdlUrl?: string; // URL pointing to the WSDL, default: null

  /**
   * Creates an instance of Soap.
   * @param {ISoap} options - The options to initialize the SOAP configuration.
   * @property {string} [options.wsdlFile] - Local file path of the WSDL, default: null.
   * @property {string} [options.wsdlUrl] - URL pointing to the WSDL, default: null.
   */
  constructor(options: ISoap) {
    this.wsdlFile = options.wsdlFile ?? '';
    this.wsdlUrl = options.wsdlUrl ?? '';
  }
}