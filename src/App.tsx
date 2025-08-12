import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles/global.css";
import { LanguageProvider } from "./i18n/LanguageContext";
import Thanks from "./pages/Thanks";

const App: React.FC = () => (
  <LanguageProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
  {/* your other routes */}
  <Route path="/thanks" element={<Thanks />} />

      </Routes>
      <Footer />
    </Router>
  </LanguageProvider>
);

export default App;
