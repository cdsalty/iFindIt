import React, { Component } from 'react';
import Axios from 'axios';

class MovieSearch extends Component {
    movieSearchHandler = (event)=>{
        event.preventDefault();
        const movieTitle = document.getElementById("movieTitle").value
        console.log(movieTitle);
        const movieSearchPromise =  axios({
            method: 'GET',
            url: 'http://localhost:3000/'

        })
    }
    render() {
        return (
            <form onSubmit={this.movieSearchHandler}>
                <input type="text" id="movieTitle" name="movieTitle" placeholder="Enter your movie search here"/>
                <input type ="submit" value = "Search"/>
            </form>
        )
    }
}

export default MovieSearch;