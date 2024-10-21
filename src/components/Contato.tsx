import React from 'react'
import Image from 'next/image'
import phone from '../assets/wpp.png'
import mail from '../assets/gmail.png'
import conversa from '../assets/conversando.png'

const Contato = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='Contato'>
        <div className='flex justify-center items-center'>
        <Image src={conversa} alt='conversa' className=''/>
        </div>

        <div className='bg-blue-950 p-6 rounded-xl max-w-[550px]'>
          <h2 className='text-5xl font-bold text-white mb-4'>Vamos conversar!</h2>
          <p className='text-white/70 text-2xl font-extralight mb-1'>Me mande uma mensagem e vamos dar vida ao seu projeto</p>
          <ul className='space-y-4 flex flex-col-reverse'> 
              <li className='flex items-center'> 
                 <p className='text-xl'>+55 61 99955-2805</p>
                 <Image src={phone} alt='Phone' className='h-[30px] w-auto  ml-6'/>
              </li>
              <li className='flex items-center'>
                 <p className='text-xl'>segattooguilherme@gmail.com</p>
                 <Image src={mail} alt='email' className='h-[30px] w-auto ml-6'/>
              </li>
          </ul>
          <form className='space-y-4 mt-6' action="https://getform.io/f/axojdgob" method="POST">
             <div className='grid md:grid-cols-2 gap-4'>
                <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='Primeiro nome'/>
                <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='Sobrenome'/>
                <input type='email' name='email' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='Email'/>
                <input type='phone' name='phone' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='Telefone'/>
             </div>
             <textarea  className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='Digite sua menssagem'></textarea>
             <button className='bg-emerald-500 hover:bg-white text-blue-950 px-6 py-2 w-full font-semibold text-xl rounded-xl'>Enviar Mensagem</button>
          </form>
        </div>
    </div>
  )
}

export default Contato