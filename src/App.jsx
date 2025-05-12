import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import LocomotiveScroll from 'locomotive-scroll';
import Header from "./Components/Header";
import { HeaderPhone } from "./Components/Header";
import Home from "./Components/Home";
import Cursor from "./Components/Cursor";
import Work from "./Components/Work";
import Experience from "./Components/Experience";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";

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
