import projects from "../data";
function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project) => {
        return (
          <div className="project-card" key={project.id}>
            <h2 className="project-title">{project.name}</h2>
           
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" className="project_link">
              <a href="" alt="icon" />Clique aqui para conhecer o Projeto
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;