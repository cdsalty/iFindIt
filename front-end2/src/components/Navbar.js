import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import movieSearchAction from '../actions/movieSearchAction';

class Navbar extends Component {

    movieSearchHandler = (event) => {
        event.preventDefault();
        const movieTitle = document.getElementById("smallSearch").value
        // console.log(movieTitle)
        this.props.movieSearchAction({
            movieTitle
        })
        this.props.history.push('/search');


    }
    movieSearchHandler2 = (event) => {
        event.preventDefault();
        const movieTitle = document.getElementById("medSearch").value
        // console.log(movieTitle)
        this.props.movieSearchAction({
            movieTitle
        })

        this.props.history.push('/search');
    }

    render() {

        return (

            <div className="container-fluid banner">
                <div className="d-md-none">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="loginHolder d-flex space-between">
                                <Link to="/login"><button className="button2">Login</button></Link>
                                <Link to="/register"><button className="button2">Register</button></Link>
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
                            <div className="search-bar red">
                                <form className="searchForm" onSubmit={this.movieSearchHandler}>
                                    <input type="text" className="search" id="smallSearch" name="movieTitle" placeholder="Enter a movie" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="d-none d-md-block positioner">
                    <div className="loginHolder d-flex space-between buttonHolder">
                        <Link to="/login"><button className="button2">Login</button></Link>
                        <Link to="/register"><button className="button2">Register</button></Link>
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
                                <form className="searchForm" onSubmit={this.movieSearchHandler2}>
                                    <input type="text" id="medSearch" name="movieTitle" placeholder="Enter a movie" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        movieSearchAction: movieSearchAction
    },dispatch)
};


export default connect(null,mapDispatchToProps)(Navbar);
