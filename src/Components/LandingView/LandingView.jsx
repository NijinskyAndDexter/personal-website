import './LandingView.scss';
import React from 'react';

const LandingView = () => {

  return (
    <div className="LandingView__container">
      <div className="LandingView__colorBox">
        <div className="LandingView__whiteBox">
          <div>
            <h1 className="LandingView__title">Rebecca Kelley</h1>
            <h2 className="LandingView__subtitle">Full-Stack Software Engineer</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingView;