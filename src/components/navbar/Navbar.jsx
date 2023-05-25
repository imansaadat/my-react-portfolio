import React from 'react'
import Navlinks from "./Navlinks";
import { navLinksData } from "../../data/data";
export const Navbar = () => {
  return (
    <nav className="w-full bg-primaryColor sticky z-50 top-0 left-0 right-0 shadow-shadowOne">
    {/* container */}
    <div className="flex justify-between items-center py-2 max-w-screen-xl mx-auto px-3 md:px-8">
      {/* navlinks */}
      <ul className="hidden md:flex items-center space-x-8">
        {navLinksData.map((item) => (
          <Navlinks item={item} key={item.id} />
        ))}
      </ul>
    </div>
  </nav>
  )
}
