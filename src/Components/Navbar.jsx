import React from 'react'
import {links} from '../assets/data'
function Navbar() {
  return (
    <nav className='bg-slate-900 text-white'>
     <div className='mx-auto flex  justify-between  py-4 sm:flex sm:gap-x-8 sm:items-center' >
        <h2 className='text-3xl  font-bold'>Software <span className='text-emerald-600'>Developer</span></h2>

        <div className='flex gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide hover:text-amber-300 duration-400 m-2'
              >
                {text}
              </a>
            );
          })}
        </div>
     </div>
    </nav>
  )
}

export default Navbar
