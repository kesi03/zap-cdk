import * as yaml from 'js-yaml';

export default class YamlUtils {
  // Add methods for YAML processing here
  public static parse(yamlString: string): any {

    return yaml.load(yamlString);
  }

  public static stringify(jsonObject: any): string {

    return yaml.dump(jsonObject);
  }
}