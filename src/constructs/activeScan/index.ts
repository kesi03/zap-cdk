import { Construct } from 'constructs';
import { IActiveScanJob } from '../../models/activeScan';

/**
 * Class representing an active scan job.
 *
 * @class ActiveScanJob
 * @extends {Construct}
 */
class ActiveScanJob extends Construct {
  job: IActiveScanJob;

  constructor(scope: Construct, id: string, props: IActiveScanJob) {
    super(scope, id);

    if (!props?.activeScan) {
      throw new Error('Invalid ActiveScanJob properties');
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