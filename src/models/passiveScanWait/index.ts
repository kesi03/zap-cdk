/**
 * @interface IPassiveScanWait
 * Represents the configuration for waiting during a passive scan.
 * @property {number} [maxDuration] - The max time to wait for the passive scanner, default: 0 (unlimited).
 */
export interface IPassiveScanWait {
  maxDuration?: number; // The max time to wait for the passive scanner, default: 0 (unlimited)
}

/**
 * Class representing the configuration for waiting during a passive scan.
 * @implements {IPassiveScanWait}
 * @class PassiveScanWait
 * @example
 * const passiveScanWaitConfig = new PassiveScanWait({
 *   maxDuration: 300
 * });
 */
export class PassiveScanWait implements IPassiveScanWait {
  maxDuration?: number; // The max time to wait for the passive scanner, default: 0 (unlimited)

  /**
   * Creates an instance of PassiveScanWait.
   * @param {number} [maxDuration=0] - The max time to wait for the passive scanner, default: 0 (unlimited).
   */
  constructor(maxDuration = 0) {
    this.maxDuration = maxDuration ?? 0;
  }
}