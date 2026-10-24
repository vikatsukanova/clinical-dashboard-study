import type { Meta, StoryObj } from '@storybook/react-vite'

const colors = [
  ['Canvas', '--color-bg-canvas', '#f8fafc'],
  ['Surface', '--color-bg-surface', '#ffffff'],
  ['Subtle', '--color-bg-subtle', '#e2e8f0'],
  ['Brand', '--color-bg-brand', '#2563eb'],
  ['Brand subtle', '--color-bg-brand-subtle', '#eff6ff'],
  ['Success', '--color-bg-success', '#15803d'],
  ['Warning subtle', '--color-bg-warning-subtle', '#fef9c3'],
  ['Danger subtle', '--color-bg-danger-subtle', '#ffe4e6'],
  ['Text', '--color-text-primary', '#0f172a'],
  ['Text secondary', '--color-text-secondary', '#64748b'],
  ['Text brand', '--color-text-brand', '#2563eb'],
  ['Text success', '--color-text-success', '#15803d'],
  ['Text warning', '--color-text-warning', '#a16207'],
  ['Text danger', '--color-text-danger', '#b91c1c'],
  ['Border', '--color-border-strong', '#e2e8f0'],
]

const spaces = [4, 8, 12, 16, 24, 32]
const radii = [
  ['sm', '8px'],
  ['md', '12px'],
  ['lg', '16px'],
  ['full', '999px'],
]

function Foundations() {
  return (
    <div className="foundations">
      <header>
        <h2>Clinical interface tokens</h2>
        <p className="meta">Color, type, space, and radius for a patient chart. Names match the CSS variables a component library would consume.</p>
      </header>
      <section>
        <h3>Color</h3>
        <div className="swatches">
          {colors.map(([name, token, value]) => (
            <figure className="swatch" key={token}>
              <div className="swatch-chip" style={{ background: value }} />
              <figcaption>
                <strong>{name}</strong>
                <code>{token}</code>
                <span className="token">{value}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section>
        <h3>Type</h3>
        <div className="type-list">
          <div className="type-row">
            <strong className="type-title">Title 22 / 26</strong>
            <code>text/title</code>
          </div>
          <div className="type-row">
            <strong className="type-heading">Heading 15 / 20</strong>
            <code>text/heading</code>
          </div>
          <div className="type-row">
            <span className="type-metric">22.4</span>
            <code>text/metric</code>
          </div>
          <div className="type-row">
            <span>Body 14 / 20</span>
            <code>text/body</code>
          </div>
          <div className="type-row">
            <span className="type-label">Label</span>
            <code>text/label</code>
          </div>
          <div className="type-row">
            <span className="meta">Caption 12 / 16</span>
            <code>text/caption</code>
          </div>
        </div>
      </section>
      <section>
        <h3>Space</h3>
        <div className="space-list">
          {spaces.map((space) => (
            <div className="space-row" key={space}>
              <span className="space-bar" style={{ width: space * 4 }} />
              <code>--space-{space}</code>
              <span className="token">{space}px</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3>Radius</h3>
        <div className="row">
          {radii.map(([name, value]) => (
            <div className="radius-row" key={name}>
              <span className="radius-box" style={{ borderRadius: value }} />
              <code>--radius-{name}</code>
              <span className="token">{value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const meta = {
  title: 'Foundations/Tokens',
  component: Foundations,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Foundations>

export default meta
type Story = StoryObj<typeof meta>

export const Tokens: Story = {}
