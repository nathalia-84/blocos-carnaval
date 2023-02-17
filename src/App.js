import myImage1 from './images/image-one.svg';
import myImage2 from './images/image-two.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="tertiary">Find your block</div>
        <h1>
          Encontre os melhores{" "}
          <div className="secondary">blocos de carnaval</div> de 2023
        </h1>
        <div className="input-wrapper">
          <input type="search" id="site-search" name="q" placeholder="Pesquise por nome"/>
          <select name="cities" id="cities" placeholder="Selecione sua cidade">
            <option value="" disabled selected hidden>Selecione uma cidade</option>
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
          </select>
          <button>Buscar agora</button>
          <img className="image-one" src={myImage1}/>
          <img className="image-two" src={myImage2}/>
        </div>
      </header>
    </div>
  );
}

export default App;
