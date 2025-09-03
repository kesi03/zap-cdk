import { Construct } from 'constructs';
import { ISpider } from "../../models/spider"; // Adjust the import path as necessary

interface SpiderProps {
  spider: ISpider; // Ensure that the spider property matches the ISpider interface
}

class SpiderConfig extends Construct {
  config: ISpider;

  constructor(scope: Construct, id: string, props: SpiderProps) {
    super(scope, id);

    // Validate that props.spider is provided
    if (!props.spider) {
      throw new Error("The spider property is required.");
    }

    this.config = props.spider;
  }

  toYaml() {
    return this.config;
  }
}
export { SpiderConfig };