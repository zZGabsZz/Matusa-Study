import './rancking.css';
import logo from './assets/logo matusa study.jpg';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import x from './assets/usuario_x.jpg';
import y from './assets/usuario_y.jpg';
import z from './assets/usuario_z.jpg';
import line from './assets/linha.png';
import card from './assets/gift.png';
import phone from './assets/fone.png';
import cel from './assets/celular.png';

function rancking() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const predefinedUsers = [
            { username: 'Sá', pontos: 5670, avatar: y },
            { username: 'Bahiano', pontos: 5230, avatar: x },
            { username: 'Soares', pontos: 5034, avatar: z },
        ];
    
        const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
        const formattedRegisteredUsers = registeredUsers.map((user) => ({
            username: user.username,
            pontos: user.pontos || 0,
            avatar: user.avatar || null,
        }));
    
        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')) || { username: 'Convidado', pontos: 0 };
    
        const allUsers = [...predefinedUsers, ...formattedRegisteredUsers];
        const isUsuarioLogadoIncluded = allUsers.some(user => user.username === usuarioLogado.username);
    
        if (!isUsuarioLogadoIncluded) {
            allUsers.push(usuarioLogado);
        }

        const rankingOrdenado = allUsers.sort((a, b) => b.pontos - a.pontos);
    
        setUsuarios(rankingOrdenado);
    }, []);
    
    return (
      <div>
        <div className="barra">
          <img src={logo} alt="" />
          <Link to="/menu">
            <h1>HOME</h1>
          </Link>
        </div>
  
        <div className="pre">
          <h1 className="t2">Prêmios</h1>
        </div>
  
        <div className="premios">
          <img src={card} className="ca" alt="Cartão-presente" />
          <img src={phone} className="ph" alt="Fone de ouvido" />
          <img src={cel} className="ce" alt="Celular" />
        </div>
  
        <img src={line} className="lin" alt="Linha divisória" />
        <h2 className="p1">1000</h2>
        <h2 className="p2">3000</h2>
        <h2 className="p3">5000</h2>
  
        <div className="ran">
          <h1 className="t1">Ranking</h1>
        </div>
  
        <div className="topp">
          {usuarios.map((user, index) => (
            <div key={index} className='u'>
              {user.avatar && <img src={user.avatar} alt={user.username} />}
              <p>{user.username}</p>
              <p>{user.pontos}</p>
            </div>
          ))}
        </div>
      </div>
  );
}

export default rancking;
