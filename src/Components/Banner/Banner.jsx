import React, { useState, useEffect } from 'react';
import './Banner.css';
import franela from '../Assets/ropa.png';
import moment from 'moment';

const Banner = () => {
  const targetTime = moment().hour(12).minute(0).second(0); 

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  function calculateRemainingTime() {
    const now = moment();
    const diff = moment.duration(targetTime.diff(now));
    return {
      hours: diff.hours(),
      minutes: diff.minutes(),
      seconds: diff.seconds(),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>FLAT 50% OFF</h1>
          <p>
            <span style={{ color: 'rgba(255, 114, 53, 1)' }}>
              {remainingTime.hours}
            </span>{' '}
            Hours{' '}
            <span style={{ color: 'rgba(255, 114, 53, 1)' }}>
              {remainingTime.minutes}
            </span>{' '}
            Mins{' '}
            <span style={{ color: 'rgba(255, 114, 53, 1)' }}>
              {remainingTime.seconds}
            </span>{' '}
            Secs
          </p>
          <button className="banner-button">Explore now</button>
        </div>
      </div>
      <div className="banner-image">
        <img src={franela} alt="Banner image" />
      </div>
    </div>
  );
};

export default Banner;

