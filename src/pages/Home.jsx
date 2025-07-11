import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Cognition from "../components/Cognition";
import Widget from "../components/Widget";
import Footer from "../components/Footer";
import SponsorForm from "../components/SponsorForm";
import Sponsor from "../components/Sponsors";

export default function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    console.log("Scrolling to:", section);
    console.log("aboutRef:", aboutRef.current);
    console.log("contactRef:", contactRef.current);

    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "100";
    canvas.style.pointerEvents = "none";
    document.body.style.cursor = "none";

    let particles = [];

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 6 + 2;
        this.life = 60;
        this.velocityX = (Math.random() - 0.5) * 2;
        this.velocityY = (Math.random() - 0.5) * 2;
        this.color = color;
      }
      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.life -= 1.5;
        this.size *= 0.96;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const animateParticles = (e) => {
      particles.push(
        new Particle(e.clientX, e.clientY, "rgba(255, 223, 0, 0.8)")
      );
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, index) => {
        p.update();
        p.draw();
        if (p.life <= 0) particles.splice(index, 1);
      });
      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", animateParticles);
    render();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("mousemove", animateParticles);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <title>Cognition</title>
      <div className="fixed top-0 left-0 w-full h-full bg-black z-[-3]"></div>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar scrollToSection={scrollToSection} />
      </div>
      {/* <div className="relative z-20 pt-20">
        <Words />
      </div> */}
      <div className="relative z-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "url('/uncle_ace1.png')",
            backgroundSize: "57%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: "-2",
            opacity: 1,
            position: "fixed",
          }}
        >
          <style>
            {`
          @media (max-width: 1024px) {
            div[style] { background-size: 75% !important; }
          }
          @media (max-width: 768px) {
            div[style] { background-size: cover !important; }
          }
        `}
          </style>
        </div>
        <Cognition />
        <div ref={aboutRef}>
          <Widget />
        </div>
        <Sponsor />
        <div ref={contactRef}>
          <SponsorForm />
        </div>
      </div>
      <Footer scrollToSection={scrollToSection} />
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />
    </>
  );
}
