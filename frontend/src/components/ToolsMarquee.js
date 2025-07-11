import Marquee from "react-fast-marquee";

const tools = [
  { name: "React", logo: "/logos/react.png" },
  { name: "Node.js", logo: "/logos/nodejs.png" },
  { name: "Figma", logo: "/logos/figma.png" },
  // добавьте свои инструменты
];

function ToolsMarquee() {
  return (
    <Marquee gradient={false} speed={50}>
      {tools.map((tool, idx) => (
        <div key={idx} style={{ display: "flex", alignItems: "center", marginRight: 32 }}>
          <img src={tool.logo} alt={tool.name} style={{ height: 32, marginRight: 8 }} />
          <span style={{ fontSize: 18 }}>{tool.name}</span>
        </div>
      ))}
    </Marquee>
  );
}

export default ToolsMarquee;
