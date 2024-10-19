"use client";
import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
import project from "../assets/inforgerencial.png";
import project2 from "../assets/orbita2.png";
import project3 from "../assets/davide.png";
import project4 from "../assets/foodDel.png"

const projects = [
    {
        title: "Landing-page Infor Gerencial",
        desc: "Landing page criada para a empresa Infor Gerencial, projeto feito para melhorar a do site da empresa.",
        devStack: "Next.js, TailwindCSS e Typescript",
        link: "https://infor-gerencial-landpage.vercel.app/",
        git: "https://github.com/GuilhermeSegattoo/inforGerencial-landpage",
        src: project
    },
    {
        title: "Landing-page Fruto Davide Decorações",
        desc: "Landing page criada para a empresa Fruto Davide, projeto feito para ser o site de vendas.",
        devStack: "React, Styled-Components e JavaScript",
        link: "#",
        git: "https://github.com/GuilhermeSegattoo/FrutoDavide",
        src: project3
    },
    {
        title: "Landing-page Orbita Software-House",
        desc: "Landing page criada para a Organização Orbita, projeto feito para ser o site de vendas.",
        devStack: "Next.js, TailwindCSS e Typescript",
        link: "https://orbitalanding-dev.vercel.app",
        git: "https://github.com/GuilhermeSegattoo/orbitaLandingPage",
        src: project2
    },
    {
        title: "Sistema Food Delivery",
        desc: "Sistema completo com front end, back-end e tela de admin para restaurantes com getway de pagamento e tela de login.",
        devStack: "React, CSS, Express, MongoDB e JavaScript",
        link: "#",
        git: "https://github.com/GuilhermeSegattoo/Food-Del",
        src: project4
    }

]

const Projetos = () => {
    return (
        <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40' id='Projetos'>

            <h1 className="text-white text-4xl max-w-[320px] mx-auto font-semibold my-12">Meus<span className="text-blue-600"> Projetos</span></h1>


            <div className='max-w-[1000px] mx-auto mt-32 space-y-24'>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`flex ${index % 2 === 1 ? "flex-col-reverse md:flex-row-reverse gap-12" : "flex-col md:flex-row"}`}
                    >
                        <div className='space-y-2 max-w-[550px]'>
                            <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                            <h2 className='text-4xl'>{project.title}</h2>
                            <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                            <p className='text-xl text-blue-600 font-semibold'>{project.devStack}</p>
                            <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                <a href={project.link} className='mr-6'>Link</a>
                                <a href={project.git} className='mr-6'>Git</a>
                            </div>
                        </div>
                        <div>
                            <Image src={project.src} alt={project.title} className='h-[350px] w-[1200px] object-cover border rounded border-gray-500' />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projetos