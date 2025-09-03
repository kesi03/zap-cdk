import { Construct } from 'constructs';
import { ISpiderAjax } from '../../models/spiderAjax'; // Adjust the import path as necessary

interface SpiderAjaxProps {
  spiderAjax: ISpiderAjax; // Ensure that the spiderAjax property matches the ISpiderAjaxParameters interface
}

/**
 * Class representing the SpiderAjax configuration.
 *
 * @class SpiderAjaxConfig
 * @extends {Construct}
 */
class SpiderAjaxConfig extends Construct {
  config: ISpiderAjax;

  constructor(scope: Construct, id: string, props: SpiderAjaxProps) {
    super(scope, id);

    // Validate that props.spiderAjax is provided
    if (!props.spiderAjax) {
      throw new Error('The spiderAjax property is required.');
    }

    this.config = props.spiderAjax;
  }

  toYaml() {
    return this.config;
  }
}

export { SpiderAjaxConfig };
