import React from "react";

function Hero() {
  return (
    <section id="home" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 hero-text">
            <span className="badge bg-info text-white mb-2">Hello!</span>
            <h1>
              I'm <span className="highlight">Anish <span role="img" aria-label="wave">👋</span></span>
            </h1>
            <p className="lead">
              UI/UX Designer, Front-End Developer & Thinker. Based in India.
            </p>
            <div className="mt-4">
              <a href="/assets/anish-cv.pdf" className="btn btn-warning me-2" download>Download CV</a>
              <a href="#contact" className="btn btn-dark">Get in Touch!</a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="profile-img-bg" style={{position: 'relative', display: 'inline-block'}}>
              <img src="/assets/IMG_20221007_230832-removebg-preview.png" alt="Anish Kumar Sinha" className="profile-img" />
              <div className="yellow-shape" style={{position: 'absolute', top: 20, left: 40, width: 200, height: 200, background: '#ffe600', borderRadius: '60% 40% 60% 40%', zIndex: 1}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;