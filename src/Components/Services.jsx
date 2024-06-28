import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { AiFillAndroid, AiFillCiCircle, AiFillWindows } from "react-icons/ai";
import gsap from "gsap";
import {motion} from "framer-motion";



const Services = () => {
const ref = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#services h2,h1 ", {
     y: 800,
     scaleY : 2,
      opacity : 0,
      duration:1.2,
      scrollTrigger: {
        trigger: "#services",
        scroller: "body",
        start: "top 40%",
        end: "top 80%",
        scrub: 2,
      },
    });
    
    gsap.from("#services .serviceBox1", {
      x:-1200 ,
      opacity : 0,
      duration:1.2,
      scrollTrigger: {
        trigger: "#services",
        scroller: "body",
        start: "top 40%",
        end: "top 80%",
        scrub: 2,
      },
    });
    gsap.from("#services .serviceBox2", {
      y:-1200 ,
      opacity : 0,
      duration:1.2,
      scrollTrigger: {
        trigger: "#services",
        scroller: "body",
        start: "top 40%",
        end: "top 80%",
        scrub: 2,
      },
    });
    gsap.from("#services .serviceBox3", {
      x: -500 ,
      opacity : 0,
      duration:1.2,
      scrollTrigger: {
        trigger: "#services",
        scroller: "body",
        start: "top 30%",
        end: "top 70%",
        scrub: 2,
      },
    });
    gsap.from("#services .serviceBox4", {
      y:1200 ,
      opacity : 0,
      duration:1.2,
      scrollTrigger: {
        trigger: "#services",
        scroller: "body",
        start: "top 40%",
        end: "top 80%",
        scrub: 2,
      },
    });
    
    

  });

  return (
    <div ref={ref} id="services">
      <h2>Services</h2>
      <h6 className="text-white text-2xl text-center capitalize font-bold "> 🫵 You can <span>drag</span> this <span>cards</span></h6>
      <section  className="sec"> 
        <motion.div drag dragConstraints={ref} whileDrag={{scale : 1.2}} dragElastic={.2}  className="serviceBox1">
          <h3>1+</h3>
          <p>years experience</p>
        </motion.div>
        <motion.div drag dragConstraints={ref} whileDrag={{scale : 1.2}} dragElastic={.2}  className="serviceBox2">
          <AiFillCiCircle />
          <span>web Development</span>
        </motion.div>
        <motion.div drag dragConstraints={ref} whileDrag={{scale : 1.2}} dragElastic={.2} className="serviceBox3">
          <AiFillAndroid />
          <span>Full Stack Development</span>
        </motion.div>
        <motion.div drag dragConstraints={ref} whileDrag={{scale : 1.2}} dragElastic={.2} className="serviceBox4">
          <AiFillWindows />
          <span>Web app development</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
