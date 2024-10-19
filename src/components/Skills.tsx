import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaRunning,FaTasks, FaLeaf, FaFileCode,FaNetworkWired,FaShieldAlt,
        FaDatabase,FaCode
  } from 'react-icons/fa'

const skillIcons = [
    {icon: <FaHtml5 size={140}/>, label: "HTML" },
    {icon: <FaCss3Alt size={140}/>, label: "CSS" },
    {icon: <FaReact size={140}/>, label: "React" },
    {icon: <FaJsSquare size={140}/>, label: "JavaScript" },
    {icon: <FaTasks size={140}/>, label: "Scrum" },
    {icon: <FaLeaf size={140}/>, label: "MongoDB" },
    {icon: <FaFileCode size={140}/>, label: "Swagger" },
    {icon: <FaNetworkWired size={140}/>, label: "API REST" },
    {icon: <FaShieldAlt size={140}/>, label: "JWT" },
    {icon: <FaDatabase size={140}/>, label: "CRUD" },
    {icon: <FaCode size={140}/>, label: "Next.js" },
    {icon: <FaRunning size={140}/>, label: "Proatividade" },
]

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
        <div className='text-white w-[400px] md:min-w-[750px] mx-auto p-8 text-center'>
            <h2 className='text-6xl font-bold mb-4 text-blue-700'>Skills</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 '>
                {skillIcons.map((skill,index)=>(
                    <div key={index} className='h-[160px] w-[160px] md:h-[160px] md:w-[160px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                     {skill.icon}
                     <p className='mt-2'>{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills