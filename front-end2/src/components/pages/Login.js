import React, { Component } from 'react';
import loginAction from '../../actions/loginAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert-react';
import "sweetalert/dist/sweetalert.css";
import '../css/login.css';




class Login extends Component {
    constructor() {
        super()
        this.state = {
            showAlert: false,
            title: '',
            text: "",
        }
    }

    loginHandler = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        this.props.loginAction({
            email,
            password
        });
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        if (newProps.auth.message === "invalidUser") {
            this.setState({
                showAlert: true,
                title: 'No User',
                text: "This email is not in our system.",
            })
        } else if (newProps.auth.message === "wrongPassword") {
            this.setState({
                showAlert: true,
                title: 'Wrong Password',
                text: "The password you have entered is incorrect.",
            })
        } else if (newProps.auth.message === "welcome") {
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
                            <form className="loginForm" onSubmit={this.loginHandler}>
                                <fieldset>
                                    <label><h1>Login</h1></label>
                                    <div>
                                        <label><p>Email:</p></label>
                                        <input type="email" name="email" id="email" />
                                    </div>
                                    <div>
                                        <label><p>Password: </p></label>
                                        <input type="password" name="password" id="password"/>
                                    </div>
                                    <button className="button2">Login</button>
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
        loginAction: loginAction
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);