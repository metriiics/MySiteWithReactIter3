import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function Home() {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
        
        <div className="picture-home">
            <img src={isDark ? "/backHomeDark.png" : "/backHomeLight.png"} alt="background"/>
        </div>

        <div className="socialink">
            <img src="/logo192.png" />
            <img src="/logo192.png" />
            <img src="/logo192.png" />
        </div>

        <div className="home-info">
            <div className="naming">
                <p>Metriics</p>
            </div>

            <nav className="header-nav-home">
                <ul className="header-menu-home">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/whois">Whois?</Link></li>
                </ul>
            </nav>
        </div>

        <Footer />
    </div>
  );
}

