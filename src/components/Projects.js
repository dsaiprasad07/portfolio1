import React from "react";

const projects = [
  {
    name: "Swiggy Demo",
    link: "https://demoswiggy33.ccbp.tech",
    tech: [
      { name: "HTML", icon: "bi bi-filetype-html" },
      { name: "CSS", icon: "bi bi-filetype-css" },
      { name: "Bootstrap", icon: "bi bi-bootstrap" },
    ],
    description: "A Swiggy landing page clone built with HTML, CSS, and Bootstrap. Responsive and visually appealing.",
  },
  {
    name: "Jobby App",
    link: "https://jobbyappsai09.ccbp.tech",
    tech: [
      { name: "React.js", icon: "bi bi-react" },
    ],
    description: "A job search platform built with React.js, featuring authentication, job listings, and detailed job views.",
  },
  {
    name: "NxtTrendz",
    link: "https://nxtrendsai.ccbp.tech",
    tech: [
      { name: "React.js", icon: "bi bi-react" },
    ],
    description: "An e-commerce web app inspired by Amazon, built with React.js. Includes product listings, cart, and authentication.",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section py-5" style={{background: 'var(--secondary)', borderRadius: '2rem', margin: '2rem 0'}}>
      <div className="container">
        <h2 className="mb-4" style={{fontWeight: 700, fontSize: '2.2rem'}}>Projects</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-4" key={project.name}>
              <div className="card h-100 shadow-sm border-0" style={{borderRadius: '1.5rem'}}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{fontWeight: 600}}>{project.name}</h5>
                  <div className="mb-2">
                    {project.tech.map((t) => (
                      <span key={t.name} className="me-2" title={t.name}>
                        <i className={t.icon} style={{fontSize: '1.7rem', verticalAlign: 'middle'}}></i>
                      </span>
                    ))}
                  </div>
                  <p className="card-text" style={{flexGrow: 1}}>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-auto">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 