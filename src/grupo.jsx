import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './grupo.css';
import logo from './assets/logo matusa study.jpg';
import ba from './assets/usuario_x.jpg';
import so from './assets/usuario_z.jpg';
import men from './assets/menss.png';

function grupo() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const authenticatedUsername = localStorage.getItem('authenticatedUser');
    if (authenticatedUsername) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const authenticatedUser = users.find((user) => user.username === authenticatedUsername);
      setCurrentUser(authenticatedUser || { username: authenticatedUsername, avatar: './assets/default-avatar.png' });
    }
  }, []); 

  return (
    <div>
      <div className="barra">
        <img src={logo} alt="" />
        <Link to="/menu">
          <h1>HOME</h1>
        </Link>
      </div>
      <Link to="/metas">
        <button className="MEtas">METAS</button>
      </Link>
      <div className="bar">
        <h1>Grupo de Estudos:</h1>
      </div>
      <div className="vc">
      {currentUser ? (
          <>
            <img src={currentUser.avatar || './assets/avatar.png'} alt={currentUser.username} className='seryouimg'/>
            <h2 className='seryou'>{currentUser.username}</h2>
          </>
        ) : (
          <>
            <img src="./assets/avatar.png" alt="Usuário" />
            <h2>Usuário não autenticado</h2>
          </>
        )}
      </div>
      <div className="grup">
        <div className="borda">
          <img src={ba} className="bah" alt="" />
          <img src={men} className="men1" alt="" />
          <h2 className="andre">Bahiano Andrez</h2>
        </div>

        <div className="borda2">
          <img src={so} className="soa" alt="" />
          <img src={men} className="men2" alt="" />
          <h2 className="vini">Soares Vinícius</h2>
        </div>
      </div>
    </div>
  );
}

export default grupo;
