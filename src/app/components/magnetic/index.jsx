"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Magnetic = ({ children }) => {
  const magneticRef = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magneticRef.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magneticRef.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const intensity = 0.5;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magneticRef.current.getBoundingClientRect();
      const x = (clientX - (left + width / 4)) * intensity;
      const y = (clientY - (top + height / 4)) * intensity;
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magneticRef.current.addEventListener("mousemove", handleMouseMove);
    magneticRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      magneticRef.current.removeEventListener("mousemove", handleMouseMove);
      magneticRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: magneticRef });
};

export default Magnetic;

/*import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Magnetic = ({ children }) => {
  const magneticRef = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magneticRef.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magneticRef.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const intensity = 0.5;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magneticRef.current.getBoundingClientRect();
      const x = (clientX - (left + width / 4)) * intensity;
      const y = (clientY - (top + height / 4)) * intensity;
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magneticRef.current.addEventListener("mousemove", handleMouseMove);
    magneticRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      magneticRef.current.removeEventListener("mousemove", handleMouseMove);
      magneticRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []); // Dependência vazia para executar apenas uma vez

  return React.cloneElement(children, { ref: magneticRef });
};

export default Magnetic;
*/
