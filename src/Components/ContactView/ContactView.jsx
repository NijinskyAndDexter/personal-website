import { TextField, Button } from "@mui/material";
import './ContactView.scss';
import '../../App.scss';

import { useState } from "react";

const classes = {
  textArea: {
    width: 'calc(100% - 8rem)', 
    fontSize: '1rem', 
    fontFamily: 'Lato Light', // NOT WORKING GOTTA FIX
    margin: '3rem'
  }, 
  filledGradientButton: {
    backgroundImage: 'linear-gradient(to bottom right, #2E0099, #FFC2E8)',
    borderRadius: '1.5rem',
    color: 'white',
    fontFamily: 'Serif Display',
    padding: '.5rem 2rem'
  } 
}

const ContactView = () => {

  const [message, setMessage] = useState('');


  return (
    <div className="Contact__container">
      <div>
        <h1 className="Contact__title">Contact Me</h1>
        <TextField
          aria-label="contact form field"
          multiline
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          minRows={15}
          placeholder="Send me an email. I'd love to hear from you..."
          sx={classes.textArea}
        />
        <div className="Contact__buttonContainer">
          <Button sx={classes.filledGradientButton}>send</Button>
        </div>
      </div>
    </div>
  )
};

export default ContactView;