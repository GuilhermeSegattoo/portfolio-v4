"use client";
import React from "react";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className="max-w-[1100px] mx-auto my-10" id="Sobre">

      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">About<span className="text-blue-600"> Me</span></h1>

      <div className="px-6 md:p-0 grid md:grid-cols-8 gap-4 place-items-center">
        
        {/* Formação */}
        <div className="w-full md:col-span-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-700 to-blue-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row items-center p-4">
            <Image src={book} alt="book" className="w-auto h-[100px]" />
            <div className="flex flex-col ml-4">
              <h2 className="text-xl font-bold text-white/80">Formação</h2>
              <p className="text-lg text-white/70 mt-2">
                Estou me formando em Análise e Desenvolvimento de Sistemas 
              </p>
            </div>
          </div>
        </div>

        {/* Competência */}
        <div className="w-full md:col-span-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-700 to-blue-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row items-center p-4">
            <Image src={finance} alt="finance" className="w-auto h-[100px]" />
            <div className="flex flex-col ml-4">
              <h2 className="text-xl font-bold text-white/80">Competência</h2>
              <p className="text-lg text-white/70 mt-2">
                Desenvolvo software completos desde uma landing-page até um e-commerce.
              </p>
            </div>
          </div>
        </div>

        {/* Experiência */}
        <div className="w-full md:col-span-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-700 to-blue-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row items-center p-4">
            <Image src={card} alt="card" className="w-auto h-[100px]" />
            <div className="flex flex-col ml-4">
              <h2 className="text-xl font-bold text-white/80">Experiência</h2>
              <p className="text-lg text-white/70 mt-2">
                Já fui do time da Infraestrutura da TI, do suporte e hoje sou desenvolvedor web!
              </p>
            </div>
          </div>
        </div>

        {/* Habilidades técnicas */}
        <div className="w-full md:col-span-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-700 to-blue-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row items-center p-4">
            <Image src={pc} alt="pc" className="w-auto h-[100px]" />
            <div className="flex flex-col ml-4">
              <h2 className="text-xl font-bold text-white/80">Habilidades técnicas</h2>
              <p className="text-lg text-white/70 mt-2">
              Full-Stack developer, criando aplicações modernas e seguras com React, Next.js, TailwindCSS, Swagger, JWT e MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
