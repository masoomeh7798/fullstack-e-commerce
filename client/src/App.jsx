import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './Components/Header'
import Home from './Pages/Home'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Footer from './Components/Footer';

// start default theme 
export default function App() {
  const theme = createTheme({
    "breakpoints": {
      "keys": ["xs", "sm", "md", "lg", "xl"],
      "values": {
        "xs": 0,
        "xxs":300,
        "sm": 600,
        "md": 900,
        "lg": 1200,
        "xl": 1536
      }
    },
    "direction": "ltr",
    "components": {
      "MuiButton": {
        "defaultProps": {
          "disableElevation": true
        },
        "styleOverrides": {
          "root": {
            "borderRadius": 8
          }
        }
      },
      "MuiAppBar": {
        "styleOverrides": {
          "root": {
            "zIndex": 1201
          }
        }
      },
      "MuiTypography": {
        "styleOverrides": {
          "root": {
            "fontSize": "inherit",
            "lineHeight": "inherit"
          }
        }
      },
      "MuiInput": {
        "defaultProps": {
          "disableUnderline": true
        },
        "styleOverrides": {
          "root": {
            "borderRadius": 4
          }
        }
      }
    },
    "palette": {
      "mode": "light",
      "common": {
        "black": "#000",
        "white": "#fff"
      },
      "primary": {
        "main": "#2A363B",
        "light": "#42a5f5",
        "dark": "#1565c0",
        "contrastText": "#fff"
      },
      "secondary": {
        "main": "#CF4647",
        "light": "#ba68c8",
        "dark": "#7b1fa2",
        "contrastText": "#fff"
      },
      "error": {
        "main": "#d32f2f",
        "light": "#ef5350",
        "dark": "#c62828",
        "contrastText": "#fff"
      },
      "warning": {
        "main": "#F5D061",
        "light": "#ff9800",
        "dark": "#e65100",
        "contrastText": "#fff"
      },
      "info": {
        "main": "#F8F6F6",
        "light": "#03a9f4",
        "dark": "#01579b",
        "contrastText": "#fff"
      },
      "success": {
        "main": "#2e7d32",
        "light": "#4caf50",
        "dark": "#1b5e20",
        "contrastText": "#fff"
      },
      "grey": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121",
        "A100": "#f5f5f5",
        "A200": "#eeeeee",
        "A400": "#bdbdbd",
        "A700": "#616161"
      },
      "contrastThreshold": 3,
      "tonalOffset": 0.2
    },
    "spacing": 8,
    "shape": {
      "borderRadius": 4
    },
    "containerQueries": {},
    "applyStyles": {},
    "unstable_sxConfig": {},
    "unstable_sx": function() {},
    "mixins": {
      "toolbar": {
        "minHeight": 56
      }
    },
    "shadows": [
      "none",
      "0px 1px 2px 0px rgba(0,0,0,0.2)",
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
      "0px 4px 6px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
      "0px 5px 8px -1px rgba(0,0,0,0.2), 0px 7px 12px 0px rgba(0,0,0,0.14), 0px 1px 24px 0px rgba(0,0,0,0.12)",
      "0px 6px 10px -1px rgba(0,0,0,0.2), 0px 8px 15px 0px rgba(0,0,0,0.14), 0px 1px 28px 0px rgba(0,0,0,0.12)",
      "0px 7px 12px -1px rgba(0,0,0,0.2), 0px 9px 20px 0px rgba(0,0,0,0.14), 0px 1px 36px 0px rgba(0,0,0,0.12)",
      "0px 8px 14px -1px rgba(0,0,0,0.2), 0px 10px 25px 0px rgba(0,0,0,0.14), 0px 1px 40px 0px rgba(0,0,0,0.12)",
      "0px 9px 16px -1px rgba(0,0,0,0.2), 0px 11px 30px 0px rgba(0,0,0,0.14), 0px 1px 50px 0px rgba(0,0,0,0.12)",
      "0px 10px 18px -1px rgba(0,0,0,0.2), 0px 12px 35px 0px rgba(0,0,0,0.14), 0px 1px 60px 0px rgba(0,0,0,0.12)",
      "0px 11px 20px -1px rgba(0,0,0,0.2), 0px 13px 40px 0px rgba(0,0,0,0.14), 0px 1px 70px 0px rgba(0,0,0,0.12)",
      "0px 12px 22px -1px rgba(0,0,0,0.2), 0px 14px 45px 0px rgba(0,0,0,0.14), 0px 1px 80px 0px rgba(0,0,0,0.12)",
      "0px 13px 24px -1px rgba(0,0,0,0.2), 0px 15px 50px 0px rgba(0,0,0,0.14), 0px 1px 90px 0px rgba(0,0,0,0.12)",
      "0px 14px 26px -1px rgba(0,0,0,0.2), 0px 16px 55px 0px rgba(0,0,0,0.14), 0px 1px 100px 0px rgba(0,0,0,0.12)",
      "0px 15px 28px -1px rgba(0,0,0,0.2), 0px 17px 60px 0px rgba(0,0,0,0.14), 0px 1px 110px 0px rgba(0,0,0,0.12)",
      "0px 16px 30px -1px rgba(0,0,0,0.2), 0px 18px 65px 0px rgba(0,0,0,0.14), 0px 1px 120px 0px rgba(0,0,0,0.12)",
      "0px 17px 32px -1px rgba(0,0,0,0.2), 0px 19px 70px 0px rgba(0,0,0,0.14), 0px 1px 130px 0px rgba(0,0,0,0.12)",
      "0px 18px 34px -1px rgba(0,0,0,0.2), 0px 20px 75px 0px rgba(0,0,0,0.14), 0px 1px 140px 0px rgba(0,0,0,0.12)",
      "0px 19px 36px -1px rgba(0,0,0,0.2), 0px 21px 80px 0px rgba(0,0,0,0.14), 0px 1px 150px 0px rgba(0,0,0,0.12)",   "0px 20px 40px rgba(0,0,0,0.3)", // 20 - Add custom shadow
      "0px 24px 48px rgba(0,0,0,0.3)", // 21 - Add custom shadow
      "0px 28px 56px rgba(0,0,0,0.3)", // 22 - Add custom shadow
      "0px 32px 64px rgba(0,0,0,0.3)", // 23 - Add custom shadow
      "0px 36px 72px rgba(0,0,0,0.3)", // 24 - Add custom shadow for elevation 24
    ],
    "typography": {
      "fontFamily": "\"Baloo Bhaijaan 2\", sans-serif",
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500,
      "h1": {
        "fontSize": "6rem",
        "fontWeight": 300,
        "lineHeight": 1,
        "letterSpacing": "-0.01562em"
      },
      "h2": {
        "fontSize": "3.75rem",
        "fontWeight": 300,
        "lineHeight": 1,
        "letterSpacing": "-0.00833em"
      },
      "h3": {
        "fontSize": "3rem",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em"
      },
      "h4": {
        "fontSize": "2.125rem",
        "fontWeight": 400,
        "lineHeight": 1.2,
        "letterSpacing": "0.00735em"
      },
      "h5": {
        "fontSize": "1.5rem",
        "fontWeight": 400,
        "lineHeight": 1.334,
        "letterSpacing": "0em"
      },
      "h6": {
        "fontSize": "1.25rem",
        "fontWeight": 500,
        "lineHeight": 1.6,
        "letterSpacing": "0.0075em"
      },
      "subtitle1": {
        "fontSize": "1rem",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0.00938em"
      },
      "subtitle2": {
        "fontSize": "0.875rem",
        "fontWeight": 500,
        "lineHeight": 1.57,
        "letterSpacing": "0.00714em"
      },
      "body1": {
        "fontSize": "1rem",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0.00938em"
      },
      "body2": {
        "fontSize": "0.875rem",
        "fontWeight": 400,
        "lineHeight": 1.43,
        "letterSpacing": "0.01071em"
      },
      "button": {
        "textTransform": "uppercase",
        "fontSize": "0.875rem",
        "fontWeight": 500
      },
      "caption": {
        "fontSize": "0.75rem",
        "fontWeight": 400,
        "lineHeight": 1.66,
        "letterSpacing": "0.03333em"
      },
      "overline": {
        "fontSize": "0.75rem",
        "fontWeight": 400,
        "textTransform": "uppercase",
        "letterSpacing": "0.16667em"
      }
    },
    "transitions": {
      "easing": {
        "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
        "easeOut": "cubic-bezier(0.4, 0, 0.6, 1)",
        "easeIn": "cubic-bezier(0.4, 0, 0.2, 1)"
      },
      "duration": {
        "short": 150,
        "standard": 300,
        "complex": 375,
        "leavingScreen": 200,
        "enteringScreen": 200
      }
    },
    "zIndex": {
      "modal": 1300,
      "appBar": 1200,
      "drawer": 1100,
      "snackbar": 1000,
      "tooltip": 1500
    },
    "toRuntimeSource": function() {}
  }
);
// end default theme
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}  />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </ThemeProvider> 
  )
}


