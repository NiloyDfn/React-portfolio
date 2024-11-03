import React, { useState, useEffect , Suspense, lazy } from "react";
import Header, { HeaderPhone } from "./Components/Header";
import { Toaster } from "react-hot-toast";
import Cursor from "./Components/Cursor";
import LocomotiveScroll from 'locomotive-scroll';
import Loader from "./Components/Loader";

// Lazy load components
const Home = lazy(() => import("./Components/Home"));
const Work = lazy(() => import("./Components/Work")); 
const Experience = lazy(() => import("./Components/Experience"));
const Services = lazy(() => import("./Components/Services"));
const Contact = lazy(() => import("./Components/Contact"));
const About = lazy(() => import("./Components/About"));
const Footer = lazy(() => import("./Components/Footer"));

function App() {
  // Initialize LocomotiveScroll in useEffect to avoid SSR issues
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      smooth: true,
      lerp: 0.1, // Linear interpolation, adjust for smoother/faster scrolling
      multiplier: 1.0,
      class: 'is-revealed'
    });

    // Cleanup on unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Suspense fallback={<Loader/>}>
        <Home />
        <Work />
        <Experience />
        <Services />
        <Contact />
        <About/>
        <Footer />
      </Suspense>
      <Toaster />
      <Cursor />
    </>
  );
}

export default App;
