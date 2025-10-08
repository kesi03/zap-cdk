import { Construct } from 'constructs';
import { ISpiderAjax } from '../../models/spiderAjax'; // Adjust the import path as necessary

/**
 * Properties for the SpiderAjaxConfig construct.
 * @interface ISpiderAjaxProps
 * @property {ISpiderAjax} spiderAjax - The SpiderAjax configuration.
 */
export interface ISpiderAjaxProps {
  spiderAjax: ISpiderAjax; // Ensure that the spiderAjax property matches the ISpiderAjaxParameters interface
}

/**
 * Class representing the SpiderAjax configuration.
 *
 * @class SpiderAjaxConfig
 * @extends {Construct}
 *
 */
export class SpiderAjaxConfig extends Construct {
  config: ISpiderAjax;

  /** Creates an instance of SpiderAjaxConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {ISpiderAjaxProps} props - The properties of the SpiderAjax configuration.
   */
  constructor(scope: Construct, id: string, props: ISpiderAjaxProps) {
    super(scope, id);

    // Validate that props.spiderAjax is provided
    if (!props.spiderAjax) {
      throw new Error('The spiderAjax property is required.');
    }

    this.config = props.spiderAjax;
  }

  /** Converts the SpiderAjax configuration to YAML format.
   *
   * @returns {any} The SpiderAjax configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}