import React, { Component } from 'react'
import API from "../utils/API"
class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value  
        })
    }
    handleInputChange = event => {
        event.preventDefault();
        const {email,password,firstName,lastName} = this.state;
    API.saveUser({
        email,
        password,
        firstName,
        lastName,
    }).then(result => {
        console.log(result)
    })
}
    render() {
        return (
            <div className="container">
                    <div className="card-panel black">
                    <form action="/submit" method="post">
                  <h5 className="white-text center text-darken-3">Sign Up</h5>
                  <div className="input-field">
                      <label htmlfor="email">Email</label>
                      <input className="white-text"  type="email" name="email" id="email" onChange={this.handleChange}/>
                      </div>
                      <div className="input-field">
                      <label htmlfor="password">Password</label>
                      <input className="white-text"  type="password" name = "password" id="password" onChange={this.handleChange}/>
                      </div>
                      <div className="input-field">
                      <label htmlfor="firstName">First Name</label>
                      <input className="white-text"  type="text"  name="firstName" id="firstName" onChange={this.handleChange}/>
                      </div>
                      <div className="input-field">
                      <label htmlfor="lastName">Last Name</label>
                      <input className="white-text"  type="text" name="lastName" id="lastName" onChange={this.handleChange}/>
                      </div>
                       <div className="input-field">
                           <button onClick={this.handleInputChange} className="btn-flat white-text lighten-1 z-depth-0">Sign Up</button>
                           </div>  
                </form>
                </div>

            </div>
        )
    }
}

export default SignUp