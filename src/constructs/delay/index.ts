import { Construct } from 'constructs';
import { IDelay } from '../../models/delay';

interface DelayProps {
  delay: IDelay; // Ensure that the delay property matches the IDelay interface
}

class DelayConfig extends Construct {
  config: IDelay;

  constructor(scope: Construct, id: string, props: DelayProps) {
    super(scope, id);

    // Validate that props.delay is provided
    if (!props.delay) {
      throw new Error("The delay property is required.");
    }

    this.config = props.delay;
  }

  toYaml() {
    return this.config;
  }
}
export { DelayConfig };