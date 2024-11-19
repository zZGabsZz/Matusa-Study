import './login.css';
import logo from './assets/logo_login.png';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(
      (u) => u.username === username && u.password === password
    );
  
    if (user) {
      localStorage.setItem('authenticatedUser', username);
      alert('Login bem-sucedido!');
      navigate('/menu');
    } else {
      alert('Credenciais inválidas!');
    }
  };
  

  return (
    <div>
      <img src={logo} className="log" alt="" />
      <h1 className="lo">Login</h1>
      <input className="nom"
        type="text"
        placeholder="Nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input className="sen"
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="Cadast">ENTRAR</button>
      <Link to="/register">
        <h3 className='plog'>Não possui uma conta? Cadastre-se</h3>
      </Link>
    </div>
  );
}

export default login;
