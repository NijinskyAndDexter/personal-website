import './App.scss';
import './About.scss';
import './Projects.scss';
import roses from './photos/roses.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SpeedDial, SpeedDialAction, Card, Tabs, Tab, Divider, Box } from '@mui/material';
import CottageIcon from '@mui/icons-material/Cottage';
import CodeIcon from '@mui/icons-material/Code';
import React, { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import InfoIcon from '@mui/icons-material/Info';


const skills = [
    {name: 'Python', level: 5},
    {name: 'Lambda', level: 5},
    {name: 'Cloudformation', level: 5},
    {name: 'S3', level: 5},
    {name: 'SNS', level: 3},
    {name: 'Java', level: 2},
    {name: 'Docker', level: 2},
    {name: 'CI / CD', level: 4},
    {name: 'Javascript', level: 3},
    {name: 'Typescript', level: 4},
    {name: 'React', level: 4},
    {name: 'NPM / NPX / NVM', level: 3},
    {name: 'PyTest', level: 5},
    {name: 'Jest', level: 4},
    {name: 'Enzyme', level: 3},
    {name: 'PostgreSQL', level: 3},
    {name: 'Step Functions', level: 4},
    {name: 'Communication', level: 5},
    {name: 'Mentorship', level: 4},
    {name: 'Collaboration', level: 5},
    {name: 'Business Acumen', level: 5}
];




const getSkillLevel = (level) => {
    let skillLevels = [];
    for(let i=0; i<level; i++) {
        skillLevels.push(<div className="About__skillLevelItem"></div>);
    }
    return skillLevels;
}


function App() {
    const [tabValue, setTabValue] = useState(0);

    const options = [
        {name: 'contact', icon: <MailOutlineIcon sx={{color: 'secondary.light'}}/>}, 
        {name: 'projects', icon: <CodeIcon sx={{color: 'secondary.light'}}/>}, 
        {name: 'about', icon: <InfoIcon sx={{color: 'secondary.light'}}/>}, 
        {name: 'home', icon: <CottageIcon sx={{color: 'secondary.light'}}/>}
    ];

    const handleChange = (event, newValue) => {
        setTabValue(newValue);

    };

    return (
        <>
        <ThemeProvider theme={theme}>
            <div className="App__container">
                <img src={roses} className="App__img" alt="painting of roses"/>
                <h1 className="App__title">Rebecca Kelley</h1>
                <h2 className="App__subtitle">Full-Stack Software Engineer</h2>
                <SpeedDial
                    ariaLabel="speeddial navigation"
                    FabProps={{size: 'large'}}
                    sx={{ position: 'absolute', bottom: 16, right: 16}}
                    icon={<ArrowDownwardIcon sx={{color: 'secondary.light'}}/>}
                >
                    {options.map((option) => (
                        <SpeedDialAction
                            FabProps={{
                                size: 'large',
                                sx: { 
                                backgroundColor: 'primary.main',
                                '&:hover': {
                                    backgroundColor: 'primary.dark',
                                },
                              }
                            }}
                            key={option.name}
                            icon={option.icon}
                            tooltipTitle={option.name}
                        />
                    ))}
                </SpeedDial>
            </div>
        </ThemeProvider>
        <div className="About__container">
            <div className="About__professional">
                    <h1 className="About__title">About</h1>
                    <p className="About__blurb"> 
                        I am a full-time software engineer currently working remotely out of Richmond, Virginia. My work focuses around 
                        building maintainable micro-services using AWS serverless technologies such as Lambda, SNS, S3, Step Functions, and more. 
                        <br/>
                        <br/>
                        My top professional passions include clean suites of integration tests, intelligently maintained application loggers, and 
                        the destruction of nested ternaries.
                        <br/>
                        <br/>
                        I live with two adorable cats (who mostly despise each other) and my many overflowing hobbies. Before work, I've recently been
                        enjoying painting in my work planner to give it some color. (Although, I am human, and sometimes I prefer to sleep in a little). 
                        After work, I love to eat soup, re-watch Rick and Morty, and drink the occasional Budweiser. Most of my personal projects are 
                        an intersection between my handmade hobbies and my love of automation.
                        <br/>
                        <br/>
                    </p>
                </div>
                <div className="About__skills">
                    <p className="About__skillsTitle">Software Skills</p>
                    <div className="About__skillsGrid">
                        {
                            skills.map(skill => {return (
                                <React.Fragment key={skill.name}>
                                    <p className="About__skillName">{skill.name}</p>
                                    <div className="About__skillLevel">
                                        {getSkillLevel(skill.level)}
                                    </div>
                                </React.Fragment>
                            )})
                        }
                    </div>
                </div>
            </div>
            <div className="Projects__container">
                <Box>
                    <Tabs value={tabValue} onChange={handleChange}>
                        {[
                            {name: 'background remover', id: 0}, 
                            {name: 'image builder', id: 1}, 
                            {name: 'handmade emails', id: 2}
                        ].map((item) => <Tab sx={{
                            textTransform: 'none', 
                            fontFamily: 'libreBarcode', 
                            fontSize: '3rem', 
                            color: `${tabValue === item.id ? '#D81E5B' : '#E0CA3C'}`
                        }} label={item.name} key={item.id}/>)}
                    </Tabs>
                </Box>
                <div style={{padding: '2rem'}}>
                    <h1 className="Projects__title">Projects</h1>
                    <div style={{display: 'flex'}}>
                        <div className="Projects__blurb">
                            This suite of projects is building towards a service that allows users to send handmade, personalized cards via email. 
                            When complete, users will be able to select and place images from a digitized collection of my drawings in an easy to use 
                            browser interface. From there, they will be able to type in a personalized message to the recipient of their choice. 
                            <br/>
                            <br/>

                            Click on any of the project's subcomponents listed to the right to learn about the technologies used (or planned). You can either view a demo
                            or to try the technology out yourself. 
                            <br/>
                            <br/>

                            I always welcome feedback! Feel free to contact me to let me know your thoughts. 
                        </div>
                        <Divider sx={{margin: '3rem 0 0 1rem', border: '1px solid #E0CA3C', }} orientation="vertical" flexItem/>
                        <Divider sx={{margin: '3rem 0 0 1rem', border: '1px solid #E0CA3C', }} orientation="vertical" flexItem/>
                        
                    </div>
                </div>
            </div>
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
