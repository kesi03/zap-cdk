/**
 * Interface representing the configuration for a SOAP service.
 * @interface ISoap
 * @property {string} [wsdlFile] - Local file path of the WSDL, default: null.
 * @property {string} [wsdlUrl] - URL pointing to the WSDL, default: null.
 */
export interface ISoap {
  wsdlFile?: string; // Local file path of the WSDL, default: null
  wsdlUrl?: string; // URL pointing to the WSDL, default: null
}
