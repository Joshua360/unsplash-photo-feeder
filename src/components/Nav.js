import React, { Component } from 'react'
import { Link } from "react-router-dom";


const Nav = () => {
    return(
        <div className="nav">
           <ul className="navList">
               <li> <Link to="/about">About</Link></li>
                
                <li>
                <a target="_blank" href="https://www.unsplash.com/">
                    Visit unsplash
                </a>
                </li>
            </ul>
        </div>

    )
};

export default Nav;