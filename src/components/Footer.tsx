import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-12 text-white/70 py-8 max-w-[1000px]: container mx-auto border-t border-gray-700
                    pt-4 flex justify-between items-center'>
                       
      <h1 className='text-2xl font-bold'><p className='text-2xl font-light'>Desenvolvedor </p>  Guilherme Segatto</h1>
      <div className='flex space-x-6 mt-4'> 
         <a href="https://www.linkedin.com/in/guilhermesegatto/" className='hover:text-gray-300'>
           <FaLinkedin size={24}/>
         </a>
         <a href="https://github.com/GuilhermeSegattoo" className='hover:text-gray-300'>
           <FaGithub size={24}/>
         </a>
         <a href="https://www.instagram.com/segatto.developer/" className='hover:text-gray-300'>
           <FaInstagram size={24}/>
         </a>
      </div>
    </div>
  )
}

export default Footer