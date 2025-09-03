import { Construct } from 'constructs';
import { IActiveScanConfig } from "../../models/activeScanConfig";

interface ActiveScanConfigProps {
  activeScanConfig: IActiveScanConfig; // Ensure that the activeScanConfig property matches the IActiveScanConfig interface
}

class ActiveScanConfig extends Construct {
  config: IActiveScanConfig;

  constructor(scope: Construct, id: string, props: ActiveScanConfigProps) {
    super(scope, id);

    // Validate that props.activeScanConfig is provided
    if (!props.activeScanConfig) {
      throw new Error("The activeScanConfig property is required.");
    }

    this.config = props.activeScanConfig;
  }

  toYaml() {
    return this.config;
  }
}

export { ActiveScanConfig };