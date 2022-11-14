import { createTheme, PaletteColorOptions } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    status?: {
      danger: string;
    };
  }

  interface TypographyVariantsOptions {
    heading1?: React.CSSProperties;
    body3?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    subtitle3?: React.CSSProperties;

  }

  interface Palette {
    greenish?: PaletteColor,
    greyColor?: PaletteColor,
    textColor?: PaletteColor
  }

  interface PaletteOptions {
    greenish?: PaletteColorOptions,
    greyColor?: PaletteColorOptions,
    textColor?: PaletteColorOptions
  }

  interface PaletteColor {
    primary1?: string;
    primary2?: string;
    primary3?: string;
    primary4?: string;

    secondary1?: string;
    secondary2?: string;

    grey1?: string;
    grey2?: string;
    grey3?: string;
    grey4?: string;

    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;

  }
  interface SimplePaletteColorOptions {
    primary1?: string;
    primary2?: string;
    primary3?: string;
    primary4?: string;

    secondary1?: string;
    secondary2?: string;

    grey1?: string;
    grey2?: string;
    grey3?: string;
    grey4?: string;

    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
  }
  interface ThemeOptions {
    status?: {
      danger: React.CSSProperties['color']
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading1: true;
    body3: true;
    caption1: true;
    caption2: true;
    subtitle3: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    greenish: true;
  }
}


export const blinkTheme = createTheme({
  status: {
    danger: 'red'
  },
  palette: {
    primary: {
      main: "#2CE080",
      primary1: "#E2F2E9",
      primary2: "#2CE080",
      primary3: "#22C870",
      primary4: "#20BA68"
    },
    secondary: {
      main: "#0365F2",
      secondary1: "#C6DAF6",
      secondary2: "#0365F2"
    },
    greyColor: {
      main: '#BAC9CF',
      grey1: "#BAC9CF",
      grey2: "#6C787F",
      grey3: "#3A4649",
      grey4: "#042330"
    },
    textColor: {
      main: "#042330",
      text1: "#042330",
      text2: "#03314B",
      text3: "#6D787E",
      text4: "#747575"
    },
    greenish: {
      main: '#2CE080',
      contrastText: '#fff',
    },

  },
  typography: {
    fontFamily: "CeraPro",
    heading1: {
      fontSize: 36,
      fontWeight: 'bold'
    },
    body1: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    body2: {
      fontSize: 16,
    },
    body3: {
      fontSize: 22,
    },
    caption1: {
      fontSize: 14,
    }, 
    caption2: {
      fontSize: 14,
      fontWeight: 'bold'
    }, 
    subtitle1: {
      fontSize: 24
    },
    subtitle2: {
      fontSize: 18
    },
    subtitle3: {
      fontSize: 18,
    },
  },
  components: {
    MuiButton: {
      styleOverrides:{
        root: {
          textTransform: 'inherit'
        }
      }
    }
  }
});
