import React, { useState, useEffect } from 'react';
import './Agreement.css';

const AgreementContainer: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<number>(120); // 2 minutes in seconds
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [timerDone, setTimerDone] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimerDone(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleAgree = () => {
    if (timerDone && !isAgreed) {
      setIsAgreed(true);
      setShowWarning(false);
    } else if (!timerDone) {
      setShowWarning(true);
    }
  };

  return (
    <div className="agree-container">
      <h2>Community Agreement</h2>
      
      {!timerDone && (
        <p className="timer">
          Timer: <span>{formatTime(timeRemaining)}</span> remaining
        </p>
      )}

      <div 
        className={`agree-box ${!timerDone ? 'disabled' : ''} ${isAgreed ? 'active' : ''}`}
        onClick={handleAgree}
        role="checkbox"
        aria-checked={isAgreed}
      >
        <span className="checkmark">✓</span>
      </div>

      <p className="status">
        {isAgreed 
          ? "You have agreed to the community rules"
          : timerDone 
            ? "You may now agree to the rules"
            : "Please wait for timer to finish"
        }
      </p>

      <button 
        disabled={!isAgreed}
        className={isAgreed ? 'enabled' : ''}
      >
        <a href="/register.html">Register</a>
      </button>

      {showWarning && (
        <p className="warning">
          ⏳ कृपया सभी नियमों को ध्यानपूर्वक पढ़ने के बाद ही पंजीकरण करें।
        </p>
      )}
    </div>
  );
};

export default AgreementContainer;