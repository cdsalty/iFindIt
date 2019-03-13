import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

class Navbar extends Component {



    render() {
        return (
            <div className="navbar">
                <div className="logo-holder">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="button-holder">
                    <Link to="/login"><button className="button">Login</button></Link>
                    <Link to="/register"><button className="button">Register</button></Link>
                </div>
                <div className="search-bar">
                    <form onSubmit={this.movieSearchHandler}>
                        <input type="text" id="movieTitle" name="movieTitle" placeholder="Enter your movie search here" />
                    </form>
                </div>
            </div>
        )
    };
}
export default Navbar;
