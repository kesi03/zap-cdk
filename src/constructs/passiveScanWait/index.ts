import { Construct } from 'constructs';
import { IPassiveScanWait } from '../../models/passiveScanWait'; // Adjust the import path as necessary

interface PassiveScanWaitProps {
  passiveScanWait: IPassiveScanWait; // Ensure that the passiveScanWait property matches the IPassiveScanWaitParameters interface
}

/**
 * Class representing the passive scan wait configuration.
 *
 * @class PassiveScanWaitConfig
 * @extends {Construct}
 */
class PassiveScanWaitConfig extends Construct {
  config: IPassiveScanWait;

  constructor(scope: Construct, id: string, props: PassiveScanWaitProps) {
    super(scope, id);

    // Validate that props.passiveScanWait is provided
    if (!props.passiveScanWait) {
      throw new Error('The passiveScanWait property is required.');
    }

    this.config = props.passiveScanWait;
  }

  toYaml() {
    return this.config;
  }
}

export { PassiveScanWaitConfig };
