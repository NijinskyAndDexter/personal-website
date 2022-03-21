import './ProjectsView.scss';
import { Divider } from '@mui/material';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const ProjectsView = () => {

  const classes = {
      accordion: {
        backgroundColor: 'transparent',
        borderBottom: '1px solid #E0CA3C',
        // boxShadow: '0px 0px 0px 0px !important'
      },
      accordionDetails: {
        fontFamily: 'Fira Code',
        color: '#6FB7BC'
      },
      accordionSummary: {
        fontFamily: 'libreBarcode',
        fontSize: '3rem',
        color: '#D81E5B'
      },
      icon: {
          color: '#E0CA3C'
      }
  }


  return (
    <div className="Projects__container">
      {/* <Box>

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
      </Box> */}
      <div style={{padding: '2rem'}}>
          <h1 className="Projects__title">Projects</h1>
          <div style={{display: 'flex'}}>
                <Divider sx={{margin: '3rem 1rem 0 0', border: '1px solid #E0CA3C', }} orientation="vertical" flexItem/>
                <Divider sx={{margin: '3rem 1rem 0 0', border: '1px solid #E0CA3C', }} orientation="vertical" flexItem/>
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
        </div>
        <div className="Projects__accordionContainer">
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    sx={classes.accordionSummary}
                    expandIcon={<ExpandMoreIcon sx={classes.icon}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={classes.accordionSummary}>Background Remover</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>
                        Allows users to upload an image, which can then be processed to remove the background in the image. Users can select the target pixel color to remove, and the range of pixels
                        in the near color spectrum to remove in addition. The service allows users to download the image once complete. A fully serverless application, this makes use of cloudfront & 
                        s3 for the static front end, as well as a python lambda for image processing. 
                        <a>Try it out</a>
                        <a>Source Code</a>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={classes.icon}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography sx={classes.accordionSummary}>Email Builder</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>
                        Leveraging the fabric.js npm package, this project allows users to build up a collage of watercolor paintings, and 
                        drawings in a single "canvas" HTML element. From there, users can add personalized headers or messages. The 
                        intention is to extend this functionality so that the canvas element can be embedded in an email so users can send 'handmade letters'
                        with the ease and task tracking of their email clients.
                        <br/>
                        <br/>
                        <Link to="/email-builder-demo" target="_blank">See a demo</Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={classes.icon}/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography sx={classes.accordionSummary}>Email Sender</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={classes.accordionDetails}>TODO write me blah blah blah</Typography>

                </AccordionDetails>
            </Accordion>

        </div>
    </div>
  );
};

export default ProjectsView;