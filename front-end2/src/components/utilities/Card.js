import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import titleSearchAction from '../../actions/titleSearchAction';

class Card extends Component{

    titleSearch = ()=>{
        const scrapeQuery = `${this.props.title} movie`
        console.log(scrapeQuery)
        this.props.titleSearchAction({
            scrapeQuery
        })
        this.props.reroute()

    }

    render(){
        // console.log(this.props)
        return(
            <div className="card">
                <img src={this.props.imagePath} alt={this.props.title + ' movie poster'}/>
                <p>{this.props.title}</p>
                <button onClick={this.titleSearch}>Where's it playing?</button>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        titleSearchAction: titleSearchAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Card);
