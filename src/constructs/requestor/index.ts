import { Construct } from 'constructs';
import { IRequestorParameters } from '../../models/requestor'; // Adjust the import path as necessary

interface RequestorProps {
  requestor: IRequestorParameters; // Ensure that the requestor property matches the IRequestorParameters interface
}

/**
 * Class representing the requestor configuration.
 *
 * @class RequestorConfig
 * @extends {Construct}
 */
class RequestorConfig extends Construct {
  config: IRequestorParameters;

  constructor(scope: Construct, id: string, props: RequestorProps) {
    super(scope, id);

    // Validate that props.requestor is provided
    if (!props.requestor) {
      throw new Error('The requestor property is required.');
    }

    this.config = props.requestor;
  }

  toYaml() {
    return this.config;
  }
}

export { RequestorConfig };
