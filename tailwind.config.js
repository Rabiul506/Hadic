/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xsm': '480px',
      
      'sm': '640px',

      'md': '768px',

      'lg': '1080px',

      'xl': '1440px', // 1367px
    },
    extend: {
      scale: {
        '101': '1.01',
      },
      borderWidth: {
        '0.5': '0.5px',
        '0.1': '0.1px'
      },
      fontSize: {
        'mini': '.9rem'
      },
      backgroundImage: {
        // 'hero-pattern': "url('/assets/images/archer-bg.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },

    fontFamily: {
      'volkhov': ['Volkhov', 'serif'],
      'nunito': ['Nunito Sans', 'sans-serif'],
      'roboto': ['Roboto'],
      'miui': ['MIUI', 'sans-serif'], // Add MIUI with fallback
      'helvetica': ['Helvetica', 'Arial', 'sans-serif'], // Add Helvetica with fallbacks
      'poppins': ['Poppins', 'sans-serif'], // Add Poppins with fallback
      'sans': ['ui-sans-serif', 'system-ui'], // Default sans-serif fonts
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    }
  },
  plugins: [],
}

