import { Construct } from "constructs";
import { IActiveScanJob } from "../../models/activeScan";


class ActiveScanJob extends Construct {
   job: IActiveScanJob;
  constructor(scope, id, props: IActiveScanJob) {
    super(scope, id);

    if (!props?.activeScan) {
      throw new Error("Invalid ActiveScanJob properties");
    }

    this.job = {
      activeScan: props.activeScan,
    };
  }

  toYaml() {
    return this.job;
  }
}

export { ActiveScanJob };