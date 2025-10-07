import * as fs from 'fs';
import * as path from 'path';
import { Construct } from 'constructs';
import * as yaml from 'js-yaml';

/**
 * The main application construct that aggregates all child constructs
 * and synthesizes them into a single YAML file.
 */
export class App extends Construct {
  /**
   * Initializes the App construct.
   */
  constructor() {
    super(undefined as any, 'App');
  }

  /**
   * Synthesizes all child constructs into a single YAML file.
   * Each construct must implement a `synth()` method.
   */
  synth(outputDir: string = './zap-out', fileName: string = 'zap.yaml'): void {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const aggregated: Record<string, any> = {};

    for (const child of this.node.children) {
      if ('synth' in child && typeof child.synth === 'function') {
        const yamlContent = child.synth();
        aggregated[child.node.id] = yaml.load(yamlContent);
      }
    }

    const finalYaml = yaml.dump(aggregated);
    const filePath = path.join(outputDir, fileName);
    fs.writeFileSync(filePath, finalYaml, 'utf8');
    console.log(`✅ Synthesized ${filePath}`);
  }
}