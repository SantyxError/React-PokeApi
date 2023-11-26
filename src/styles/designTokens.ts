interface Colors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

interface Typography {
  fontFamily: string;
  fontSize: {
    small: string;
    medium: string;
    large: string;
  };
}

interface SpacingTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}


const designTokens = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#f8f9fa',
    text: '#333',
  } as Colors,
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: {
      small: '14px',
      medium: '16px',
      large: '18px',
    },
  } as Typography,
  spacingTokens: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  } as SpacingTokens
}


export default designTokens;