import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import popMoviesAction from '../../actions/popMoviesAction';
import { bindActionCreators} from 'redux'
import { connect } from "react-redux";
import "../css/home.css";
import Poster from "../utilities/posters";



class Home extends Component{
    constructor(){
        super()
        this.state = {
            popMovies: []
        }
    }

    componentDidMount(){
        // console.log("component mounted")
        this.props.popMoviesAction()
        // console.log(this.props)
        
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
        this.setState({

            popMovies: newProps.movie.map((movie, index)=>{
                const imagePath = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
                return(
                    <Poster key={index} imagePath={imagePath} title={movie.original_title} />
                    // <img key={index} src={imagePath} alt="movie poster"/>
                )
            })
        })
    }

    render(){
       
        return (
            <div className="home">
                <div className="logo-holder">
                    <img src="/images/logo.png" alt="logo"/>
                </div>
                <div className="button-holder">
                    <Link to="/login"><button className="button">Login</button></Link>
                    <Link to="/register"><button className="button">Register</button></Link>
                </div>
                <div className="poster-wrapper">
                    <div className="poster-holder">
                        {this.state.popMovies}
                    </div>
                </div>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        popMoviesAction: popMoviesAction
    },dispatch)
}


function mapStateToProps(state){
    return{
        movie : state.movie
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);