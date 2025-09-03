import { IEnvironment } from "../environment";
import { IJob } from "../job"; // Adjust the path if IJob is defined elsewhere

export interface IZap {
  env: IEnvironment
  jobs: IJob[]
}