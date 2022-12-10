import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/navstyles.css';
import * as Icons from "react-icons/fa";
import ASG from '../../asgLogo.png';

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSideBar] = useState(false);

  useEffect(() => {
    if(window.innerWidth < 1065) {
      setMobile(true);
    }
  })

  useEffect(() => {
    const handleSize = () => {
      if(window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
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
        <Link to="/" className="navbar-logo">
          <img src={ASG} alt="ASG" />
          {/* I do not own any rights to this image - content credited to https://asginc.us/ */}
        </Link>
        {!mobile && (
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/" className="nav-link"> {<Icons.FaDumbbell />}
                <span>Workouts</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">{<Icons.FaHeart />}
                <span>Create Fitness Log</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link">{<Icons.FaUser />}
                <span>New User</span>
              </Link>
            </li>
          </ul>
        )}
        {!mobile}

        {mobile && (
          <div className="sidebar-full">
            {sidebar ? <Icons.FaTimes className="sidebar-click" onClick={() => setSideBar(!sidebar)} /> : (<Icons.FaBars className="sidebar-click" onClick={() => setSideBar(!sidebar)} />)}
          </div>
        )}
      </nav>

      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          <li className="sidebar-item">
            <Link to="/" className="sidebar-link">{<Icons.FaDumbbell />}
              <span>Workouts</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/create" className="sidebar-link">{<Icons.FaHeart />}
              <span>Create Fitness Log</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/user" className="sidebar-link">{<Icons.FaUser />}
              <span>New User</span>
            </Link>
          </li>
        </ul>

      </div>
    </>
  );
}

export default Navbar;
