import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/navstyles.css';
import * as Icons from "react-icons/fa";
import ASG from '../../asgLogo.png';
import { navItems } from './navItems';

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if(window.innerWidth < 1065) {
      setMobile(true);
    }
  }, [])

  useEffect(() => {
    const handleSize = () => {
      if(window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener('resize', handleSize)
    return () => {
      window.removeEventListener('resize', handleSize);
    }
  }, [])

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
          <img src={ASG} alt="ASG" />
          {/* I do not own any rights to this image - content credited to https://asginc.us/ */}
        </Link>
        {!mobile && (
          <ul className="nav-items">
            {navItems.map((item) => {
              return (
                <li key={item.id} className={item.nName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {!mobile}

        {mobile && (
          <div className="sidebar-full">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-click"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-click"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>

      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
                className={item.sName}
                onClick={() => setSidebar(false)}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;