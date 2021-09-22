export default {
  components: {
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: 'yellow.500',
          padding: '1rem',
        },
      }),
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    yellow: {
      50: '#fff7da',
      100: '#ffe8ad',
      200: '#ffd97d',
      300: '#ffca4b',
      400: '#ffbb1a',
      500: '#e6a200',
      600: '#b37e00',
      700: '#815a00',
      800: '#4e3600',
      900: '#1e1100',
    },
    red: {
      50: '#ffe4e5',
      100: '#fdb8b8',
      200: '#f58b8e',
      300: '#ef5d67',
      400: '#e93042',
      500: '#cf162f',
      600: '#a20e1a',
      700: '#74080b',
      800: '#480502',
      900: '#1f0500',
    },
    green: {
      50: '#dffbfd',
      100: '#bcecf0',
      200: '#98e2e5',
      300: '#71dada',
      400: '#4dcfcc',
      500: '#35b6ad',
      600: '#258e84',
      700: '#166563',
      800: '#053c3e',
      900: '#001416',
    },
  },
};
