import './App.css';
import "./style/Footer.css";
import "./style/Header.css";
import "./style/Home.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      {/* <Header /> */}
      <Projects />
      {/* <Footer /> */}
    </div>
  );
}