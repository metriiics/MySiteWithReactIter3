import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header className="header">

        <div className="naming-home">
            <p>Metriics</p>
        </div>

        <nav className="header-nav">
            <ul className="header-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/whois">Whois?</Link></li>
            </ul>
        </nav>
    </header>
  );
}