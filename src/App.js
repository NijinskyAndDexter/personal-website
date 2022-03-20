import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import LandingView from './Components/LandingView/LandingView';
import AboutView from './Components/AboutView/AboutView';
import ProjectsView from './Components/ProjectsView/ProjectsView';



function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <LandingView/>
            </ThemeProvider>
            <AboutView/>
            <ProjectsView/>
        </>
    );
}


const theme = createTheme({
    typography: {
      fontFamily: '"myAvenir", "Avenir"',
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
