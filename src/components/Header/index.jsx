import React, { useCallback, useState } from "react";
import NavBar from "../NavBar";
import "./styles.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = useCallback(() => {
    setIsNavOpen(!isNavOpen)
  }, [isNavOpen])

  return (
    <div className="app-header relative">
      <div className="grid grid-row-1 grid-cols-3 border-b-1 border-gray-200 py-3">
        <div className="flex">
          <div className="lg:hidden mr-2">
            <button onClick={toggleNav}><i className="fa fa-bars"></i></button>
          </div>
          <div className="flex items-center gap-x-0.5">
            <i className="fa fa-search"/>
            <input type="search"/>
          </div>
        </div>
        <h1 className="text-center font-bold">CORAL</h1>
        <div className="flex justify-end gap-x-3">
            <button className="text-sm">
              <span className="lg:hidden"><i className="fa fa-user"/></span>
              <span className="hidden lg:block">Account</span>
            </button>
            <button className="text-sm">
              <span className="lg:hidden"><i className="fa fa-gear"/></span>
              <span className="hidden lg:block">Setting</span>
            </button>
        </div>
      </div>
      <NavBar toggleNav={toggleNav} openNav={isNavOpen} />
    </div>
  )
}

export default React.memo(Header)