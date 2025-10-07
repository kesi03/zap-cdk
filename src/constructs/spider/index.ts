import { Construct } from 'constructs';
import { ISpider } from '../../models/spider'; // Adjust the import path as necessary

/**
 * Properties for the SpiderConfig construct.
 *
 */
export interface SpiderProps {
  spider: ISpider; // Ensure that the spider property matches the ISpider interface
}

/**
 * Class representing the Spider configuration.
 *
 * @class SpiderConfig
 * @extends {Construct}
 */
class SpiderConfig extends Construct {
  config: ISpider;

  /** Creates an instance of SpiderConfig.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {SpiderProps} props - The properties of the spider configuration.
   */
  constructor(scope: Construct, id: string, props: SpiderProps) {
    super(scope, id);

    // Validate that props.spider is provided
    if (!props.spider) {
      throw new Error('The spider property is required.');
    }

    this.config = props.spider;
  }

  /** Converts the spider configuration to YAML format.
   *
   * @returns {any} The spider configuration in YAML format.
   */
  toYaml() {
    return this.config;
  }
}
export { SpiderConfig };