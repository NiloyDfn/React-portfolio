import React, { useState } from "react";
import Header, { HeaderPhone } from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Experience from "./Components/Experience";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import Cursor from "./Components/Cursor";



function App() {

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
      <Footer />
      <Toaster />
      <Cursor/>
    </>
  );
}

export default App;
