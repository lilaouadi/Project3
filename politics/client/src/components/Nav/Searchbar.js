import React, { Component } from 'react'

export class Searchbar extends Component {
    render() {
        return (
            <div>
            <nav>
                <div className="nav-wrapper">
                <form>
                    <div className="input-field black">
                    <input id="search" type="search" required/>
                    <label className="label-icon" for="search"><i className="material-icons">search</i>
                    </label>
                    <i className="material-icons">close</i>
                    </div>
                </form>
                </div>
            </nav>
            </div>
        )
    }
}

export default Searchbar
