import { useState } from "react";

export const Nav = ({ setDataRepo }) => {

    const [name, setName] = useState('');
    const URL_MY_REPOSITORYS = `https://api.github.com/users/${name}/repos`;

    const setNameRepo = (event) => {
        const nameRepo = event.target.value;
        setName(nameRepo);
    }

    function getRepositories() {
        fetch(URL_MY_REPOSITORYS)
            .then((res) => res.json())
            .then((repos) => setDataRepo(repos))
            .catch((err) => {
                alert('Repositório não encontrado');
                window.location.reload();
            });
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="form-inline">
                <input
                    className="form-control mr-sm-2" type="text" placeholder="Nome do Repositório" aria-label="Pesquisar"
                    onChange={setNameRepo}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={getRepositories} >Pesquisar</button>
            </div>
        </nav>
    );
}