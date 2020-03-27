import React from 'react'
import {Icon,Dropdown,Button,Divider} from 'react-materialize';



 function Navbar() {
    
        return (
            <div>


                <nav>

                    <div className="nav-wrapper black">
                      
                    <Dropdown className="black " id="Dropdown-5" trigger={<Button className="btn-flat white-text hide-on-med-and-up " node="button"><Icon small className="left">dehaze</Icon></Button>}>
                        <a href="/SignUP"><Icon small className="left">add</Icon>Sign Up</a>
                        <a href="/SignIn"><Icon small className='left'>account_circle</Icon>Sign In</a>         
                        <a href="/">Details</a>
                        <a href="/">About</a>
                    </Dropdown>
                   
                    <a href="/" className="brand-logo center">MP list</a>
                      <ul id="nav-mobile" className="right hide-on-med-and-down white-text">
                      
                        <li><a href="/">Details</a></li>
                        <li><a href="collapsible.html">About</a></li>
                       
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
