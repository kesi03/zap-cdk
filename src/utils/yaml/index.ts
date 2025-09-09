import * as yaml from 'js-yaml';

/**
 * YamlUtils class provides utility functions for processing YAML data.
 */
export default class YamlUtils {
  // Add methods for YAML processing here
  public static parse(yamlString: string): any {

    return yaml.load(yamlString);
  }

  public static stringify(jsonObject: any): string {

    return yaml.dump(jsonObject);
  }
}