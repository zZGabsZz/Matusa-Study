import './cadastro.css';
import logo from './assets/logo_login.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function cadastro() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      const existingUser = users.find(user => user.username === username);
      if (existingUser) {
        alert('Nome de usuário já está em uso. Escolha outro.');
        return;
      }
      if (username.trim() === '' || password.trim() === '') {
        alert('Todos os campos devem ser preenchidos.');
        return;
      }
  
      if (password.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
      }
  
      const newUser = {
        username,
        password,
        avatar: avatar || '/assets/avatar.png', // Corrigido para usar o caminho correto
        pontos: 0,
      };
  
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
      navigate('/login');
    } else {
      alert('Preencha todos os campos!');
    }
  };  

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { 
        alert('A imagem deve ter no máximo 2 MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div>
      <img src={logo} className="log" alt="" />
      <h1 className="cadastrar">Cadastro</h1>
      <input
        className="nom"
        type="text"
        placeholder="Nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="sen"
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="img-upload"
        type="file"
        accept="image/*"
        onChange={handleAvatarChange}
      />
      {avatar && <img src={avatar} alt="Pré-visualização" className="preview-avatar" />}
      <button onClick={handleRegister} className="Cadast">
        CADASTRAR
      </button>
      <Link to="/login">
        <h3 className='plog'>Já possui uma conta? Faça Login</h3>
      </Link>
    </div>
  );
}

export default cadastro;
