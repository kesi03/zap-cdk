import { Construct } from 'constructs';
import { IImport } from '../../models/import'; // Adjust the import path as necessary

/**
 * Properties for the ImportConfig construct.
 */
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

  /** Creates an instance of ImportConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {ImportProps} props - The properties of the import configuration.
   */
  constructor(scope: Construct, id: string, props: ImportProps) {
    super(scope, id);

    // Validate that props.import is provided
    if (!props.import) {
      throw new Error('The import property is required.');
    }

    this.config = props.import;
  }

  /**
   * Converts the import configuration to YAML format.
   *
   * @returns {any} The import configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}

export { ImportConfig };
