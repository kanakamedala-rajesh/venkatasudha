/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary) / <alpha-value>)',
        onPrimary: 'hsl(var(--on-primary) / <alpha-value>)',
        primaryContainer: 'hsl(var(--primary-container) / <alpha-value>)',
        onPrimaryContainer: 'hsl(var(--on-primary-container) / <alpha-value>)',

        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        onSecondary: 'hsl(var(--on-secondary) / <alpha-value>)',
        secondaryContainer: 'hsl(var(--secondary-container) / <alpha-value>)',
        onSecondaryContainer:
          'hsl(var(--on-secondary-container) / <alpha-value>)',

        tertiary: 'hsl(var(--tertiary) / <alpha-value>)',
        onTertiary: 'hsl(var(--on-tertiary) / <alpha-value>)',
        tertiaryContainer: 'hsl(var(--tertiary-container) / <alpha-value>)',
        onTertiaryContainer:
          'hsl(var(--on-tertiary-container) / <alpha-value>)',

        error: 'hsl(var(--error) / <alpha-value>)',
        onError: 'hsl(var(--on-error) / <alpha-value>)',
        errorContainer: 'hsl(var(--error-container) / <alpha-value>)',
        onErrorContainer: 'hsl(var(--on-error-container) / <alpha-value>)',

        background: 'hsl(var(--background) / <alpha-value>)',
        onBackground: 'hsl(var(--on-background) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        onSurface: 'hsl(var(--on-surface) / <alpha-value>)',

        outline: 'hsl(var(--outline) / <alpha-value>)',
        surfaceVariant: 'hsl(var(--surface-variant) / <alpha-value>)',
        onSurfaceVariant: 'hsl(var(--on-surface-variant) / <alpha-value>)',
      },
      fontFamily: {
        arimaMadurai: ["'Arima Madurai', cursive"],
        arsenal: ["'Arsenal', sans-serif"],
        rubik: ["'Rubik', sans-serif"],
        spinnaker: ["'Spinnaker', sans-serif"],
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
        text: 'text 5s ease infinite',
        jelloHorizontal: 'jelloHorizontal 5s ease-in-out infinite both',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },

        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },

        // https://animista.net/play/attention/jello/jello-horizontal
        jelloHorizontal: {
          '0%': {
            transform: 'scale3d(1, 1, 1)',
          },
          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },
          '40%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },
          '50%': {
            transform: 'scale3d(1.15, 0.85, 1)',
          },
          '65%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },
          '75%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
