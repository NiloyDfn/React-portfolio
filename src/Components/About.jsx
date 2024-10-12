import React from 'react'
import img from "../assets/niloy.png"

const About = () => {
  return (
         <div data-scroll-section data-scroll  className='about' id="about">
        <div data-scroll data-scroll-speed=".06" className="about-img">
           <img src={img} alt="reloading" />
        </div>
        <div className="about-content" data-scroll data-scroll-speed="-.2">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>Full Stack Developer!</h3>
            <p>I am a passionate and skilled MERN stack developer with a strong background in full-stack web development. I am dedicated to creating responsive, interactive, and user-friendly web applications that meet and exceed client expectations. My commitment to writing clean, efficient code, along with my ability to work collaboratively in a team, has allowed me to deliver outstanding results on a variety of projects.</p>
        </div>

    </div>     
  )
}

export default About