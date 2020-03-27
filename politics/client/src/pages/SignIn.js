import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
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
                <div className="card-panel black white-text">
                <form onSubmit={this.handleSubmit} >
                  <h5 className="white-text center ">Sign In</h5>
                  <div className="input-field white-text">
                      <label htmlfor="email">Email</label>
                      <input className="white-text" type="email" id="email" onChange={this.handleChange}/>
                      </div>
                      <div className="input-field white-text">
                      <label htmlfor="password">Password</label>
                      <input className="white-text"  type="password" id="password" onChange={this.handleChange}/>
                      </div>
                       <div className="input-field">
                           <button className="btn-flat white-text lighten-1 z-depth-0">Login</button>
                           </div>  
                </form>
                </div>
            </div>
        )
    }
}

export default SignIn