import React, { useState, useEffect } from "react";
import gsap from "gsap";

function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    gsap.to(cursor, {
      left: cursorPosition.x + 35,
      top: cursorPosition.y + 35,
    });
  }, [cursorPosition]);

  return <div data-scroll data-scroll-speed=".01" className="cursor"></div>;
}

export default Cursor;
