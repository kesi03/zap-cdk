export type RiskLevel = 'high' | 'medium' | 'low' | 'info'; // Enum for risk levels
export type ConfidenceLevel = 'high' | 'medium' | 'low' | 'falsepositive'; // Enum for confidence levels

// Allowed template IDs
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

// Allowed theme IDs
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
