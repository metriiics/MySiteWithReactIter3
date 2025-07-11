import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

export default function Whois() {

  const [tools, setTools] = useState([]);

  async function fetchTools() {
    const response = await fetch("http://127.0.0.1:8000/api/tools/");
    const data = await response.json();
    setTools(data);
  }

  useEffect(() => {
    fetchTools();
  }, []);


  return (
    <div className="whoisContainer">

      <div className="PresentationLayer">
        <h1 className="welcomeHeading">Lorem Ipsum</h1>
        <p className="welcomeText">Lorem IpsumLorem IpsumLorem IpsumLorem IpsumvLorem IpsumLorem IpsumLorem IpsumLorem IpsumvLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
        <img src="/profileImg.jpg" className="profileImg"/> 
      </div>

      <div className="StackLayer">
        <h1 className="welcomeHeading">My Stack</h1>
        <p className="welcomeText">Lorem IpsumLorem IpsumLorem IpsumLorem IpsumvLorem IpsumLorem IpsumLorem IpsumLorem IpsumvLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
        <Marquee gradient={false} speed={50}>
          <div className="marquee">
            {tools.map((tool, idx) => (
              <div key={idx}>
                <img src={tool.tools_image} alt={tool.name}/>
                <span>{tool.tools_name}</span>
              </div>
            ))}
          </div>
        </Marquee>
        <a href="/" className="link-post" target="_blank">My CV/Resume</a>
      </div>

      <div className="AboutLayer">
        <h1 className="welcomeHeading">About me</h1>
        <p className="welcomeText">Lorem IpsumLorem IpsumLorem IpsumLorem IpsumvLorem IpsumLorem IpsumLorem IpsumLorem IpsumvLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
        <a href="/" className="link-post" target="_blank">My CV/Resume</a>
        <a href="/" className="link-post" target="_blank">My CV/Resume</a>
        <a href="/" className="link-post" target="_blank">My CV/Resume</a>
        <a href="/" className="link-post" target="_blank">My CV/Resume</a>
      </div>

    </div>
  );
}