import { DrugProfile, ComparisonRow, CombinationDrug } from './types';

export const DRUG_PROFILES: DrugProfile[] = [
  {
    id: 'montelukast',
    name: 'Montelukast',
    tagline: 'Leukotriene Receptor Antagonist',
    drugClass: 'Leukotriene-receptor antagonist (blocks cysteinyl-leukotriene receptor 1)',
    mechanism: 'Prevents leukotrienes from causing bronchoconstriction, inflammation, and mucus production. Blocks the cysteinyl-leukotriene receptor 1.',
    indications: [
      'Asthma (prophylaxis) – Chronic therapy, not for acute attacks.',
      'Exercise-induced bronchoconstriction – Prevention of airway narrowing.',
      'Allergic rhinitis (seasonal or perennial) – When other treatments fail.',
    ],
    dosing: {
      general: 'Once daily, typically in the evening.',
      details: [
        'Adults/Adolescents (≥15y): 10 mg tablet daily.',
        'Asthma/Rhinitis: usually taken at night.',
        'Exercise-induced: 10 mg taken at least 2 hours before exercise.',
        'Do not use for acute asthma attacks.'
      ]
    },
    safety: {
      common: ['Diarrhoea', 'Fever', 'Headaches', 'Stomach pain', 'Nausea/Vomiting', 'Mild rash'],
      serious: [
        'Mood changes (anxiety, depression, aggression)',
        'Hallucinations',
        'Suicidal thoughts (Rare)',
        'Tremors',
        'Abnormal heartbeat'
      ],
      warnings: 'BOXED WARNING: Neuropsychiatric events. Monitor for behavior changes. Do not use for acute asthma attacks.',
      interactions: [
        'Metabolized by CYP3A4, 2C8, 2C9.',
        'Inducers like phenobarbital, phenytoin, and rifampicin reduce concentration.'
      ]
    },
    colorTheme: 'rose'
  },
  {
    id: 'fexofenadine',
    name: 'Fexofenadine',
    tagline: 'Non-sedating Antihistamine',
    drugClass: 'Second-generation, non-sedating H1-antihistamine',
    mechanism: 'Blocks peripheral H1-histamine receptors. Less lipophilic, meaning minimal CNS penetration (non-drowsy).',
    indications: [
      'Seasonal allergic rhinitis (hay fever) – Sneezing, runny nose, itchy eyes.',
      'Chronic idiopathic urticaria (hives) – Itching and rash.',
    ],
    dosing: {
      general: 'Once or twice daily depending on strength.',
      details: [
        'Allergic Rhinitis: 180 mg once daily (adults).',
        'Urticaria: 60 mg every 12h OR 180 mg once daily.',
        'Take with water. Avoid fruit juice (decreases absorption).'
      ]
    },
    safety: {
      common: ['Headache', 'Drowsiness (rare)', 'Tiredness', 'Indigestion', 'Nausea'],
      serious: ['Fast/irregular heartbeat (rare)', 'Severe allergic reaction'],
      interactions: [
        'Antacids (Al/Mg) reduce absorption (separate by 2 hours).',
        'Fruit juice (orange, grapefruit, apple) decreases absorption.'
      ]
    },
    colorTheme: 'blue'
  },
  {
    id: 'desloratadine',
    name: 'Desloratadine',
    tagline: 'Selective H1-Antagonist',
    drugClass: 'Second-generation tricyclic H1-antihistamine (metabolite of loratadine)',
    mechanism: 'Selectively antagonizes peripheral H1-receptors. Long duration of action. Minimal CNS entry.',
    indications: [
      'Allergic rhinitis (seasonal & perennial).',
      'Urticaria (hives).',
      'Pruritus and allergic skin reactions (off-label uses).',
    ],
    dosing: {
      general: 'Once daily, with or without food.',
      details: [
        'Adults/Children (≥12y): 5 mg once daily.',
        'Children (6–11y): 2.5 mg once daily.',
        'Forms: Tablets, oral solution, disintegrating tablets.'
      ]
    },
    safety: {
      common: ['Headache', 'Nausea', 'Dry mouth', 'Fatigue', 'Sore throat'],
      serious: ['Rash', 'Hives', 'Swelling of face/limbs', 'Difficulty breathing'],
      warnings: 'Use cautiously in severe renal impairment and history of seizures.',
    },
    colorTheme: 'teal'
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    aspect: 'Drug Class',
    fexofenadine: '2nd-gen non-sedating H1-antihistamine',
    desloratadine: '2nd-gen tricyclic H1-antihistamine (metabolite of loratadine)'
  },
  {
    aspect: 'Primary Indications',
    fexofenadine: 'Seasonal allergic rhinitis, Urticaria',
    desloratadine: 'Allergic rhinitis (seasonal/perennial), Urticaria, Pruritus'
  },
  {
    aspect: 'Typical Dosing',
    fexofenadine: '180 mg once daily OR 60 mg twice daily',
    desloratadine: '5 mg once daily'
  },
  {
    aspect: 'Interaction Notes',
    fexofenadine: 'Avoid fruit juice & Al/Mg antacids',
    desloratadine: 'Caution in severe renal/hepatic impairment'
  },
  {
    aspect: 'Sedation Risk',
    fexofenadine: 'Minimal (does not readily enter CNS)',
    desloratadine: 'Minimal (peripherally selective)'
  }
];

export const COMBINATIONS: CombinationDrug[] = [
  {
    name: 'Allegra M',
    composition: 'Fexofenadine 120 mg + Montelukast 10 mg',
    indication: 'Allergic rhinitis in adults',
    notes: [
      'Take 1 tablet daily.',
      'Separate from Al/Mg antacids by 2 hours.',
      'Monitor for neuropsychiatric events (Montelukast component).'
    ]
  },
  {
    name: 'Lorclast',
    composition: 'Desloratadine 5 mg + Montelukast 10 mg',
    indication: 'Allergic rhinitis with/without asthma (Adults ≥15y)',
    notes: [
      'Take 1 tablet daily, usually evening.',
      'Caution in renal impairment or seizure history.',
      'Not for acute asthma attacks.'
    ]
  }
];