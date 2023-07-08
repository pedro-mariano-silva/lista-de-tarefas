import "./index.scss";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <ul className="container__ul">
          <li className="container__li">Organização</li>
          <li className="container__li">Tarefas</li>
        </ul>
      </nav>
    </header>
  );
}
