import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

const NavBar = ({ openNav, toggleNav }) => {
  const navItems = useSelector((state) => state.main.navItems);

  const handleNavigation = useCallback(() => {
      
  }, [])

 return(
  <>
    <button disabled={!openNav} onClick={toggleNav} className={cn("fixed w-screen h-screen z-30 bg-gray-300 lg:hidden transition-all duration-100 ease-linear", { "opacity-0": !openNav, "z-[-1]": !openNav })}/>
    <div 
      className={
        cn("fixed top-0 left-0 p-3 lg:p-0 w-[200px] lg:w-full h-full bg-white z-40 lg:z-0 border-gray-200 border-b-1 border-r-1 border-t-1 lg:border-0 lg:flex lg:static lg:gap-x-1 lg:mt-3 lg:justify-between transition-margin duration-100 ease-linear",
          {
            "-ml-[200px]": !openNav
          },
          "lg:ml-0"
        )
      }
      >
      {
        navItems?.map((item) => (
          <button 
            key={item.id} 
            className="text-sm block w-full lg:w-auto text-left mb-1 lg:mb-0" 
            onClick={() => handleNavigation(item.path)}
          >
            {item.name}
          </button>
        ))
      }
    </div>
  </>
 )
}

export default React.memo(NavBar)