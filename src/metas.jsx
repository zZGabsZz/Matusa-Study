import { useState, useEffect } from 'react';
import './metas.css';
import { Link } from 'react-router-dom';
import logo from './assets/logo matusa study.jpg';

function Metas() {
    const [metas, setMetas] = useState([]);
    const [novaMeta, setNovaMeta] = useState("");
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const authenticatedUsername = localStorage.getItem('authenticatedUser');
        if (authenticatedUsername) {
          const users = JSON.parse(localStorage.getItem('users')) || [];
          const authenticatedUser = users.find((user) => user.username === authenticatedUsername);
          setCurrentUser(authenticatedUser || { username: authenticatedUsername, avatar: './assets/avatar.png' });
        }
      }, []);
      

    const adicionarMeta = () => {
        if (novaMeta.trim()) {
            setMetas([
                ...metas,
                { id: Date.now(), descricao: novaMeta, concluida: false }
            ]);
            setNovaMeta("");
        }
    };

    const marcarComoConcluida = (id) => {
        setMetas(metas.map(meta =>
            meta.id === id ? { ...meta, concluida: !meta.concluida } : meta
        ));
    };

    const excluirMeta = (id) => {
        setMetas(metas.filter(meta => meta.id !== id));
    };

    return (
        <div>
            <div className="barra">
                <img src={logo} alt="Logo" />
                <Link to="/menu">
                    <h1>HOME</h1>
                </Link>
            </div>
            <h1 className="me">Metas Dadas:</h1>
            <div className="input-container">
                <input
                    className="in"
                    type="text"
                    placeholder="Digite uma nova meta"
                    value={novaMeta}
                    onChange={(e) => setNovaMeta(e.target.value)}
                />
                <button onClick={adicionarMeta} className="ads">Adicionar Meta</button>
            </div>
            <h2>Conclua as <br />Metas de grupo,<br />e consiga até 1000 pontos!</h2>
            <div className="meta">
                {currentUser ? (
                    <>
                        <img src={currentUser.avatar || './assets/avatar.png'} alt={currentUser.username} className='seryouimg2'/>
                        <h2 className='seryou2'>{currentUser.username}</h2>
                    </>
                ) : (
                    <>
                        <img src="./assets/avatar.png" alt="Usuário" />
                        <h2>Usuário</h2>
                    </>
                )}
                <div className="desc">
                    {metas.map((meta) => (
                        <div key={meta.id} className={`meta-item ${meta.concluida ? 'concluida' : ''}`} id="list">
                            <input
                                type="checkbox"
                                checked={meta.concluida}
                                onChange={() => marcarComoConcluida(meta.id)}
                            />
                            <p className="met">{meta.descricao}</p>
                            <button onClick={() => excluirMeta(meta.id)} className="ex">
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Metas;
