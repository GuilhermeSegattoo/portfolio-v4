"use client";
import React from "react";
import Image from "next/image";
import aboutImg from "../assets/profilepic.png";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className="max-w-[1100px] mx-auto my-10" id="about">

      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">About<span className="text-orange-600"> Me</span></h1>

      <div className="grid grid-cols-8 gap-4 place-items-center">
        
        {/* Formação */}
        <div className="w-full col-span-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row items-center p-4">
            <Image src={book} alt="book" className="w-auto h-[100px]" />
            <div className="flex flex-col ml-4">
              <h2 className="text-xl font-bold text-white/80">Formação</h2>
              <p className="text-lg text-white/70 mt-2">
                Estou me formando em Análise e Desenvolvimento de Sistemas e meu
                foco está nas tecnologias React, Next.js e Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        {/* Competência */}
        <div className="w-full col-span-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row items-center p-4">
            <Image src={finance} alt="finance" className="w-auto h-[100px]" />
            <div className="flex flex-col ml-4">
              <h2 className="text-xl font-bold text-white/80">Competência</h2>
              <p className="text-lg text-white/70 mt-2">
                Eu resolvo desafios usando uma mentalidade lógica
              </p>
            </div>
          </div>
        </div>

        {/* Experiência */}
        <div className="w-full col-span-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row items-center p-4">
            <Image src={card} alt="card" className="w-auto h-[100px]" />
            <div className="flex flex-col ml-4">
              <h2 className="text-xl font-bold text-white/80">Experiência</h2>
              <p className="text-lg text-white/70 mt-2">
                Confira os diversos projetos logo abaixo
              </p>
            </div>
          </div>
        </div>

        {/* Habilidades técnicas */}
        <div className="w-full col-span-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row items-center p-4">
            <Image src={pc} alt="pc" className="w-auto h-[100px]" />
            <div className="flex flex-col ml-4">
              <h2 className="text-xl font-bold text-white/80">Habilidades técnicas</h2>
              <p className="text-lg text-white/70 mt-2">
              Full-Stack developer, criando aplicações modernas e seguras com React, Next.js, Tailwind CSS, Styled-Components, Swagger, JWT e MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
