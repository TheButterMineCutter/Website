import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full h-20 bg-transparent backdrop-blur-md border-b-2 border-white border-opacity-20 flex justify-center items-center z-[1] fixed">
      <Link className="text-white font-medium ml-12" to="/">Home</Link>
      <Link className="text-white font-medium ml-12" to="projects/">Projects</Link>
      <Link className="text-white font-medium ml-12" to="about/">About</Link>
      <Link className="text-white font-medium mr-auto ml-12" to="contacts/">Contacts</Link>
    </div>
  )
}
