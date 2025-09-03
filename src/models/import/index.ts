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
