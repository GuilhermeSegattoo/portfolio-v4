"use client"
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/avatar.png"

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
                    className="absolute left-[230px] top-[170px]"
                    drag
                >
                    <Image
                        src={cursor}
                        height="170"
                        width="170"
                        alt="cursor"
                        className=""
                        draggable="false"
                    />

                </motion.div>

                <motion.div
                    className="absolute right-[220px] top-[-130px]"
                    drag
                >
                    <Image
                        src={lightning}
                        height="120"
                        width="120"
                        alt="cursor"
                        className=""
                        draggable="false"
                    />

                </motion.div>

                <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
                Desenvolvedor front-end com conhecimentos em back-end e atualmente programando em javascript e typescript. 
                </p>

                <Image
                    src={profilepic}
                    alt="profile picture"
                    className="h-auto w-auto mx-auto"
                />
            </div>
        </div>
    )
}

export default Hero
