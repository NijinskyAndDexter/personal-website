import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import EmailBuilderDemo from './Components/EmailBuilderDemo/EmailBuilderDemo';
import Home from './Components/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/email-builder-demo">
                            <>
                                <EmailBuilderDemo/>
                            </>
                        </Route>
                        <Route exact path="/">
                            <Home/>
                        </Route>                
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
};


const theme = createTheme({
    typography: {
      fontFamily: '"Fira Code"',
      button: {
        textTransform: 'none'
      }
    },
    palette: {
        primary: {
            main: '#380d0c', 
            dark: '#1D1710',
        }, 
        secondary: {
            light: '#C61125',
            main: '#950f1c',
        }
    },
    components: {
        MuiFab: {
            color: '#950f1c'
        }, 
        MuiSpeedDialAction: {
            FabProps: {
                color: '#950f1c',
            }
        }, 
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: '#C61125',
                    backgroundColor: '#380d0c',
                    fontSize: '1rem',
                }
            },
        },
    }
  });
  


export default App;
