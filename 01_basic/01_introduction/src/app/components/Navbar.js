import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
   <nav className='bg-black text-white flex justify-between text-center items-center p-3'>
    <h2 className='mx-4 text-2xl'>First App</h2>
    <ul className='flex justify-between list-none gap-5 mx-5'>
        <li className='p-1 hover:border-2 border-amber-100 rounded-xl '><Link href={"/"}>Home</Link></li>
        <li className='p-1 hover:border-2 border-amber-100 rounded-xl '><Link href={"/about"}>About</Link></li>
        <li className='p-1 hover:border-2 border-amber-100 rounded-xl '><Link href={"/contact"}>Contact Us</Link></li>
        <li className='p-1 hover:border-2 border-amber-100 rounded-xl '><Link href={"/login"}>Login</Link></li>
    </ul>
   </nav>
  )
}
