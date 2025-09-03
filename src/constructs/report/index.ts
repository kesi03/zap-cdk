import { Construct } from 'constructs';
import { IReport } from "../../models/report"; // Adjust the import path as necessary

interface ReportProps {
  report: IReport; // Ensure that the report property matches the IReportParameters interface
}

class ReportConfig extends Construct {
  config: IReport;

  constructor(scope: Construct, id: string, props: ReportProps) {
    super(scope, id);

    // Validate that props.report is provided
    if (!props.report) {
      throw new Error("The report property is required.");
    }

    this.config = props.report;
  }

  toYaml() {
    return this.config;
  }
}

export { ReportConfig };
