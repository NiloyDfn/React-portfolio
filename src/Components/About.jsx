import React, { useRef } from 'react'
import img from "../assets/niloy.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
    
    // Image animation
    tl.fromTo(imgRef.current, 
      { opacity: 0, scale: 0.8, x: -50 },
      { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power3.out" }
    );
    
    // Heading animation
    tl.fromTo(headingRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.5"
    );
    
    // Add special animation for the span
    tl.fromTo("h2 span", 
      { color: "white" },
      { color: "#00a8ff", duration: 0.4 },
      "-=0.4"
    );
    
   
    
    tl.fromTo("h4", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.3"
    );
    
    // Add hover effect for the image
    const img = imgRef.current;
    img.addEventListener("mouseenter", () => {
      gsap.to(img, { scale: 1.05, duration: 0.3 });
    });
    
    img.addEventListener("mouseleave", () => {
      gsap.to(img, { scale: 1, duration: 0.3 });
    });
    
  }, []);

  return (
    <div 
      data-scroll-section 
      data-scroll  
      className='about' 
      id="about"
      ref={aboutRef}
    >
      <div 
        data-scroll 
        data-scroll-speed=".06" 
        className="about-img"
      >
        <img 
          src={img} 
          alt="Niloy profile" 
          ref={imgRef}
        />
      </div>
      
      <div 
        className="about-content" 
        data-scroll 
        data-scroll-speed="-.2"
        ref={contentRef}
      >
        <h2 className="heading" ref={headingRef}>
          About <span>Me</span>
        </h2>
        
        <h4>Full Stack Developer!</h4>
        
        <h4>
          I am a passionate and skilled MERN stack developer with a strong background 
          in full-stack web development. I am dedicated to creating responsive, 
          interactive, and user-friendly web applications that meet and exceed client 
          expectations. My commitment to writing clean, efficient code, along with my 
          ability to work collaboratively in a team, has allowed me to deliver 
          outstanding results on a variety of projects.
        </h4>
      </div>
    </div>
  )
};

export default About;