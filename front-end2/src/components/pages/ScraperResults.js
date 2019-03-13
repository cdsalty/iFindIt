import React, { Component } from 'react';
import { connect } from 'react-redux';
import Services from '../utilities/Services';


class ScraperResults extends Component {

    render() {
        
        if (this.props.title === null) {
            return (
                <div>
                    
                    <h1>Loading please wait</h1>
                </div>
            )
        } else {
            const services = this.props.title.results.map((service, index) => {
                if (service === "" | undefined | null) {
                    return ("")

                } else {
                    return (
                        <div>
                            
                            <h1>
                                <Services key={index} service={service} />
                            </h1>
                        </div>
                    )
                }
            })
            return (
                <div>
                    {services}
                </div>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        title: state.title
    }
}

export default connect(mapStateToProps)(ScraperResults);