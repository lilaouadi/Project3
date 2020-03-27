import React from 'react'
import {Icon} from 'react-materialize';



 function Navbar() {
    
        return (
            <div>


                <nav>

                    <div className="nav-wrapper black">
                    <a href="/" className="brand-logo center">MP list</a>
                    
                    <ul id="nav-mobile" className="right hide-on-med-and-down white-text">
                      
                        <li><a href="collapsible.html">About</a></li>
                        <li><a href="/">Details</a></li>
                        
                        
                    </ul>
                   
                    <ul id="nav-mobile" className="left hide-on-med-and-down white-text">
                      
                     
                      <li><a href="/SignUP"><Icon small className="left">add</Icon>Sign Up</a></li>
                      <li><a href="/SignIn">Sign In<Icon small className='left'>account_circle</Icon></a></li>
                      
                  </ul>
                  </div>
                </nav>

       
  
  
            </div>
        )
  
}

export default Navbar
