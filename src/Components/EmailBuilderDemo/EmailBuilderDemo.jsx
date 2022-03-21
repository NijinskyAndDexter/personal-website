import ReactPlayer from 'react-player';
import SwipeableViews from 'react-swipeable-views';
import { Paper, Typography, MobileStepper, Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import React, { useState } from 'react';


const classes = {
  typography: {
    textAlign: 'center',
    fontFamily: 'Fira Code', 
    padding: '2rem',
    color: '#0D1B1C'
  }
}


const EmailBuilderDemo = () => {
  const PATH_TO_DEMO_1 = 'videos/ImageBuilder.mp4';
  const PATH_TO_DEMO_2 = 'videos/ImageBuilder2.mp4';

  const [activeStep, setActiveStep] = useState(0); 

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const swipeableViewsEntries = [
    {
      component: <img width="100%" height="auto" alt="assortment of watercolor trees with birthday invitation text" src="images/sampleScreenshot.png"/>,
      desc: 'Using a drag and drop editor, users can create unique emails, for invitations, special events, or just meaningful messages'
    },
    {
      component: <ReactPlayer
        className='react-player fixed-bottom'
        url={PATH_TO_DEMO_1}
        width='100%'
        height='100%'
        controls = {true}
      />,
      desc: 'blah blah gotta come up with something to say'
    },

  ]
  return (
    <div>

      <Paper>
        <Typography sx={classes.typography}>{swipeableViewsEntries[0].desc}</Typography>
      </Paper>
      <SwipeableViews>
        {swipeableViewsEntries.map((entry) => entry.component)}
      </SwipeableViews>
      <MobileStepper
        steps={swipeableViewsEntries.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === swipeableViewsEntries.length - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button 
            size="small" 
            onClick={handleBack} 
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
};

export default EmailBuilderDemo;