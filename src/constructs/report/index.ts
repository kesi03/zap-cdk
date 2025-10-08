import { Construct } from 'constructs';
import { IReport } from '../../models/report'; // Adjust the import path as necessary

/**
 * Properties for the ReportConfig construct.
 * @interface IReportProps
 * @property {IReport} report - The report configuration.
 */
export interface IReportProps {
  report: IReport; // Ensure that the report property matches the IReportParameters interface
}

/**
 * Class representing the report configuration.
 *
 * @class ReportConfig
 * @extends {Construct}
 */
export class ReportConfig extends Construct {
  config: IReport;

  /** Creates an instance of ReportConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {IReportProps} props - The properties of the report configuration.
   */
  constructor(scope: Construct, id: string, props: IReportProps) {
    super(scope, id);

    // Validate that props.report is provided
    if (!props.report) {
      throw new Error('The report property is required.');
    }

    this.config = props.report;
  }

  /** Converts the report configuration to YAML format.
   *
   * @returns {any} The report configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}

