import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

class Navbar extends Component {



    render() {

        return (
            <div className="container-fluid banner">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                            <div className="logo-holder">
                                <img src="/images/logo.png" alt="logo" />
                            </div>
                        <div className="button-holder ml-auto">
                            <Link to="/login"><button className="button">Login</button></Link>
                            <Link to="/register"><button className="button">Register</button></Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="search-bar">
                            <form>
                                <input type="text" id="movieTitle" name="movieTitle" placeholder="Enter your movie search here" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    };
}
export default Navbar;
