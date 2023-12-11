interface DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
  };

  gradients: {
    background: string;
  };
}

export const theme: DefaultTheme = {
  colors: {
    primary: "#f58949",
    secondary: "#a34b37",
  },
  gradients: {
    background:
      "linear-gradient(180deg, rgba(253,250,243,1) 0%, rgba(243,226,208,1) 50%, rgba(162,132,124,1) 100%)",
  },
};
