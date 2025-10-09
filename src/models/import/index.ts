/**
 * @typedef {'har' | 'modsec2' | 'url' | 'zap_messages'} ImportType
 * Represents the allowed import types.
 */
export type ImportType = 'har' | 'modsec2' | 'url' | 'zap_messages'; // Allowed import types

/**
 * @interface IImport
 * Represents the configuration for an import operation.
 * @property {ImportType} type - The type of import, restricted to specific values.
 * @property {string} fileName - Name of the file containing the data.
 */
export interface IImport {
  type: ImportType; // The type of import, restricted to specific values
  fileName: string; // Name of the file containing the data
}

/*
  * Class representing an import operation.
  * @implements {IImport}
  * @class Import
  * @example
  * const importConfig = new Import({
  *   type: 'har',
  *   fileName: 'import.har'
  * });
  */
export class Import implements IImport {
  type: ImportType; // The type of import, restricted to specific values
  fileName: string; // Name of the file containing the data

  /**
   * Creates an instance of Import.
   * @param {ImportType} type - The type of import, restricted to specific values.
   * @param {string} fileName - Name of the file containing the data.
   * @throws Will throw an error if the type is not one of the allowed values.
   * @throws Will throw an error if the fileName is not provided.
   * @example
   * const importConfig = new Import({
   *   type: 'har',
   *   fileName: 'import.har'
   * });
   */
  constructor(options: IImport) {
    this.type = options.type;
    this.fileName = options.fileName;
  }
}

