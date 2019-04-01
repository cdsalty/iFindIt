import React, { Component } from 'react';
import { connect } from 'react-redux';
import Services from '../utilities/Services';
import '../css/search.css';


class ScraperResults extends Component {

    render() {
        console.log(this.props.title)

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
            console.log(this.props.title.results.length)
            let services = null
            if (this.props.title.results.length === 0) {
                return (
                    <div className="movieSearch container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center mt-5">
                                <div key="noResults">
                                    <p>I'm sorry that movie isn't playing anywhere at the moment. Please try again later.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                )

            } else {
                services = this.props.title.results.map((service, index) => {
                    return (
                        <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                            <Services key={index} service={service} />
                        </div>

                    )
                })
            }
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