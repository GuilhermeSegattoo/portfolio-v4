import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projetos from "@/components/Projetos";
import Skills from "@/components/Skills";
import Contato from '@/components/Contato'
import Image from "next/image";

export default function Home() {
  return (
     <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projetos/>
      <Skills/>
      <Contato/>
     </>
  );
}
