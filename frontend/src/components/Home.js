import Footer from "../components/Footer";

export default function Home() {

  return (
    <div className="home-container">
        
        <div className="picture-home">
            <img src="/logo192.png" />
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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Posts</a></li>
                    <li><a href="#">Whois?</a></li>
                </ul>
            </nav>
        </div>

        <Footer />
    </div>
  );
}

