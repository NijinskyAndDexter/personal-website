import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LandingView from './Components/LandingView/LandingView';
import ProjectsView from './Components/ProjectsView/ProjectsView';
import AboutView from './Components/AboutView/AboutView';
import { BrowserRouter } from 'react-router-dom';
import ContactView from './Components/ContactView/ContactView';

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <LandingView/>
                    <AboutView/>
                    <ProjectsView/>
                    <ContactView/>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
};


const theme = createTheme({
    typography: {
      fontFamily: '"Serif Display"',
      button: {
        textTransform: 'none'
      }
    },
    palette: {
        primary: {
            main: '#510098', // purple
            dark: '#A21645',
        }, 
        secondary: {
            light: '#E0CA3C',
            main: '#1D1710',
        }
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontFamily: 'Lato Light'
                }
            },
        },
    }
  });
  


export default App;
