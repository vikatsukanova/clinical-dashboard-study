import { useState } from 'react'
import { Chip } from '../atoms/Chip'
import { Icon, type IconName } from '../atoms/Icon'
import { Tab } from '../atoms/Tab'
import { cardiacMeds, demographics, otherMeds, patient, risks } from '../data'

type MedGroup = 'cardiac' | 'other'

const factIcons: Record<string, { icon: IconName; tone: string }> = {
  Occupation: { icon: 'person', tone: 'blue' },
  Children: { icon: 'people', tone: 'pink' },
  'Marital status': { icon: 'clock', tone: 'amber' },
  Home: { icon: 'home', tone: 'blue' },
  Diet: { icon: 'diet', tone: 'green' },
  Alcohol: { icon: 'alcohol', tone: 'orange' },
  Activity: { icon: 'activity', tone: 'red' },
  Smoking: { icon: 'smoking', tone: 'violet' },
}

export function PatientRecord() {
  const [meds, setMeds] = useState<MedGroup>('cardiac')
  const list = meds === 'cardiac' ? cardiacMeds : otherMeds

  return (
    <aside className="panel patient" aria-label="Patient">
      <header className="patient-id">
        <p className="back"><Icon name="back" /> All patients</p>
        <h2>{patient.name}</h2>
        <p className="meta">
          {patient.age}, {patient.sex}
        </p>
      </header>
      <section className="block patient-referral">
          <p><span>Reason</span><strong>{patient.reason}</strong></p>
          <p><span>Referring MD</span><strong>{patient.referring}</strong></p>
          <p><span>Service</span><strong>{patient.service}</strong></p>
          <p><span>Pharmacy</span><strong>{patient.request}</strong></p>
        </section>
        <section className="block">
          <h3>Demographics</h3>
          <div className="facts">
            {demographics.map((item) => {
              const mark = factIcons[item.label]
              return (
                <p className={`fact fact-${mark.tone}`} key={item.label}>
                  <span className="fact-mark">
                    <Icon name={mark.icon} />
                  </span>
                  <span className="fact-copy">
                    <span className="fact-value">{item.value}</span>
                    <span className="fact-label">{item.label}</span>
                  </span>
                </p>
              )
            })}
          </div>
        </section>
        <section className="block">
          <h3>Medical & Surgical History</h3>
          <p className="history-line">PCI to the LAD <span aria-hidden="true">•</span> 2019</p>
        </section>
        <section className="block">
          <h3>Cardiac risk factors</h3>
          <div className="wrap">
            {risks.map((risk, index) => (
              <Chip key={risk} tone={index === 0 ? 'brand' : 'neutral'}>{risk}</Chip>
            ))}
          </div>
        </section>
        <section className="block">
          <h3>Medications</h3>
          <div className="wrap med-switch">
            <Tab variant="text" pressed={meds === 'cardiac'} count={cardiacMeds.length} onClick={() => setMeds('cardiac')}>
              Cardiac meds
            </Tab>
            <Tab variant="text" pressed={meds === 'other'} count={otherMeds.length} onClick={() => setMeds('other')}>
              Other meds
            </Tab>
          </div>
          <div className="wrap">
            {list.map((med, index) => (
              <Chip key={med} tone={index === 0 ? 'brand' : 'neutral'}>{med}</Chip>
            ))}
          </div>
        </section>
      <section className="block">
        <h3>Allergies</h3>
        <p className="meta">No known allergies</p>
      </section>
    </aside>
  )
}
