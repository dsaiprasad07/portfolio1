import React from "react";

const frontendSkills = [
  { name: "HTML", icon: "/assets/html-5.png" },
  { name: "CSS", icon: "/assets/css-3.png" },
  { name: "JavaScript", icon: "/assets/javascript.png" },
  { name: "Bootstrap", icon: "/assets/bootstrap.png" },
  { name: "React JS", icon: "/assets/react.png" },
];

const backendSkills = [
  { name: "Node.js", icon: "/assets/nodejs.png" },
  { name: "SQL", icon: "/assets/sql.png" },
  { name: "Python", icon: "/assets/python.png" },
];

function Skills() {
  return (
    <section id="skills" className="skills-section py-5" style={{background: 'var(--secondary)', borderRadius: '2rem', margin: '2rem 0'}}>
      <div className="container">
        <h2 className="mb-4" style={{fontWeight: 700, fontSize: '2.2rem'}}>Skills</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h4>Frontend</h4>
            <div className="d-flex flex-wrap gap-4">
              {frontendSkills.map(skill => (
                <div key={skill.name} className="text-center">
                  <img src={skill.icon} alt={skill.name} style={{width: '48px', height: '48px'}} />
                  <div style={{marginTop: '0.5rem', fontWeight: 500}}>{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <h4>Backend</h4>
            <div className="d-flex flex-wrap gap-4">
              {backendSkills.map(skill => (
                <div key={skill.name} className="text-center">
                  <img src={skill.icon} alt={skill.name} style={{width: '48px', height: '48px'}} />
                  <div style={{marginTop: '0.5rem', fontWeight: 500}}>{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills; 