export const patient = {
  name: 'Jordan Hale',
  age: '65 years',
  sex: 'Male',
  reason: 'Shortness of breath on exertion',
  referring: 'Dr. Amira Cole',
  service: 'Cardiology',
  request: 'Request to monitor',
}

export const demographics = [
  { label: 'Occupation', value: 'Accountant' },
  { label: 'Children', value: '2' },
  { label: 'Marital status', value: 'Married' },
  { label: 'Home', value: 'Lives with family' },
  { label: 'Diet', value: 'Mediterranean' },
  { label: 'Alcohol', value: 'Moderate' },
  { label: 'Activity', value: 'Walks daily' },
  { label: 'Smoking', value: 'Former' },
]

export const risks = ['HTN', 'DL', 'Former smoker']

export const cardiacMeds = ['Apixaban', 'Bisoprolol', 'Atorvastatin', 'ASA']
export const otherMeds = ['Metformin', 'Vitamin D']

export const diagnoses = ['CAD', 'HFpEF']

export type LabIntent = 'good' | 'attention' | 'neutral'

export type Lab = {
  label: string
  value: string
  unit: string
  delta: string
  intent: LabIntent
  series: number[]
}

export const labs: Lab[] = [
  { label: 'LDL-C', value: '2.1', unit: 'mmol/L', delta: '−12%', intent: 'good', series: [2.6, 2.5, 2.4, 2.3, 2.1] },
  { label: 'A1C', value: '6.4', unit: '%', delta: '+0.3', intent: 'attention', series: [5.8, 5.9, 6.0, 6.1, 6.4] },
  { label: 'ALT', value: '43', unit: 'U/L', delta: '+9', intent: 'attention', series: [28, 30, 31, 34, 43] },
  { label: 'eGFR', value: '58', unit: 'mL/min', delta: '−6', intent: 'attention', series: [72, 68, 64, 64, 58] },
  { label: 'NT-proBNP', value: '840', unit: 'ng/L', delta: '+220', intent: 'attention', series: [400, 480, 510, 620, 840] },
  { label: 'Potassium', value: '4.1', unit: 'mmol/L', delta: '0', intent: 'neutral', series: [4.0, 4.2, 4.1, 4.0, 4.1] },
]

export const echoMetrics: Lab[] = [
  { label: 'EF', value: '55', unit: '%', delta: '', intent: 'neutral', series: [57, 56, 56, 55, 55] },
  { label: 'RVSP', value: '32', unit: 'mmHg', delta: '', intent: 'neutral', series: [28, 30, 30, 31, 32] },
]

export const ecg = [
  { label: 'Rhythm', value: 'NSR' },
  { label: 'HR', value: '72 bpm' },
  { label: 'PR', value: '168 ms' },
  { label: 'QRS', value: '96 ms' },
  { label: 'QTc', value: '468 ms', flag: true },
  { label: 'Axis', value: 'Normal' },
]

export const exams = {
  Cardiac: ['Heart sounds normal', 'No murmur', 'Procedural site healed'],
  'Volume status': ['JVP 8 cm', 'Lungs clear', 'Trace ankle edema'],
  Other: ['Abdomen soft', 'No focal deficit'],
} as const

export type ExamKey = keyof typeof exams

export const priorAssessments = [
  { title: 'Cardiac catheterization — patent grafts', date: 'Friday, June 4, 2021' },
  { title: 'CT aortogram', date: 'Friday, June 4, 2021' },
]

export const defaultAssessment = {
  title: 'Worsening dyspnea, NYHA class III',
  nyha: 'III',
  symptoms: ['Dyspnea on exertion', 'Two-pillow orthopnea', 'Fatigue'],
  tests: [
    { id: 'bnp', label: 'Repeat NT-proBNP', checked: true },
    { id: 'echo', label: 'Transthoracic echo', checked: true },
    { id: 'cbc', label: 'CBC and electrolytes', checked: false },
  ],
  medication: 'Increase furosemide to 40 mg daily',
  note: 'Symptoms progressed over six weeks. No chest pain at rest. Weight up 2 kg.',
}
