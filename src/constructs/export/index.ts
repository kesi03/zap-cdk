import { Construct } from 'constructs';
import { IExport } from '../../models/export'; // Adjust the import path as necessary

/**
 * Properties for the ExportConfig construct.
 * @interface IExportProps
 * @property {IExport} export - The export configuration.
 */
export interface IExportProps {
  export: IExport; // Ensure that the export property matches the IExportParameters interface
}

/**
 * Class representing the export configuration.
 *
 * @class ExportConfig
 * @extends {Construct}
 */
export class ExportConfig extends Construct {
  config: IExport;

  /** Creates an instance of ExportConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {IExportProps} props - The properties of the export configuration.
   */
  constructor(scope: Construct, id: string, props: IExportProps) {
    super(scope, id);

    // Validate that props.export is provided
    if (!props.export) {
      throw new Error('The export property is required.');
    }

    this.config = props.export;
  }

  /**
   * Converts the export configuration to YAML format.
   *
   * @returns {any} The export configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}

