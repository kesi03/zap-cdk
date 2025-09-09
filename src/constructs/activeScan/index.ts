import { Construct } from 'constructs';
import { IActiveScanJob } from '../../models/activeScan';

/**
 * Class representing an active scan job.
 *
 * @class ActiveScanJob
 * @extends {Construct}
 */
class ActiveScanJob extends Construct {
  /** The active scan job properties. */
  job: IActiveScanJob;

  /**
   * Creates an instance of ActiveScanJob.
   *
   * @param {Construct} scope - The scope in which this construct is defined.
   * @param {string} id - The ID of the construct.
   * @param {IActiveScanJob} props - The properties of the active scan job.
   */
  constructor(scope: Construct, id: string, props: IActiveScanJob) {
    super(scope, id);

    if (!props?.activeScan) {
      throw new Error('Invalid ActiveScanJob properties');
    }

    this.job = {
      activeScan: props.activeScan,
    };
  }

  /**
   * Converts the active scan job to YAML format.
   *
   * @returns {any} The active scan job in YAML format.
   */
  toYaml() {
    return this.job;
  }
}

export { ActiveScanJob };