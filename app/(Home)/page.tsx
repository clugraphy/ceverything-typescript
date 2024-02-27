import Image from "next/image";
import * as React from "react"
import { useTheme } from "next-themes"
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import { Spotlight } from "@/components/ui/spotlight";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";



export default function Home() {
  return (

    <div className="min-h-screen bg-black overflow-hidden">
      <div className=" dark:bg-black bg-white  dark:bg-grid-green-500/[0.1] bg-grid-red/[0.2]">

        <div className="max-w-7xl mx-auto p-5">
          <NavBar />
          <HeroSection />

        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div >
  );
}
