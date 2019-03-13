import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

class Navbar extends Component {



    render() {

        return (

            <div className="container-fluid banner">
                <div className="d-md-none">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="loginHolder d-flex space-between">
                                <Link to="/login"><button className="button">Login</button></Link>
                                <Link to="/register"><button className="button">Register</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <Link to="/" >
                                <div className="logo-holder">
                                    <img src="/images/logo.png" alt="logo" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="search-bar d-flex justify-content-center red">
                                <form className="searchForm">
                                    <input type="text" className="search" name="movieTitle" placeholder="Enter a movie" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="d-none d-md-block positioner">
                    <div className="loginHolder d-flex space-between buttonHolder">
                        <Link to="/login"><button className="button">Login</button></Link>
                        <Link to="/register"><button className="button">Register</button></Link>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center m-3">
                            <Link to="/" >
                                <div className="logo-holder">
                                    <img src="/images/logo.png" alt="logo" />
                                </div>
                            </Link>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="search-bar red">
                                <form className="searchForm">
                                    <input type="text" name="movieTitle" placeholder="Enter a movie" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    };
}
export default Navbar;
