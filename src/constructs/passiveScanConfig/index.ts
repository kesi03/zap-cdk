import { Construct } from 'constructs';
import { IPassiveScanConfig } from '../../models/passiveScanConfig';

interface PassiveScanConfigProps {
  passiveScanConfig: IPassiveScanConfig; // Ensure that the passiveScanConfig property matches the IPassiveScanConfig interface
}

class PassiveScanConfig extends Construct {
  config: IPassiveScanConfig;

  constructor(scope: Construct, id: string, props: PassiveScanConfigProps) {
    super(scope, id);

    // Validate that props.passiveScanConfig is provided
    if (!props.passiveScanConfig) {
      throw new Error("The passiveScanConfig property is required.");
    }

    this.config = props.passiveScanConfig;
  }

  toYaml() {
    return this.config;
  }
}
export { PassiveScanConfig };