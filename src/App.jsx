import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Feature from "./components/Feature";
import Cards from "./components/Cards";
import Ready from "./components/Ready";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen bg-[#F1F1F1] text-black ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
      <Cards />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;
