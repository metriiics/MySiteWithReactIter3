import './App.css';
import "./style/Footer.css";
import "./style/Header.css";
import "./style/Home.css";
import "./style/Projects.css";
import "./style/Post.css";
import "./style/theme.css";
import "./style/Whois.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Post from "./components/Post";
import Whois from "./components/Whois";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";

export default function App() {
  return (
    <>
      <Router>
         <Routes>
            <Route path="/" element={<> <Home /> <Footer /> </>} />
            <Route path="/projects" element={<Layout> <Projects /> </Layout>} />
            <Route path="/posts" element={<Layout> <Post /> </Layout>} />
            <Route path="/whois" element={<Layout> <Whois /> </Layout>} />
         </Routes>
      </Router>
    </>
  );
}