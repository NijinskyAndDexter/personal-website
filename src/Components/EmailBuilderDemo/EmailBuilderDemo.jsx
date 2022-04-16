import ReactPlayer from 'react-player';
import SwipeableViews from 'react-swipeable-views';
import { Paper, Typography, MobileStepper, Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import React, { useState } from 'react';

// change to a grid where it takes over the whole space or whatever
// create consistent theming throughout! 

// maybe create an in app py compiler when you get back home!!
// do it for the background remover and use for pycon page!
const classes = {
  sliderContainer: {
    height: '100vh',
    width: '80vw',
    backgroundColor: '#0D1B1C'
  },
  typography: {
    textAlign: 'center',
    fontFamily: 'Fira Code', 
    padding: '2rem',
    // color: '#0D1B1C'
    color: '#6FB7BC'
  },
  paper: {
    boxShadow: '0 0 0 0 #0D1B1C',
    backgroundColor: '#0D1B1C',
    borderRadius: '0 0 0 0'
    // color: 'white',
  },
  swipeableViews: {
    height: '66vh',
    width: 'auto'
    // display: 'flex',
    // alignItems: 'center', => centered w/ console open
  },
  mobileStepper: {
    backgroundColor: '#0D1B1C',
  },
  sideNav: {
    backgroundColor: '#0D1B1C',
    width: '20vw',
    height: '100vh'
  },
  container: {
    width: '100vw',
    height: '100vh',
  },
  button: {
    color: '#D81E5B',
    border: '1px solid #D81E5B',
    '&:hover': {
      color: 'secondary.light'
    },
    '&:disabled': {
      // help this is wrong
      color: '#D81E5B',

    }
  }
}


const EmailBuilderDemo = () => {
  const PATH_TO_DEMO_1 = 'videos/ImageBuilder.mp4';

  const [activeStep, setActiveStep] = useState(0); 

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const swipeableViewsEntries = [
    {
      // todo make jpg
      component: <img style={classes.swipeableViews} alt="assortment of watercolor trees with birthday invitation text" src="images/bdayInvite.png"/>,
      desc: 'Using a drag and drop editor, users can create unique emails, for invitations, special events, or just meaningful messages.'
    },
    {
      component: <img style={classes.swipeableViews} alt="drawings of women with an invite to a friend-anniversary dinner" src="images/friendiversary.jpg"/>,
      desc: 'Features visual themes with playful content for many audiences.'
    },
    {
      component: <ReactPlayer style={classes.swipeableViews} url={PATH_TO_DEMO_1} controls = {true}/>,
      desc: 'Resizing, rearranging, custom z-index, horizontal flip, vertical flip, and deletion are all supported for both text and image components.'
    },

  ]
  return (
    <div style={{display: 'flex'}}>
      <div style={classes.sideNav}></div>
      <div style={classes.sliderContainer}>
        <Paper sx={classes.paper}>
          <Typography sx={classes.typography}>{swipeableViewsEntries[activeStep].desc}</Typography>
        </Paper>
        <SwipeableViews
          axis="x"
          style={classes.swipeableViews}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {swipeableViewsEntries.map((entry) => entry.component)}
        </SwipeableViews>
        <MobileStepper
          sx={classes.mobileStepper}
          steps={swipeableViewsEntries.length}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              variant="outlined"
              sx={classes.button}
              disabled={activeStep === swipeableViewsEntries.length - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button 
              size="small" 
              sx={classes.button}
              onClick={handleBack} 
              variant="outlined"
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default EmailBuilderDemo;