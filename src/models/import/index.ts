export type ImportType = 'har' | 'modsec2' | 'url' | 'zap_messages'; // Allowed import types

export interface IImport {
  type: ImportType; // The type of import, restricted to specific values
  fileName: string; // Name of the file containing the data
}
