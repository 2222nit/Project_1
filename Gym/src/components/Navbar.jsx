import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {

  const navbar = [
    {href:"/",name:"Gym benefits"},
    {href:"/",name:"Gallery"},
    {href:"/",name:"About"},
    {href:"/",name:"Contact"}
  ]

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <nav className='relative border-b-2 bg-zinc-900/80 text-amber-500 h-20 w-full px-20 flex text-2xl font-Montserrat tracking-wider justify-between items-center '>

      <a href="#">Logo</a>

      <ul className='hidden md:flex gap-10 hover:cursor-pointer'>
        {
          navbar.map((v,i)=>(
            <li key={i}>
              <a href={v.href}>{v.name}</a>
            </li>
          ))
        }
      </ul>

      <div className='md:hidden' onClick={toggleMenu}>
        {
          open ? <IoMdClose /> : <CiMenuBurger />
        }
      </div>

      {
        open && (
          <ul className='md:hidden bg-zinc-900/80 text-amber-500 w-full absolute top-20 left-0 flex flex-col gap-3 text-center'>
            {
              navbar.map((v,i)=>(
                <li key={i}>
                  <a href={v.href}>{v.name}</a>
                </li>
              ))
            }
          </ul>
        )
      }

    </nav>
  )
}