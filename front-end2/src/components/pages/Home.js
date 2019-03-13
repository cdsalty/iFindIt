import React, { Component } from 'react';
import popMoviesAction from '../../actions/popMoviesAction';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import "../css/home.css";
import Poster from "../utilities/Poster";




class Home extends Component {
    constructor() {
        super()
        this.state = {
            popMovies: []
        }
    }

    componentDidMount() {
        // console.log("component mounted")
        this.props.popMoviesAction()
        // console.log(this.props)

    }

    componentWillReceiveProps(newProps) {
        // console.log(newProps)
        this.setState({

            popMovies: newProps.movie.map((movie, index) => {
                const imagePath = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
                return (
                    <div key={index} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center red">
                        <Poster key={index} imagePath={imagePath} title={movie.original_title} />
                    </div>
                    // <img key={index} src={imagePath} alt="movie poster"/>
                )
            })
        })
    }

    render() {
        //    console.log(this.props)
        return (
            <div className="home">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        {this.state.popMovies}
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        popMoviesAction: popMoviesAction
    }, dispatch)
}


function mapStateToProps(state) {
    return {
        movie: state.movie
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);