import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  async function fetchProjects() {
    const response = await fetch("http://127.0.0.1:8000/api/projects/");
    const data = await response.json();
    setProjects(data);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="container-content-projects">

      {projects.map((proj) => (
        <div key={proj.id} className="content-projects-info">
          <h3 className="title-project">{proj.projects_title}</h3>
          <p className="description-project">{proj.projects_description}</p>
          <div className="tags-project">
            {(proj.projects_tags || []).map((tag, index) => (
                <span key={index} className="project-tag-item">{tag.trim ? tag.trim() : tag}</span>
            ))}
          </div>
          <a href={proj.projects_link} className="link-project" target="_blank">
            <img src="/github-30.png" alt="GitHub" className="link-icon"/>
            Github
          </a>
        </div>

      ))}
  
    </div>
  );
}