export type ActiveTab = 
  | 'overview'
  | 'autonomous-runbook'
  | 'splendor'
  | 'jj-company'
  | 'renasci'
  | 'singularity'
  | 'divergence-audit'
  | 'matrices'
  | 'circle-resolution'
  | 'forensic-audit';

export interface PlaybookStep {
  stepNumber: number;
  title: string;
  description: string;
  actionRequired: string;
  outputArtifact: string;
  pitfallOrBreakpoint?: string;
}

export interface MatrixCell {
  rowLabel: string;
  colLabel: string;
  question: string;
  detail?: string;
}

export interface TransversalMatrix {
  id: number;
  code: string;
  title: string;
  simplifiedName: string;
  categories: string[];
  mechanism: string;
  verticalAxis: string;
  horizontalAxis: string;
  headers: string[];
  rows: {
    label: string;
    cells: string[];
  }[];
  adaptations: {
    forOperator: string;
    forChild7yo: string;
    forHarvardAdvisor: string;
  };
}

export interface TriangulationFinancialExample {
  logic?: string;
  agentCost: string;
  clientPrice: string;
  hoursPerWeek: string;
  operationalKpi: string;
  keyQuestion: string;
}

export interface CapitalDistributionItem {
  percentage: number;
  destination: string;
  governanceFunction: string;
}

export interface ForensicGapItem {
  id: string;
  entityOrArea: string;
  element: string;
  status: 'CONFIRMADO' | 'HUECO_IDENTIFICADO' | 'A_RECONSTRUIR_DOCUMENTALMENTE';
  ruleOrWarning: string;
  documentedSource: string;
}
