import myImage1 from './images/image-one.svg';
import myImage2 from './images/image-two.svg';
import "./Header.css";

function Header() {
  return (
      <header className="Header">
        <div className="tertiary">Find your block</div>
        <h1>
          Encontre os <span className="secondary">melhores blocos</span> de carnaval de 2023
        </h1>
        <div className="input-wrapper">
          <input className='input-one' type="search" id="site-search" name="q" placeholder="Pesquise por nome"/>
          <select className='select' name="cities" id="cities" placeholder="Selecione sua cidade">
            <option value="" disabled selected hidden>Selecione uma cidade</option>
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
          </select>
          <button>Buscar agora</button>
          <img className="image-one" src={myImage1}/>
          <img className="image-two" src={myImage2}/>
        </div>
      </header>
  );
}

export default Header;
