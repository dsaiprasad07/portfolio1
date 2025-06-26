import React from "react";

const frontendSkills = [
  { name: "HTML", image: "/assets/html-5_5968267.png" },
  { name: "CSS", image: "/assets/css_919826.png" },
  { name: "JavaScript", image: "/assets/icons8-javascript-48.png" },
  { name: "Bootstrap", image: "/assets/icons8-bootstrap-48.png" },
  { name: "React JS", image: "/assets/core-value_13101870.png" },
];

const backendSkills = [
  { name: "Node.js", image: "/assets/icons8-nodejs-48.png" },
  { name: "SQL", image: "/assets/database_4248443.png" },
  { name: "Python", image: "/assets/python_5968350.png" },
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
                  <img src={skill.image} alt={skill.name} style={{width: '48px', height: '48px', objectFit: 'contain'}} />
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
                  <img src={skill.image} alt={skill.name} style={{width: '48px', height: '48px', objectFit: 'contain'}} />
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