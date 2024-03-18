interface DefaultTheme {
  color: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    maroon: string;
    whiteTooth: string;
  };

  gradient: {
    background: string;
  };

  spacing: {
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };

  borderRadius: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  }
}

export const theme: DefaultTheme = {
  color: {
    primary: "#f58949",
    secondary: "#a34b37",
    white: '#ffffff',
    black: '#000000',
    maroon: '#9d4d38',
    whiteTooth: '#fee6cc'
  },
  gradient: {
    background:
      "linear-gradient(180deg, rgba(253,250,243,1) 0%, rgba(243,226,208,1) 50%, rgba(162,132,124,1) 100%)",
  },
  spacing: {
    xxs: '0.0rem',
    xs: '0.25rem',
    s: '0.5rem',
    m: '1rem',
    l: '1.5rem',
    xl: '2rem'
  },
  borderRadius: {
    xs: '4px',
    s: '8px',
    m: '12px',
    l: '16px',
    xl: '24px'
  }
};
