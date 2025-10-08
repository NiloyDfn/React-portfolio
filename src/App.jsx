import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import LocomotiveScroll from 'locomotive-scroll';
import Header from "./Components/Header";
import { HeaderPhone } from "./Components/Header";
import Home from "./Components/Home";
import Cursor from "./Components/Cursor";
const Work = React.lazy(() => import("./Components/Work"));
const Experience = React.lazy(() => import("./Components/Experience"));
const Services = React.lazy(() => import("./Components/Services"));
const Contact = React.lazy(() => import("./Components/Contact"));
const About = React.lazy(() => import("./Components/About"));
const Footer = React.lazy(() => import("./Components/Footer"));

function App() {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Experience />
      <Services />
      <Contact />
      <About/>
      <Footer />
      <Toaster />
      <Cursor />
      
    </>
  );
}

export default App;
