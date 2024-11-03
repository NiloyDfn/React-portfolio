import React, { useState, useEffect , Suspense, lazy } from "react";
import Header, { HeaderPhone } from "./Components/Header";
import { Toaster } from "react-hot-toast";
import Cursor from "./Components/Cursor";
import LocomotiveScroll from 'locomotive-scroll';
import Loader from "./Components/Loader";

// lazy load components
const Home = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/Home")), 5000);
}));
const Work = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/Work")), 5000);
}));
const Experience = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/Experience")), 5000);
}));
const Services = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/Services")), 5000);
}));
const Contact = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/Contact")), 5000);
}));
const About = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/About")), 5000);
}));
const Footer = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/Footer")), 5000);
}));

function App() {

    const locomotiveScroll = new LocomotiveScroll();

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


