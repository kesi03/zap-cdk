export type ExportType = 'har' | 'url' | 'yaml'; // Allowed export types
export type ExportSource = 'history' | 'sitestree' | 'all'; // Allowed export sources

export interface IExport {
  context?: string; // Name of the context from which to export, default: first context
  type?: ExportType; // The type of export, restricted to specific values, default: 'har'
  source?: ExportSource; // The source of the export, restricted to specific values, default: 'history'
  fileName: string; // Name/path to the file
}
