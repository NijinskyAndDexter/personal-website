import './LandingView.scss';
import roses from '../../staticAssets/roses.png';
import React from 'react';

const LandingView = () => {

  return (
    <div className="LandingView__container">
      <img src={roses} className="LandingView__img" alt="painting of roses"/>
      <h1 className="LandingView__title">Rebecca Kelley</h1>
      <h2 className="LandingView__subtitle">Full-Stack Software Engineer</h2>
    </div>
  );
};

export default LandingView;