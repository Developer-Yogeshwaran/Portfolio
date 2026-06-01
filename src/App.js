import React, { useState, useEffect, lazy, Suspense } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import "./style.css";
import "./App.css";
import "./creative.css";
import "./enhanced.css";
import "./ultra-creative.css";
import "./advanced-animations.css";
import "./premium-effects.css";
import "./gorgeous-animations.css";
import "./gorgeous-styling.css";
import "./advanced-effects.css";
import "./interactive-effects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ultimate-design.css";

import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Achievements from "./components/Achievements/Achievements";
import Experience from "./components/Experience/Experience";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const AnimatedBackground = lazy(() => import("./components/AnimatedBackground"));

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    if (window.innerWidth > 767) {
      import("./effects-engine");
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <Suspense fallback={<div className="app-loading"><span className="loading-spinner" aria-hidden="true"></span>Loading background...</div>}>
        <AnimatedBackground />
      </Suspense>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<div className="section-loading"><span className="loading-spinner" aria-hidden="true"></span>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
