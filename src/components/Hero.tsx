"use client"
import Image from "next/image";
import cursor from "../assets/lampada.png";
import { motion } from "framer-motion";
import profilepic from "../assets/avatar.png"
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'


const Hero = () => {
    return (
        <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#172554_35%,#2563eb_60%,#0ea5e9_80%)]'>

            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                            bg-[radial-gradient(closest-side,#000_90%,#172554)]"></div>

            <div className="relative">
                <div className='text-8xl font-bold text-center'>
                    <h1 className="text-[#e4e4e4]">Olá, Eu sou</h1>
                    <h1 className="text-[#e4e4e4]">Dev <span className="text-[#3747f5]">Segatto</span>!</h1>
                </div>



                <motion.div
                    className="hidden md:block absolute right-[220px] top-[-70px]"
                    drag
                >
                    <Image
                        src={cursor}
                        height="120"
                        width="120"
                        alt="cursor"
                        className=""
                        draggable="false"
                    />

                </motion.div>

                <p className="text-center font-100 text-xl max-w-[500px] mx-auto mt-8 text-white/80">
                    Desenvolvedor front-end com conhecimentos em back-end e atualmente programando em javascript e typescript.
                </p>

                <Image
                    src={profilepic}
                    alt="profile picture"
                    className="h-auto w-auto mx-auto"
                />
                <div className='flex justify-center items-center space-x-5 mt-4'>
                    <a href="https://www.linkedin.com/in/guilhermesegatto/" className='hover:text-gray-300'>
                        <FaLinkedin size={34} />
                    </a>
                    <a href="https://github.com/GuilhermeSegattoo" className='hover:text-gray-300'>
                        <FaGithub size={34} />
                    </a>
                    <a href="https://www.instagram.com/segatto.developer/" className='hover:text-gray-300'>
                        <FaInstagram size={34} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
