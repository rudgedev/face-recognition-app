import logo from '../../images/logo.png';

import './Header.css';

function App() {
  return (
    <header className="header">
      <a className="logo__link" href="/">
        <img className="logo" src={logo} alt="logo"/>
      </a>

      <nav className="nav">
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__item-link" href="#">Возраст</a>
          </li>
          <li className="menu__item">
            <a className="menu__item-link" href="#">Страница ВКонтакте</a>
          </li>
          <li className="menu__item">
            <a className="menu__item-link" href="#">Поиск друзей</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
