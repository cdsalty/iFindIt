import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class MovieSearch extends Component {
    render() {
        return (
            <form action="/search/movie" method="post">
                <input type="text" name="movieTitle" placeholder="Enter your movie search here"/>
                <input type ="submit" class="btn btn-primary" value = "Search"/>
            </form>
        )
    }
}

export default MovieSearch;