import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Painel from './painel';
import Register from './cadastro';
import Login from './login';
import Menu from './menu';
import Metas from './metas';
import Rancking from './rancking';
import Grupo from './grupo';
import Materiais from './materiais'
import Timer from './timer'
import Exe from './exercicios'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Painel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/metas" element={<Metas />} />
        <Route path="/racking" element={<Rancking />} />
        <Route path="/grupo" element={<Grupo />} />
        <Route path="/materiais" element={<Materiais />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/exercicios" element={<Exe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
