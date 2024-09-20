'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
  return (
    <div className='space-x-3 text-center '>
      <Link href="/" className='text-blue-500'>Home</Link>
      <Link href="/about" className='text-blue-500'>About</Link>
      <button onClick={()=>router.push("/")}>Home</button>
      <button onClick={()=>router.push("/about")}>About</button>
      <button></button>
    </div>
  )
}

export default Navbar
