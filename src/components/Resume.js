import React from "react";

function Resume() {
  return (
    <section id="resume" className="resume-section py-5" style={{background: 'var(--secondary)', borderRadius: '2rem', margin: '2rem 0'}}>
      <div className="container">
        <h2 className="mb-4" style={{fontWeight: 700, fontSize: '2.2rem'}}>Resume</h2>
        <a
          href="/assets/Saiprasad_resume_2.pdf"
          className="btn btn-primary mb-4"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume (PDF)
        </a>
        <div className="embed-responsive embed-responsive-16by9" style={{width: '100%', minHeight: '600px', border: '1px solid #ccc', borderRadius: '1rem', overflow: 'hidden'}}>
          <iframe
            title="Resume PDF"
            src="/assets/Saiprasad_resume_2.pdf"
            style={{width: '100%', height: '600px', border: 'none'}}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Resume; 