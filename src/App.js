import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import EmailBuilderDemo from './Components/EmailBuilderDemo/EmailBuilderDemo';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LandingView from './Components/LandingView/LandingView';
import ProjectsView from './Components/ProjectsView/ProjectsView';
import AboutView from './Components/AboutView/AboutView';
import SpeedDialWrapper from './Components/SpeedDialWrapper/SpeedDialWrapper';


const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/email-builder-demo">
                            <EmailBuilderDemo/>
                        </Route>
                        <Route exact path="/">
                            <SpeedDialWrapper WrappedComponent={LandingView}/>
                        </Route>  
                        {/*TODO no match   */}
                        <Route exact path="/home">
                            <SpeedDialWrapper WrappedComponent={LandingView}/>
                        </Route>    
                        <Route exact path="/about">
                            <SpeedDialWrapper WrappedComponent={AboutView}/>
                        </Route> 
                        <Route exact path="/projects">
                            <SpeedDialWrapper WrappedComponent={ProjectsView}/>
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
            main: '#D81e5b', // pink
            dark: '#A21645',
        }, 
        secondary: {
            light: '#E0CA3C',
            main: '#1D1710',
        }
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: '#1D1710',
                    backgroundColor: '#D81e5b',
                    fontSize: '1rem',
                }
            },
        },
    }
  });
  


export default App;
