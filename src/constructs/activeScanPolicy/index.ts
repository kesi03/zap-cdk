import { Construct } from 'constructs';
import { IActiveScanPolicy } from "../../models/activeScanPolicy"; // Adjust the import path as necessary

interface ActiveScanPolicyProps {
  activeScanPolicy: IActiveScanPolicy; // Ensure that the activeScanPolicy property matches the IActiveScanPolicy interface
}

class ActiveScanPolicyConfig extends Construct {
  config: IActiveScanPolicy;

  constructor(scope: Construct, id: string, props: ActiveScanPolicyProps) {
    super(scope, id);

    // Validate that props.activeScanPolicy is provided
    if (!props.activeScanPolicy) {
      throw new Error("The activeScanPolicy property is required.");
    }

    this.config = props.activeScanPolicy;
  }

  toYaml() {
    return this.config;
  }
}
export { ActiveScanPolicyConfig };