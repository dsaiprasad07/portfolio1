import React from "react";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <div className="logo fw-bold">ANISH KUMAR SINHA</div>
      <nav>
        <ul className="nav">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#resume" className="nav-link">Resume</a></li>
          <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <button
        id="theme-toggle"
        className="btn btn-light"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

export default Header;