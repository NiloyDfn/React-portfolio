import React, { useState, useEffect , Suspense, lazy } from "react";
import Header, { HeaderPhone } from "./Components/Header";
import { Toaster } from "react-hot-toast";
import Cursor from "./Components/Cursor";
import LocomotiveScroll from 'locomotive-scroll';
import Loader from "./Components/Loader";

// lazy load components
const Home = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/Home")), 3000);
}));
const Work = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/Work")), 3000);
}));
const Experience = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/Experience")), 3000);
}));
const Services = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/Services")), 3000);
}));
const Contact = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/Contact")), 3000);
}));
const About = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/About")), 3000);
}));
const Footer = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./Components/Footer")), 3000);
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


