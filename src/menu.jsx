import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './menu.css'
import logo from './assets/logo matusa study.jpg'
import aulas from './assets/aula.png'
import grup from './assets/estudantes.png'
import rakin from './assets/rancking.png'
import pomo from './assets/pomodoro.png'
import mat from './assets/materiais.png'

function menu() {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        localStorage.removeItem('authenticatedUser');
        navigate('/login');
      };
      
    return(
        <div>

            <div class="barra">
                <img src={logo} alt="" />
                <h1>HOME</h1>
                <h1 onClick={handleLogout} class='logout'>LOGOUT</h1>
            </div>

            <div class="options">

                <div class="aula">
                    <h1>Aulas</h1>
                    <Link to="/materiais">
                        <img src={aulas} alt="" />
                    </Link>
                </div>

                <div class="grupo">
                    <h1>Grupos</h1>
                    <Link to="/grupo">
                        <img src={grup} alt="" />
                    </Link>
                </div>

                <div class="top">
                    <h1>Ranking</h1>
                    <Link to="/racking">
                        <img src={rakin} alt="" />
                    </Link>
                </div>
                

            </div>

        </div>
    )
}
export default menu

