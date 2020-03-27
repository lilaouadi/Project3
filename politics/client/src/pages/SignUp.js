import React, { Component } from 'react'

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
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                  <h5 className="white-text center text-darken-3">Sign Up</h5>
                  <div className="input-field">
                      <label htmlfor="email">Email</label>
                      <input type="email" id="email" onChange={this.handleChange}/>
                      </div>
                      <div className="input-field">
                      <label htmlfor="password">Password</label>
                      <input type="password" id="password" onChange={this.handleChange}/>
                      </div>
                      <div className="input-field">
                      <label htmlfor="firstName">First Name</label>
                      <input type="text" id="firstName" onChange={this.handleChange}/>
                      </div>
                      <div className="input-field">
                      <label htmlfor="lastName">Last Name</label>
                      <input type="text" id="lastName" onChange={this.handleChange}/>
                      </div>
                       <div className="input-field">
                           <button className="btn-flat white-text lighten-1 z-depth-0">Sign Up</button>
                           </div>  
                </form>

            </div>
        )
    }
}

export default SignUp