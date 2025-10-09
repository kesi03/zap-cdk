import { IEnvironment } from '../environment';
import { IJob } from '../job'; // Adjust the path if IJob is defined elsewhere

/**
 * Interface representing the ZAP (Zed Attack Proxy) configuration.
 *
 * @interface IZap
 * @property {IEnvironment} env - The environment configuration.
 * @property {IJob[]} jobs - The list of jobs to be executed.
 */
export interface IZap {
  env: IEnvironment;
  jobs: IJob[];
}

/**
 * Class representing the ZAP configuration.
 *
 * @class Zap
 * @implements {IZap}
 * @example
 * const zapConfig = new Zap({
 *   env: new Environment({ /* environment config options *\/ }),
 *   jobs: [
 *     new Job({ /* job config options *\/ }),
 *     new Job({ /* another job config options *\/ })
 *   ]
 * });
 */
export class Zap implements IZap {
  env: IEnvironment;
  jobs: IJob[];

  /**
   * Creates an instance of Zap.
   *
   * @param {IZap} options - The ZAP configuration options.
   * @property {IEnvironment} options.env - The environment configuration.
   * @property {IJob[]} options.jobs - The list of jobs to be executed.
   */
  constructor(options: IZap) {
    this.env = options.env;
    this.jobs = options.jobs;
  }
}