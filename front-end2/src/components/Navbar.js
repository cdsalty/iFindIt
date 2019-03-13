import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

class Navbar extends Component {



    render() {
        return (
            <nav className="navbar-nav">
                <div className="myContainer">
                    <div className="row">
                        <div className="Search">
                            <div className="search-bar">
                                <form onSubmit={this.movieSearchHandler}>
                                    <input type="text" id="movieTitle" name="movieTitle" placeholder="Enter your movie search here" />
                                </form>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="logo-holder">
                            <img src="/images/logo.png" alt="logo" />
                        </div>
                        </div>
                        <div className="row">
                        <div className="loginHolder">
                            <div className="login-holder">
                                <Link to="/login"><button className="button">Login</button></Link>
                            </div>
                            <div className="registerHolder">
                                <Link to="/register"><button className="button">Register</button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>

        )
    };
}
export default Navbar;
