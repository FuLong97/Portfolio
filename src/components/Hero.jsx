import { useState, useEffect, useRef } from "react";
import useTypewriter from "../hooks/useTypewriter";
import MatrixRain from "./MatrixRain";
import {
  SiGithub,
  SiLinkedin,
  SiDiscord,
  SiReact,
  SiThreedotjs,
  SiJavascript,
  SiWebgl,
} from "react-icons/si";

export default function Hero({ roles, name }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const displayText = useTypewriter(roles);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      // "e" is the mouse event - it exists here!
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-slate-950 min-h-screen  w-full  flex flex-col items-center justify-center relative"
    >
      <MatrixRain />
      <div className="border border-blue-500 z-10 justify-center items-start flex flex-col p-4 md:p-8 mx-4 rounded-2xl bg-slate-950/20 backdrop-blur-sm">
        <div className="z-10 flex items-center  gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-violet-600 text-sm font-[JetBrains_Mono]">
            Available for work
          </span>
        </div>
        <h1 className="z-10 font-[Outfit] text-white text-4xl md:text-7xl lg:text-9xl mb-4 font-bold">
          {name}
        </h1>
        <p className="z-10 font-[JetBrains_Mono] text-violet-600 text-xl md:text-3xl mb-5">
          {displayText}
          <span className="text-white animate-pulse">|</span>
        </p>
        <p className="z-10 text-gray-400 text-lg mb-2 font-[Outfit] max-w-lg leading-relaxed">
          I craft immersive 3D experiences and performant interfaces for the
          web. Passionate about creative coding, shaders, and pushing the
          boundaries of what browsers can do.
        </p>
        <div className="z-10 flex gap-6 mt-6">
          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <SiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <SiLinkedin size={20} />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <SiDiscord size={20} />
          </a>
        </div>

        <div className="z-10 flex flex-wrap gap-4 md:gap-6 mt-10 text-sm font-[JetBrains_Mono]">
          <span className="flex items-center gap-2 text-cyan-400">
            <SiReact size={16} /> React
          </span>
          <span className="flex items-center gap-2 text-white">
            <SiThreedotjs size={16} /> Three.js
          </span>
          <span className="flex items-center gap-2 text-yellow-400">
            <SiJavascript size={16} /> JavaScript
          </span>
          <span className="flex items-center gap-2 text-orange-400">
            <SiWebgl size={16} /> WebGL
          </span>
        </div>
      </div>
    </section>
  );
}
