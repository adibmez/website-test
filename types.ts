export interface DrugSection {
  title: string;
  content: string | string[];
}

export interface DrugProfile {
  id: string;
  name: string;
  tagline: string;
  drugClass: string;
  mechanism: string;
  indications: string[];
  dosing: {
    general: string;
    details: string[];
  };
  safety: {
    common: string[];
    serious: string[];
    warnings?: string; // For boxed warnings etc.
    interactions?: string[];
  };
  colorTheme: 'teal' | 'blue' | 'indigo' | 'rose';
}

export interface ComparisonRow {
  aspect: string;
  fexofenadine: string;
  desloratadine: string;
}

export interface CombinationDrug {
  name: string;
  composition: string;
  indication: string;
  notes: string[];
}