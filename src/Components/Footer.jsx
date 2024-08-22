import React from "react";
import NiloyImg from "../assets/me2.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { FaGithub, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={NiloyImg} />

        <h2>Foysal Ahammed Niloy</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
        <p>thanks for visiting 😊</p>
      </div>

      <aside></aside>
      <a className="ok" href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
