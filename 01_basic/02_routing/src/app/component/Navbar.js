import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-gray-700 text-black flex justify-between items-center text-center p-3'>
        <h3 className='text-xl font-bold'>Routing</h3>
      <ul className='flex justify-between list-none gap-4'>
        <li className='text-blue-500 hover:underline'><Link href={"/"}>Home</Link></li>
        <li className='text-blue-500 hover:underline'><Link  href={"/about"}>About</Link></li>
        <li className='text-blue-500 hover:underline'><Link href={"/blog"}>Blog</Link></li>
      </ul>
    </nav>
  )
}
