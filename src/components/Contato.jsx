import React from 'react'
import Image from 'next/image'
import phone from '../assets/Iphone.png'
import mail from '../assets/gmail.png'

const Contato = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='Contato'>
        <div className='flex justify-center items-center'>
          <ul className='space-y-4'> 
              <li className='flex items-center'>
                 <Image src={phone} alt='Phone' className='h-[110px] w-auto mr-6 ml-6'/>
                 <p className='text-xl'>+55 61 99955-2805</p>
              </li>
              <li className='flex items-center'>
                 <Image src={mail} alt='email' className='h-[110px] w-auto mr-6'/>
                 <p className='text-xl'>segattooguilherme@gmail.com</p>
              </li>
          </ul>
        </div>

        <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
          <h2 className='text-5xl font-bold text-blue-900 mb-4'>Vamos conversar</h2>
          <p className='text-white/70 mb-6'>Me mande uma mensagem e vamos dar vida ao seu projeto!</p>
          <form className='space-y-4' action="https://getform.io/f/axojdgob" method="POST">
             <div className='grid md:grid-cols-2 gap-4'>
                <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='Primeiro nome'/>
                <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='Sobrenome'/>
                <input type='email' name='email' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='Email'/>
                <input type='phone' name='phone' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='Telefone'/>
             </div>
             <textarea  className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='Digite sua menssagem'></textarea>
             <button className='bg-blue-950 hover:bg-blue-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Enviar Mensagem</button>
          </form>
        </div>
    </div>
  )
}

export default Contato