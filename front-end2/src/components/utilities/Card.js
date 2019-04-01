import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import titleSearchAction from '../../actions/titleSearchAction';
import resetScrapeAction from '../../actions/resetScrapeAction';

class Card extends Component{

    titleSearch = ()=>{
        const scrapeQuery = `${this.props.title} movie`
        // console.log(scrapeQuery)
        this.props.resetScrapeAction()
        this.props.titleSearchAction({
            scrapeQuery
        })
        this.props.reroute()

    }

    render(){
        // console.log(this.props)
        return(
            <div className="card">
                <button className="button" onClick={this.titleSearch}>Where's it playing?</button>
                <img src={this.props.imagePath} alt={this.props.title + ' movie poster'}/>
                <p>{this.props.title}</p>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        titleSearchAction: titleSearchAction,
        resetScrapeAction: resetScrapeAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Card);
