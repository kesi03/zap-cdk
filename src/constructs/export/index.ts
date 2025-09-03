import { Construct } from 'constructs';
import { IExport } from "../../models/export"; // Adjust the import path as necessary

interface ExportProps {
  export: IExport; // Ensure that the export property matches the IExportParameters interface
}

class ExportConfig extends Construct {
  config: IExport;

  constructor(scope: Construct, id: string, props: ExportProps) {
    super(scope, id);

    // Validate that props.export is provided
    if (!props.export) {
      throw new Error("The export property is required.");
    }

    this.config = props.export;
  }

  toYaml() {
    return this.config;
  }
}

export { ExportConfig };
