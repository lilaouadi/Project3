import React from 'react'
import { Link } from 'react-router-dom'

 function Navbar() {
    
        return (
            <div>


                <nav>

                    <div className="nav-wrapper black">
                    <a href="#" className="brand-logo center">MP list</a>
                    
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Rankings</a></li>
                        <li><a href="badges.html">Favorites</a></li>
                        <li><a href="collapsible.html">About</a></li>
                    </ul>
                    </div>
                </nav>

       
  
  
            </div>
        )
  
}

export default Navbar
