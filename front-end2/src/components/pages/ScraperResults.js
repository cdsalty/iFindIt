import React, { Component } from 'react';
import { connect } from 'react-redux';
import Services from '../utilities/Services';

class ScraperResults extends Component{

    render(){
        // console.log(this.props.search)
        // console.log(typeof this.props.search)
        if(this.props.search === null){
            return(
                <h1>Loading please wait</h1>
            )
        }else{
            const services = this.props.search.results.map((service, index)=>{
                console.log(typeof service)
                // console.log(Array.isArray(this.props.search))
                if(service === "" | undefined | null){
                    return("")

                }else{
                    return(
                        <h1>
                            <Services key={index} service={service} />
                        </h1>
                    )
                }
            })
            console.log(typeof services)
            return(
                // <h1>sanity check</h1>
                <div>
                    {services}
                </div>
            )
        }
    }
}


function mapStateToProps(state){
    return{
        search: state.search
    }
}

export default connect(mapStateToProps)(ScraperResults);