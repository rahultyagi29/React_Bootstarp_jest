import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Careers from "./Pages/Careers.jsx";
import Contact from "./Pages/Contact.jsx";
import Our_Products from "./Pages/Our-Product.jsx";
import Webdevelopment from "./Pages/Webdevelopment.jsx";
import Creative_design from "./Pages/Creative_design.jsx";
import Mobile_Development from "./Pages/Mobile-Development.jsx";
import Digital_marketing from "./Pages/Digital-Marketing.jsx";
import Quality_testing from "./Pages/Quality-Testing.jsx";
import Ecommerce_solution from "./Pages/Ecommerce-Solution.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/our-Products" element={<Our_Products />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/webdevelopment" element={<Webdevelopment />} />
        <Route path="/Creative_design" element={<Creative_design />} />
        <Route path="/Mobile_Development" element={<Mobile_Development />} />
        <Route path="/Digital_marketing" element={<Digital_marketing />} />
        <Route path="/Quality_testing" element={<Quality_testing />} />
        <Route path="/Ecommerce_solution" element={<Ecommerce_solution />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
