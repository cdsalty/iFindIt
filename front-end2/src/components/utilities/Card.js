import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component{

    titleSearch = ()=>{
        const scrapeQuery = `${this.props.title} ${this.props.releaseDate}`
        console.log(scrapeQuery)
    }

    render(){
        return(
            <div>
                
                <img src={this.props.imagePath} alt={this.props.title + ' movie poster'}/>
                <h1>{this.props.title}</h1>
                <button onClick={this.titleSearch}>Where's it playing?</button>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state.movie)
    return {
        movie: state.movie
    }
}


export default connect(mapStateToProps)(Card);