import "./App.css";
import React from "react";
import ProjectCarousel from "./components/ProjectCarousel";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Projects</h1>
      <ProjectCarousel />
      <div class="contact">
        <h1>Contact</h1>
        <Footer />
      </div>
    </div>
  );
}

export default App;
