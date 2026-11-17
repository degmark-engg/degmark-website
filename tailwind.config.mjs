// Design tokens from DESIGN_SYSTEM.md (loaded by src/styles/global.css via @config)
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F2A3D',
        teal: { DEFAULT: '#0B6670', dark: '#084E56', tint: '#E6F0F1', 'tint-text': '#0B4F56' },
        amber: '#F2B33D',
        page: '#F4F6F7',
        surface: { DEFAULT: '#FFFFFF', muted: '#EEF2F4' },
        line: { DEFAULT: '#DDE3E7', input: '#C6D0D7' },
        ink: { DEFAULT: '#14202B', soft: '#3A4752' },
        muted: '#55626E',
        'on-navy': { DEFAULT: '#D7E1E8', muted: '#C3D0DA' },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { container: '1200px' },
      borderRadius: { card: '10px', btn: '6px' },
    },
  },
};
