/**
 * @typedef {'har' | 'url' | 'yaml'} ExportType
 * Represents the allowed export types.
 */
export type ExportType = 'har' | 'url' | 'yaml'; // Allowed export types
/**
 * @typedef {'history' | 'sitestree' | 'all'} ExportSource
 * Represents the allowed export sources.
 */
export type ExportSource = 'history' | 'sitestree' | 'all'; // Allowed export sources

/**
 * @interface IExport
 * Represents the configuration for an export operation.
 * @property {string} [context] - Name of the context from which to export, default: first context.
 * @property {ExportType} [type] - The type of export, restricted to specific values, default: 'har'.
 * @property {ExportSource} [source] - The source of the export, restricted to specific values, default: 'history'.
 * @property {string} fileName - Name/path to the file.
 */
export interface IExport {
  context?: string; // Name of the context from which to export, default: first context
  type?: ExportType; // The type of export, restricted to specific values, default: 'har'
  source?: ExportSource; // The source of the export, restricted to specific values, default: 'history'
  fileName: string; // Name/path to the file
}
