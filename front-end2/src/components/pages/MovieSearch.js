import React, { Component } from 'react';
// import Axios from 'axios';
import { bindActionCreators } from 'redux';
import movieSearchAction from '../../actions/movieSearchAction';
import { connect } from 'react-redux';
import Card from '../utilities/Card';
import '../css/search.css';


class MovieSearch extends Component {


    rerouteHandler = () => {
        this.props.history.push('/search_results')
    }


    render() {
        // console.log(this.props)
        // return(
        //     <h1>AHHH</h1>
        // )

        if (this.props.search === null) {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center mt-5">
                                <h1>Search for a movie!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            // console.log(this.props.movie.results)
            // return(
            //     <h1>asfsdfs</h1>
            // )
            // }
            // console.log(this.props.search.results)
            const movieSearch = this.props.search.results.map((movie, index) => {
                const imagePath = `http://image.tmdb.org/t/p/w300${movie.poster_path}`
                return (
                    <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                        <Card key={index} imagePath={imagePath} releaseDate={movie.release_date} title={movie.title} reroute={this.rerouteHandler} />
                    </div>
                )
            })
            return (
                <div className="movieSearch container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row d-flex justify-content-center">
                                {movieSearch}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}



function mapStateToProps(state) {
    console.log(state.search)
    return {
        search: state.search
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        movieSearchAction: movieSearchAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);