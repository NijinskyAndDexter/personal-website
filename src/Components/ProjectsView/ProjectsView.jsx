import './ProjectsView.scss';
import { Tabs, Tab, Divider, Box } from '@mui/material';
import React, { useState } from 'react';


const ProjectsView = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
      setTabValue(newValue);
  };


  return (
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
  );
};

export default ProjectsView;