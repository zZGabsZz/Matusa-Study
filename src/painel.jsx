import { useState } from 'react'
import './painel.css'
import fundo from './assets/painel.png'
import { Link } from 'react-router-dom';

function painel() {
    return(
        <div>
        <img src={fundo}  class="imgfund" alt="" />
        <h1 class="slogan">Conecte-se ao conhecimento, conquiste seus sonhos!</h1>
        <h1 class="cadastro">CADASTRO</h1>
        <Link to="/register">
            <button className="cad">CADASTRO</button>
        </Link>
        <Link to="/login">
            <button className="ent">ENTRAR</button>
        </Link>
        </div>
    );
}
export default painel