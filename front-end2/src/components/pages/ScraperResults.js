import React, { Component } from 'react';
import { connect } from 'react-redux';
import Services from '../utilities/Services';
import '../css/search.css';


class ScraperResults extends Component {

    render() {

        if (this.props.title === null) {
            return (


                <div className="movieSearch">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center mt-5">
                                <img src="/images/Rolling-1s-200px.gif" alt="loading gif" />
                            </div>
                        </div>
                    </div>
                </div>

            )
        } else {
            const services = this.props.title.results.map((service, index) => {
                if (service === "" | undefined | null) {
                    return ("")

                } else {
                    return (
                        <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                            <Services key={index} service={service} />
                        </div>



                    )
                }
            })
            return (
                
                    <div className="movieSearch container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center mt-5">
                                <div className="row">
                                    {services}
                                </div>
                            </div>
                        </div>
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