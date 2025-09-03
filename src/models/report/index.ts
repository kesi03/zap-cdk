/**
 * Enum for risk levels.
 * @typedef {'high' | 'medium' | 'low' | 'info'} RiskLevel
 */
export type RiskLevel = 'high' | 'medium' | 'low' | 'info'; // Enum for risk levels
/**
 * Enum for confidence levels.
 * @typedef {'high' | 'medium' | 'low' | 'falsepositive'} ConfidenceLevel
 */
export type ConfidenceLevel = 'high' | 'medium' | 'low' | 'falsepositive'; // Enum for confidence levels


/**
 * Allowed template IDs for reports.
 * @typedef {'high-level-report' | 'modern' | 'risk-confidence-html' | 'traditional-html' | 'traditional-html-plus' | 'traditional-json' | 'traditional-json-plus' | 'sarif-json' | 'traditional-md' | 'traditional-pdf' | 'traditional-xml' | 'traditional-xml-plus'} ReportTemplate
 */
export type ReportTemplate =
  | 'high-level-report'
  | 'modern'
  | 'risk-confidence-html'
  | 'traditional-html'
  | 'traditional-html-plus'
  | 'traditional-json'
  | 'traditional-json-plus'
  | 'sarif-json'
  | 'traditional-md'
  | 'traditional-pdf'
  | 'traditional-xml'
  | 'traditional-xml-plus';

/**
 * Allowed theme IDs for reports.
 * @typedef {'console' | 'construction' | 'corporate' | 'marketing' | 'mountain' | 'nature' | 'ocean' | 'plutonium' | 'skyline' | 'technology'} ReportTheme
 */
export type ReportTheme =
  | 'console'
  | 'construction'
  | 'corporate'
  | 'marketing'
  | 'mountain'
  | 'nature'
  | 'ocean'
  | 'plutonium'
  | 'skyline'
  | 'technology';

/**
 * Interface representing a report configuration.
 * @interface IReport
 * @property {ReportTemplate} [template] - The template ID, restricted to specific values.
 * @property {ReportTheme} [theme] - The template theme, restricted to specific values.
 * @property {string} [reportDir] - The directory into which the report will be written.
 * @property {string} [reportFile] - The report file name pattern, default: {{yyyy-MM-dd}}-ZAP-Report-[[site]].
 * @property {string} [reportTitle] - The report title.
 * @property {string} [reportDescription] - The report description.
 * @property {boolean} [displayReport] - Display the report when generated, default: false.
 * @property {RiskLevel[]} [risks] - The risks to include in this report, default all.
 * @property {ConfidenceLevel[]} [confidences] - The confidences to include in this report, default all.
 * @property {string[]} [sections] - The template sections to include in this report - see the relevant template, default all.
 * @property {string[]} [sites] - The sites to include in this report, default all.
 */
export interface IReport {
  template?: ReportTemplate; // The template id, restricted to specific values
  theme?: ReportTheme; // The template theme, restricted to specific values
  reportDir?: string; // The directory into which the report will be written
  reportFile?: string; // The report file name pattern, default: {{yyyy-MM-dd}}-ZAP-Report-[[site]]
  reportTitle?: string; // The report title
  reportDescription?: string; // The report description
  displayReport?: boolean; // Display the report when generated, default: false
  risks?: RiskLevel[]; // The risks to include in this report, default all
  confidences?: ConfidenceLevel[]; // The confidences to include in this report, default all
  sections?: string[]; // The template sections to include in this report - see the relevant template, default all
  sites?: string[]; // The sites to include in this report, default all
}
