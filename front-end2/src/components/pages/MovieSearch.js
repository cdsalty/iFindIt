import React, { Component } from 'react';

class MovieSearch extends Component {
    movieSearchHandler = (event)=>{
        event.preventDefault();
        const movieTitle = document.getElementById("movieTitle").value
        console.log(movieTitle);
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