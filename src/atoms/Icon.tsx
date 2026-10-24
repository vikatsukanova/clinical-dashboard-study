const glyphs = {
  back: ['M15 19l-7-7 7-7', 'M8 12h12'],
  add: ['M12 5v14', 'M5 12h14'],
  check: ['M5 13l4 4L19 7'],
  clock: ['M12 8v4l3 3', 'M12 21a9 9 0 110-18 9 9 0 010 18z'],
  chevron: ['M6 9l6 6 6-6'],
  expand: ['M7 17L17 7', 'M9 7h8v8'],
  person: ['M15.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z', 'M5 19.5a7 7 0 0114 0'],
  timeline: ['M7 3h7l5 5v13H7z', 'M14 3v5h5', 'M9 13h6', 'M9 17h6'],
  clinical: ['M9 3h6', 'M10 3v5.2L5.8 17.8A3.2 3.2 0 008.8 22h6.4a3.2 3.2 0 003-4.2L14 8.2V3'],
  people: ['M9 11a3 3 0 100-6 3 3 0 000 6z', 'M3.5 19a5.5 5.5 0 0111 0', 'M16 11.5a2.5 2.5 0 100-5', 'M16.5 14.5a5 5 0 014 4.5'],
  home: ['M4 10.5L12 4l8 6.5V20H4z', 'M10 20v-6h4v6'],
  diet: ['M12 21c4-3.5 7-7 7-11a7 7 0 10-14 0c0 4 3 7.5 7 11z', 'M12 21V11'],
  alcohol: ['M8 3h8l-1.2 7.2a2.8 2.8 0 01-5.6 0L8 3z', 'M12 13v6', 'M9 21h6'],
  activity: ['M13 3L5 14h6l-1 7 8-11h-6l1-7z'],
  smoking: ['M4 15h11', 'M15 15v-1.2A2.2 2.2 0 0117.2 11.6H20', 'M4 15v3h9v-3'],
} as const

export type IconName = keyof typeof glyphs

export function Icon({ name }: { name: IconName }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {glyphs[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
