/**
 * @interface IPassiveScanWait
 * Represents the configuration for waiting during a passive scan.
 * @property {number} [maxDuration] - The max time to wait for the passive scanner, default: 0 (unlimited).
 */
export interface IPassiveScanWait {
  maxDuration?: number; // The max time to wait for the passive scanner, default: 0 (unlimited)
}
