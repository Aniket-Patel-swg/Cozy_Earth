import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';
 
function Footer(){
    return(
        <div className="Footer">
            <h1 id="Footer-intro">
                Cozy Earth <i className='fab fa-typo3'/> 
            </h1>
           <p className="Copyright">
                Copyright : &copy; 2022 Cozy Earth 
           </p>
           <div className="Last-elements">
                {/* <p ld="Last-links">Credits</p>
                <p ld="Last-links">How it works?</p>
                <p ld="Last-links">Blogs </p> */}
                <p>
                    <Link to = '/Credits' id="Last-links">Credits</Link>
                </p>
                <p>
                    <Link to = '/Explore' id="Last-links">How it works?</Link>
                </p>
                <p>
                    <Link to = '/Cards' id="Last-links">Blogs</Link>
                </p>
           </div>
           
        </div>
    )
}

export default Footer;