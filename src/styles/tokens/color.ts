export type Accent =
  | 'blue'
  | 'green'
  | 'indigo'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'teal'
  | 'yellow'
  | 'foreground'
export type Theme = 'light' | 'dark'

export const color = {
  base: {
    black: 'rgb(0, 0, 0)',
    current: 'currentColor',
    inherit: 'inherit',
    transparent: 'transparent',
  },
  light: {
    background: '255, 255, 255',
    backgroundSecondary: '247, 247, 247',
    backgroundTertiary: '247, 247, 247',
    foreground: '0, 0, 0',
    groupBackground: '255, 255, 255',
    groupBorder: '0, 0, 0',
    // accents
    blue: '0, 122, 255',
    green: '52, 199, 89',
    indigo: '88, 84, 214',
    orange: '255, 149, 0',
    pink: '255, 45, 85',
    purple: '175, 82, 222',
    red: '255, 59, 48',
    teal: '90, 200, 250',
    yellow: '255, 204, 0',
  },
  dark: {
    background: '20, 20, 20',
    backgroundSecondary: '10, 10, 10',
    backgroundTertiary: '20, 20, 20',
    foreground: '255, 255, 255',
    groupBackground: '10, 10, 10',
    groupBorder: '255, 255, 255',
    // accents
    blue: '10, 132, 255',
    green: '48, 209, 88',
    indigo: '94, 92, 230',
    orange: '255, 159, 10',
    pink: '255, 55, 95',
    purple: '191, 90, 242',
    red: '255, 69, 58',
    teal: '100, 210, 255',
    yellow: '255, 214, 10',
  },
}

export const shade = {
  light: {
    accent: '0.7',
    accentSecondary: '0.15',
    accentSecondaryHover: '0.2',
    foregroundSecondary: '0.075',
    foregroundSecondaryHover: '0.125',
    groupBorder: '0.075',
    text: '0.8',
    textSecondary: '0.4',
    textSecondaryHover: '0.5',
  },
  dark: {
    accent: '0.66',
    accentSecondary: '0.2',
    accentSecondaryHover: '0.25',
    foregroundSecondary: '0.1',
    foregroundSecondaryHover: '0.15',
    groupBorder: '0',
    text: '0.7',
    textSecondary: '0.35',
    textSecondaryHover: '0.4',
  },
}
