import { Construct } from 'constructs';
import { IImport } from '../../models/import'; // Adjust the import path as necessary

interface ImportProps {
  import: IImport; // Ensure that the import property matches the IImportParameters interface
}

/**
 * Class representing the import configuration.
 *
 * @class ImportConfig
 * @extends {Construct}
 */
class ImportConfig extends Construct {
  config: IImport;

  constructor(scope: Construct, id: string, props: ImportProps) {
    super(scope, id);

    // Validate that props.import is provided
    if (!props.import) {
      throw new Error('The import property is required.');
    }

    this.config = props.import;
  }

  toYaml() {
    return this.config;
  }
}

export { ImportConfig };
