import React, { Component } from 'react';
import registerAction from '../../actions/registerAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert-react';
import "sweetalert/dist/sweetalert.css";
import '../css/login.css';



class Register extends Component {
    constructor() {
        super()
        this.state = {
            showAlert: false,
            title: '',
            text: "",
        }
    }

    registerHandler = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        this.props.registerAction({
            email,
            password
        });
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        if (newProps.auth.message === "emailTaken") {
            this.setState({
                showAlert: true,
                title: 'Email taken!',
                text: "This email is already in our system.",
            })
        } else if (newProps.auth.message === "regSuccess") {
            this.props.history.push('/search')
        }
    }


    render() {
        // console.log(this.props)
        return (
            <div className="login">
                <SweetAlert
                    show={this.state.showAlert}
                    title={this.state.title}
                    text={this.state.text}
                    onConfirm={() => this.setState({ showAlert: false })}
                />
                <div className="container">
                    <div className="row ">
                        <div className="col-12 d-flex justify-content-center">
                            <form className="loginForm" onSubmit={this.registerHandler}>
                                <fieldset>
                                    <label><h1>Register</h1></label>
                                    <div>
                                        <label><p>Email:</p></label>
                                        <input type="email" name="email" id="email" />
                                    </div>
                                    <div>
                                        <label><p>Password:</p></label>
                                        <input type="password" name="password" id="password" />
                                    </div>
                                    <button className="button2">Register</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        registerAction: registerAction
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);
