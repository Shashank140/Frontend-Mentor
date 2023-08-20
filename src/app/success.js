"use client";

import Image from 'next/image';
import checkmark from './assets/images/icon-list.svg'
import { useState } from 'react';


export default function Success({email, setSuccess}) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
 };
 
 const handleMouseLeave = () => {
    setIsHover(false);
 };
 const buttonStyle = {
  backgroundColor: isHover ? 'hsl(4, 100%, 67%)' : 'hsl(234, 29%, 20%)'
 };
  return (
    <>
      <div style={{backgroundColor: 'hsl(234, 29%, 20%)'}} className='md:flex md:items-center md:justify-center md:h-screen'>
        <section className='bg-white pt-20 px-4 pb-8 flex flex-col justify-between h-screen md:h-auto md:w-[500px] md:rounded-2xl md:p-12'>
          <div>
            <Image src={checkmark} alt='Checkmark' width={60} height={60} className="mb-8"/>
            <h1 className='text-slate-900 font-bold text-4xl lg:text-5xl mb-8 '>Thanks for subscribing!</h1>
          <p className='mb-8'>A confirmation email has been sent to <strong>{email}</strong>.
              Please open it and click the button inside to confirm your
              subscription.</p>
          </div>
          
        <button style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => setSuccess(false)} className='py-3 px-4 w-full border rounded-lg text-slate-900 text-white font-bold' 
        >Dismiss Message</button>
        </section>
      </div>
    </>
  )
}
