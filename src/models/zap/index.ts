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