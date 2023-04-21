import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full h-20 bg-transparent backdrop-blur-md border-b-2 border-white border-opacity-20 flex justify-center items-center sticky ßz-[3ß0] top-0 hover:bg-white/5">
      <Link className="text-white font-medium ml-12" to="/">Home</Link>
      <Link className="text-white font-medium ml-12" to="/projects/">Projects</Link>
    </div>
  )
}
