// Tema escuro inspirado na série (verde do portal + azul do Rick)
// Contraste dos textos sobre "background"/"surface" acima de 4.5:1 (WCAG AA)
export const colors = {
  background: '#0B1220', // azul-noite do espaço
  surface: '#152238', // cards e cabeçalhos
  surfaceAlt: '#1E2F4A', // inputs e elementos elevados
  border: '#2C4466',

  primary: '#97CE4C', // verde do portal
  onPrimary: '#0B1220', // texto sobre o verde
  secondary: '#44C3E8', // azul do cabelo do Rick
  accent: '#F0E14A', // amarelo (estrelas de nota)

  text: '#F2F5F9',
  textMuted: '#A9B7C9',

  // Status dos personagens
  alive: '#6EDB7A',
  dead: '#FF6B6B',
  unknown: '#B0B8C4',

  favorite: '#FF5C8A', // coração
  error: '#FF6B6B',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  sm: 6,
  md: 12,
  lg: 20,
  pill: 999,
} as const;

// Tamanhos base; o allowFontScaling continua ativo nos componentes
export const typography = {
  title: { fontSize: 24, fontWeight: '700' },
  subtitle: { fontSize: 18, fontWeight: '600' },
  body: { fontSize: 16, fontWeight: '400' },
  caption: { fontSize: 13, fontWeight: '400' },
} as const;

// Área de toque mínima recomendada (44x44)
export const MIN_TOUCH_SIZE = 44;

export const theme = { colors, spacing, radius, typography, MIN_TOUCH_SIZE };
export type Theme = typeof theme;
