import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function Header() {

  useEffect(() => {
    const links = document.querySelectorAll('.header-menu li a');
    const currentPath = window.location.pathname;

    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, [window.location.pathname]);

  return (
    <header className="header">

        <div className="naming-home">
            <p>
              <Link to="/">Metriics</Link>
            </p>
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