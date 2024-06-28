import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Header = ({ menuOpen, setMenuOpen }) => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".h3logo",{
      y: -500,
      duration : .5,
      opacity : 0,
      scale : 1.1
    })
    tl.from(".divtag  " , {
      y: -150,
      stagger: .5,
      duration: .8,
      opacity: 0,
    });
  tl.from(".abtn",{
    y: 50,
    scaleX: 1.2,
    opacity : 0,
  })
 
  });
  

  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>
      {menuOpen ? (
        <button onClick={() => setMenuOpen(false)} className="navBtn">
          <AiOutlineClose />
        </button>
      ) : (
        <button onClick={() => setMenuOpen(true)} className="navBtn">
          <AiOutlineMenu />
        </button>
      )}
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => {
 
  return (
    <>
      <h3 className="h3logo">Niloy Portfolio</h3>
      <div className="divtag">
        <a onClick={() => setMenuOpen(false)}  href="#home">
          Home
        </a>
        <a onClick={() => setMenuOpen(false)}  href="#work">
          Work
        </a>
        <a onClick={() => setMenuOpen(false)}  href="#experience">
          Experience
        </a>
        <a onClick={() => setMenuOpen(false)}  href="#services">
          Services
        </a>
        <a onClick={() => setMenuOpen(false)}  href="#contact">
          Contact
        </a>
      </div>
      <a className="abtn" href="mailto:foysalahamedniloy1235@gmail.com">
        <button>
          Email <MdEmail size={22} />
        </button>
      </a>
    </>
  );
};

export default Header;
