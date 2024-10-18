"use client";
import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
import project from "../assets/proj1.jpg";
import project2 from "../assets/proj2.jpg";

const projects = [
    {
        title: "Landing-page Infor Gerencial",
        desc: "Landing page criada para a empresa Infor Gerencial, projeto feito para melhorar a do site da empresa.",
        devStack: "Next.js, TailwindCSS, Typescript",
        link: "#",
        git: "#",
        src: project
    },
    {
        title: "Landing-page Orbita Software-House",
        desc: "Landing page criada para a Organização Orbita, projeto feito para ser o site de vendas.",
        devStack: "Next.js, TailwindCSS, Typescript",
        link: "#",
        git: "#",
        src: project2
    },
    {
        title: "Landing-page Fruto Davide Decorações",
        desc: "Landing page criada para a empresa Fruto Davide, projeto feito para ser o site de vendas.",
        devStack: "React, Styled-Components, JavaScript",
        link: "#",
        git: "#",
        src: project2
    },
    {
        title: "Sistema Food Delivery",
        desc: "Sistema completo com front end, back-end e tela de admin para restaurantes com gatway de pagamento e tela de login.",
        devStack: "React, CSS, Express, MongoDB, JavaScript",
        link: "#",
        git: "#",
        src: project2
    }

]

const Projetos = () => {
    return (
        <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40' id='Projetos'>

            <h1 className="text-white text-4xl max-w-[320px] mx-auto font-semibold my-12">Meus<span className="text-orange-600"> Projetos</span></h1>


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
                            <p className='text-xl text-orange-600 font-semibold'>{project.devStack}</p>
                            <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                <a href={project.link} className='mr-6'>Link</a>
                                <a href={project.git} className='mr-6'>Git</a>
                            </div>
                        </div>
                        <div>
                            <Image src={project.src} alt={project.title} className='h-[350px] w-[500px] object-cover border rounded border-gray-500' />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projetos