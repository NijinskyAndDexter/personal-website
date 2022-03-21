import './LandingView.scss';
import roses from '../../staticAssets/roses.png';

import CottageIcon from '@mui/icons-material/Cottage';
import CodeIcon from '@mui/icons-material/Code';
import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InfoIcon from '@mui/icons-material/Info';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const LandingView = () => {
  const options = [
    {name: 'contact', icon: <MailOutlineIcon sx={{color: 'secondary.light'}}/>}, 
    {name: 'projects', icon: <CodeIcon sx={{color: 'secondary.light'}}/>}, 
    {name: 'about', icon: <InfoIcon sx={{color: 'secondary.light'}}/>}, 
    {name: 'home', icon: <CottageIcon sx={{color: 'secondary.light'}}/>}
  ];
  return (
    <div className="LandingView__container">
      <img src={roses} className="LandingView__img" alt="painting of roses"/>
      <h1 className="LandingView__title">Rebecca Kelley</h1>
      <h2 className="LandingView__subtitle">Full-Stack Software Engineer</h2>
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
  );
};

export default LandingView;