import { animate, motion } from "framer-motion";
import React, { useRef } from "react";
import pdf from "../assets/resume.pdf"
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import NiloyImg from "../assets/me2.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);
  const animationClientCount = () => {
    animate(0, 0, {
      duration: 4,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectCount = () => {
    animate(0, 20, {
      duration: 3,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".h1div h4,h6", {
      x: -500,
      duration: 1,
      opacity: 0,
      stagger: 0.5,
      // scaleY: -2.5,
    });
    tl.from(".social-media  ", {
      y: 250,
      duration: 1,
      scaleY: 1.8,
      stagger: 0.8,
      opacity: 0,
    });
    gsap.from(".social-media button ", {
      y: -150,
      duration: 0.5,
      scaleY: 1.8,
      stagger: 0.5,
      opacity: 0,
    });
    gsap.from(".container .btn,.icon", {
      y: 300,
      duration: 0.5,
      opacity: 0,
      scale: 1.1,
    });
  });

  return (
    <div id="home" data-scroll data-scroll-section data-scroll-speed="-.01">
      
      <section >
        <div className="h1div">
          <h4 className="text-[2vw] font-bold ">
            Hi, I Am <span className="name">Niloy</span> I Am
          </h4>
          <div className=" text-[3.2vw] font-bold">
            <Typewriter
              options={{
                strings: [
                  "A Full Stack Developer or",
                  "A Mern Developer",
                  "A Front-end developer",
                  "A back-end developer",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriter",
              }}
            />
          </div>
          <h6>
            {" "}
            Creating <span className="name">Websites</span> and{" "}
            <span className="name">web applications</span>
          </h6>
          <div>
            <div className="social-media">
              <a target="blank" href="mailto:foysalahamedniloy1235@gmail.com">
                <button>
                  <MdEmail size={"28"} />
                </button>
              </a>
              <a
                target="blank"
                href="https://www.facebook.com/niloyfoysal07?mibextid=ZbWKwL"
              >
                <button>
                  <FaFacebook size={"28"} />
                </button>
              </a>
              <a
                target="blank"
                href="https://linkedin.com/in/foysal-ahammed-niloy-bb9289270"
              >
                <button>
                  <FaLinkedin size={"28"} />
                </button>
              </a>
              <a target="blank" href="https://github.com/NiloyDfn/NiloyDfn.git">
                <button>
                  <FaGithub size={"28"} />
                </button>
              </a>
              <a target="blank" href="https://wa.me/+8801643128094">
                <button>
                  <RiWhatsappFill size={"28"} />
                </button>
              </a>
              <a
                target="blank"
                href="https://instagram.com/foysalniloy7?igshid=YTQwZjQ0NmI0OA=="
              >
                <button>
                  <FaInstagramSquare size={"28"} />
                </button>
              </a>
            </div>
            <div className="container">
              <a href={pdf} className="btn" download> 
                <FaDownload/>
                Resume
              </a>
              <a className="icon" href="#work">
                My Projects
                <span className="icon">
                  <BsArrowUpRight />
                </span>
              </a>
            </div>
          </div>
          <article>
            <p>
              <motion.span
                whileInView={animationClientCount}
                ref={clientCount}
              ></motion.span>{" "}
              +
            </p>
            <span>Clients WorldWide</span>
          </article>
          <aside>
            <article>
              <p>
                <motion.span
                  whileInView={animationProjectCount}
                  ref={projectCount}
                ></motion.span>{" "}
                +{" "}
              </p>
              <span>project made</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>FoysalAhamedniloy1235@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={NiloyImg} alt="reloading" />
        <div className="drop-icon">
          <BsChevronDown size={"30"} />
        </div>
      </section>
    </div>
  );
};

export default Home;
