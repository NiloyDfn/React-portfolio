import React, { useState, useEffect } from "react";
import Header, { HeaderPhone } from "./Components/Header";
import { Toaster } from "react-hot-toast";
import Cursor from "./Components/Cursor";
import LocomotiveScroll from 'locomotive-scroll';
import Home from "./Components/Home";
import Work from "./Components/Work";
import Experience from "./Components/Experience";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {

    const locomotiveScroll = new LocomotiveScroll();

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
