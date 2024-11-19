import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import logo from './assets/logo matusa study.jpg'
import './materiais.css'

function materiais() {
    return (
        <div>
          <div className="barra">
            <img src={logo} alt="Logo" />
            <Link to="/menu">
                <h1>HOME</h1>
            </Link>
          </div>

          <div style={{ margin: '20px auto', maxWidth: '720px' }} class="you">
            <ReactPlayer
              url="https://youtu.be/P8Cw3tafL3s" 
              controls
              width="100%"
              height="400px"
            />
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1 class="pd">Materiais para Download</h1>
            <h2 class="mat">Matemática básica</h2>
            <a href='https://educapes.capes.gov.br/bitstream/capes/204242/2/MATEMATICA%20BÁSICA.pdf' target="_blank" rel="noopener noreferrer" class="dow">
              Baixar PDF
            </a>

            <Link to="/exercicios">
                <button class="exe">Exercicios</button>
            </Link>
            <Link to="/timer">
              <button class="pom">Pomodoro</button>
            </Link>
          </div>
        </div>
    )
}

export default materiais