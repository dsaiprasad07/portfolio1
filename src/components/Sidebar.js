import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar() {
  return (
    <div className="social-sidebar">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-facebook" style={{fontSize: '2rem'}}></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-twitter" style={{fontSize: '2rem'}}></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-linkedin" style={{fontSize: '2rem'}}></i>
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-github" style={{fontSize: '2rem'}}></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-instagram" style={{fontSize: '2rem'}}></i>
      </a>
    </div>
  );
}

export default Sidebar;