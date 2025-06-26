import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;