import './ProjectsView.scss';
import '../../App.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import { Button, Modal, Card, Box, CardContent, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const classes = {
    filledGradientButton: {
        backgroundImage: 'linear-gradient(to bottom right, #2E0099, #FFC2E8)',
        borderRadius: '1.5rem',
        color: 'white',
        fontFamily: 'Serif Display'
    }, 
    accordion: {
        border: '0px solid white',
        boxShadow: '0px 0px 0px 0px',
    },
    accordionDetails: {
        fontFamily: 'Lato Light',
        color: '#100018'
    },
    cardActionArea: {
        justifyContent: 'center',
        height: '3rem',
        width: '6rem',
        textAlign: 'center',
        margin: '0 2rem'
    }, 
    modalContainer: {
        margin: '2rem', 
        maxHeight: 'calc(100% - 4rem)', 
        overflow: 'scroll'
    }, 
    modalLayout: {
        display: 'grid', 
        gridTemplateRows: '1fr 65vh 1fr', 
        height: 'calc(100% - 4rem)', 
        overflow: 'scroll'
        
    },
    modalSliderLayout: {
        display: 'grid', 
        gridTemplateColumns: '1fr 12fr 1fr', 
        padding: '2rem 0 0 0', 
        placeItems: 'center'
    }, 
    modalFooter: {
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem 2rem 0 2rem'
    }
}

// todo don't need all the card content components basically repeated to create sep dom elements, just use a div or whatever
// todo modal needs its own component, this is silly
// todo preload react images -- taking forever to load from s3 :(

const ProjectsView = () => {

    const projects = [{
        name: 'Background Remover', 
        blurb: 'Allows users to upload an image, which can then be processed to remove the background in the image. Users can select the target pixel color to remove, and the range of pixels ' + 
        'in the near color spectrum to remove in addition. The service allows users to download the image once complete. A fully serverless application, this makes use of cloudfront & ' +  
        's3 for the static front end, as well as a python lambda for image processing. ',
        demoLink: <a href="#TODO">Try it out</a>,
        sourceCode: <a href="#TODO">Source Code</a>
    }, {
        name: 'Email Builder',
        blurb: 'Leveraging the fabric.js npm package, this project allows users to build up a collage of watercolor paintings, and ' +
        'drawings in a single "canvas" HTML element. From there, users can add personalized headers or messages. The ' +
        'intention is to extend this functionality so that the canvas element can be embedded in an email so users can send "handmade letters"' +
        'with the ease and task tracking of their email clients.', 
        demoMedia: [{
            component: 
                <ReactPlayer 
                    controls 
                    width="auto"
                    height="65vh"
                    url="videos/NoTabsImageBuilder.mov"
                />
            ,
            blurb: 'Users can select images from a library of pictures and themes. Once selected, images can be dragged, dropped, resized, flipped horizontally, flipped vertically, duplicated, or deleted using an intuitive interface.'
        }, {
            component: <img src="images/bdayInvite.png" alt="birthday invitation with trees" className="Projects__demoImageCarousel"/>,
            blurb: 'Without any technical or artistic expertise, users can create e-cards that feel much more personal than the canned options that exist on other websites.'
        }, {
            component: <img src="images/friendiversary.jpg" alt="invitation to dinner with illustrations" className="Projects__demoImageCarousel"/>,// todo no jpg!!!
            blurb: 'The project supports a variety of visual styles to suit many users\' tastes.'
        }]
    }, {
        name: 'Email Sender',
        blurb: 'TODO blah blah write me'
    }, {
        name: 'PyCon 2022, Salt Lake', 
        blurb: 'This is an exception to the suite of projects. My company sent me to PyCon! It was a fantastic time, and I turned what I learned ' +
        'about the experience into a website. '
    }];



    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [selectedDemo, setSelectedDemo] = useState(null);
    const [demoIndex, setDemoIndex] = useState(0)

    const handleChooseExpanded = (project) => {
        if (selectedProject && selectedProject.name === project.name) {
            setSelectedProject(null);
        } else {
            setSelectedProject(project)
        }
    }

  return (
    <div className="Projects__container">
      <div >
          <h1 className="Projects__title">Projects</h1>
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
        </div>
        <div>
            {projects.map(project => (
                <Accordion 
                    sx={classes.accordion}
                    onClick={() => handleChooseExpanded(project)}
                    expanded={selectedProject && selectedProject.name === project.name}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={classes.icon}/>}
                    >
                        <div className="Projects__accordionSummary">{project.name}</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={classes.accordionDetails}>{/*  This is causing  the descendent of P issue*/}
                            {project.blurb}
                        
                        </Typography>
                        <br/>
                        <br/>
                        <div className="Projects__expandedAccordionButtons">
                            {project.sourceCode && 
                                <div className="Projects__sourceCodeLink">    
                                    <div className="Projects__sourceCodeLinkInner">{project.sourceCode}</div>
                                </div>
                            }
                            <Button 
                                className="Projects__demoLink"
                                onClick={() => setSelectedDemo(project)}
                                sx={{...classes.filledGradientButton, padding: '.5rem 2rem',}}
                            >
                                see a demo
                            </Button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>

        {selectedDemo && 
            <Modal
                open={selectedDemo !== null}
                onClose={() => {setSelectedDemo(null); setDemoIndex(0)}}
                aria-labelledby="modal-title" 
                aria-describedby="modal-description"
                fullWidth
            >
                <Card fullWidth sx={classes.modalContainer}>
                    <CardContent sx={classes.modalLayout}>
                        <Box
                            sx={{padding: 0, margin: 0, }}
                        >
                            <Typography
                                id="modal-title"
                                sx={{
                                    fontFamily: 'Serif Display', 
                                    padding: '1rem 3rem',
                                }}
                                variant="h4"
                            >
                                {selectedDemo.name}
                            </Typography>
                        </Box>
                        <Box sx={classes.modalSliderLayout}>
                            <IconButton
                                onClick={() => setDemoIndex(demoIndex - 1)} 
                                disabled={demoIndex === 0}
                            >
                                <ArrowBackIosNewIcon/>
                            </IconButton>
                            {selectedDemo.demoMedia[demoIndex].component}

                            <IconButton
                                disabled={demoIndex === selectedDemo.demoMedia.length - 1}
                                onClick={() => setDemoIndex(demoIndex + 1)}
                            >
                                <ArrowForwardIosIcon/>
                            </IconButton>
                        </Box>
                        <Box sx={classes.modalFooter} >
                            <div
                                id="modal-description" 
                                className="Projects__demoModalBlurb"
                            >
                                <p>{selectedDemo.demoMedia[demoIndex].blurb}</p>
                            </div>
                        </Box>
                    </CardContent>
                </Card>
            </Modal>
        }
    </div>
  );
};

export default ProjectsView;