import './App.css';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Article } from './components/Article';
import { useState } from 'react';
import { InformationBar } from './components/InformationBar';

function App() {
  
  const [dataRepo, setDataRepo] = useState([]);

  return (
    <div className="container">
      <Header></Header>

      <Nav setDataRepo={setDataRepo} ></Nav>

      <InformationBar repos={dataRepo}></InformationBar>

      {dataRepo.map((data) => <Article repo={data} key={data.id}></Article> )}
    </div>
  );
}

export default App;
