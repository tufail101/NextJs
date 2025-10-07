import React from 'react'

export default function Footer() {
  return (
   <footer className='bg-black'>
    <div className='flex justify-between mx-11 p-5'>

    <h1 className='font-bold text-xl'>First App </h1>
    <div className="about">
        <pre className='flex flex-col'>
            <h2 className='font-bold'>About Us</h2>
            <p className='max-w-sm mx-3'>This is introductory text about the app.</p>
            <p className='max-w-sm mx-3'>Hey this is my first next app</p>
            <p className='max-w-sm mx-3 '>I am very excited to learn more about it.</p>
        </pre>
    </div>
    <div className="links">
        <p className='font-bold'>Links: </p>

        <ul className='mx-3'>
            <li className='hover:bg-neutral-500 cursor-pointer'>Facebook</li>
            <li className='hover:bg-neutral-500 cursor-pointer'>Github</li>
            <li className='hover:bg-neutral-500 cursor-pointer'>Insta</li>
        </ul>
    </div>
    </div>
    <h1 className='font-bold text-center p-2'>© 2025 all rights reserved My Next App</h1>
   </footer>
  )
}
