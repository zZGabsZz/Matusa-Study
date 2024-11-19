import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import logo from './assets/logo matusa study.jpg';
import './Timer.css';

function timer() {
  const [time, setTime] = useState(25 * 60); 
  const [isActive, setIsActive] = useState(false); 
  const [isWorkMode, setIsWorkMode] = useState(true); 
  const [showConfig, setShowConfig] = useState(false); 

  const [workTime, setWorkTime] = useState(25 * 60); 
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60); 
  const [longBreakTime, setLongBreakTime] = useState(15 * 60); 

  const totalTime = isWorkMode ? workTime : shortBreakTime; 
  const percentage = (time / totalTime) * 100; 

  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsWorkMode(!isWorkMode);
      setTime(isWorkMode ? shortBreakTime : workTime); 
    }
    return () => clearInterval(interval);
  }, [isActive, time, isWorkMode, workTime, shortBreakTime]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setIsWorkMode(true);
    setTime(workTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const saveSettings = () => {
    setTime(workTime);
    setShowConfig(false); 
  };

  return (
    <div>
    <div className="barra">
      <img src={logo} alt="" />
      <Link to="/menu">
        <h1>HOME</h1>
      </Link>
    </div>
    <div className="pomodoro-container">
      <h1 className="title">Pomodoro</h1>

      {showConfig ? (
        <div className="settings">
          <h2 className='tconfigure'>Configurações</h2>
          <label>
            Trabalho (min):
            <input
              type="number"
              min="1"
              value={workTime / 60}
              onChange={(e) => setWorkTime(Number(e.target.value) * 60)}
            />
          </label>
          <label>
            Pausa Curta (min):
            <input
              type="number"
              min="1"
              value={shortBreakTime / 60}
              onChange={(e) => setShortBreakTime(Number(e.target.value) * 60)}
            />
          </label>
          <label>
            Pausa Longa (min):
            <input
              type="number"
              min="1"
              value={longBreakTime / 60}
              onChange={(e) => setLongBreakTime(Number(e.target.value) * 60)}
            />
          </label>
          <button className="save-btn" onClick={saveSettings}>
            Salvar
          </button>
        </div>
      ) : (
        <div className="timer-circle">
          <CircularProgressbar
            value={percentage}
            text={formatTime(time)}
            styles={buildStyles({
              textColor: '#fff',
              pathColor: isWorkMode ? '#f54e4e' : '#4caf50',
              trailColor: '#d6d6d6',
              textSize: '16px',
            })}
          />
          <p>{isWorkMode ? 'Modo Trabalho' : 'Modo Pausa'}</p>
        </div>
      )}

      <div className="controls">
        <button onClick={toggleTimer}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={() => setShowConfig(!showConfig)}>
          {showConfig ? 'Voltar' : 'Configurações'}
        </button>
      </div>
    </div>
  </div>
  );
}

export default timer;
