import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from 'react-i18next';

export default function Whois() {
  const { t } = useTranslation();

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
        <h1 className="heading">{t('Whois.PresentationLayer.heading')}</h1>
        <p className="description">{t('Whois.PresentationLayer.description')}</p>
        <img src="/profileImg.jpg" className="profileImg"/> 
      </div>

      <div className="StackLayer">
        <h1 className="heading">{t('Whois.StackLayer.heading')}</h1>
        <p className="description">{t('Whois.StackLayer.description')}</p>
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
        <h1 className="heading">{t('Whois.AboutLayer.heading')}</h1>
        <p className="description">{t('Whois.AboutLayer.description')}</p>
        <div className="links-container">
          <a href="/" className="link-post" target="_blank">My CV/Resume</a>
          <a href="/" className="link-post" target="_blank">My CV/Resume</a>
          <a href="/" className="link-post" target="_blank">My CV/Resume</a>
          <a href="/" className="link-post" target="_blank">My CV/Resume</a>
        </div>
      </div>

    </div>
  );
}