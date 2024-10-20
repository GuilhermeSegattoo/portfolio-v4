import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projetos from "@/components/Projetos";
import Skills from "@/components/Skills";
import Contato from '@/components/Contato'
import Footer from "@/components/Footer";

export default function Home() {
  return (
     <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projetos/>
      <Skills/>
      <Contato/>
      <Footer/>
     </>
  );
}
