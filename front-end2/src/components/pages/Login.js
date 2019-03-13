import React, { Component } from 'react';
import loginAction from '../../actions/loginAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert-react';
import "sweetalert/dist/sweetalert.css";



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

    componentWillReceiveProps(newProps){
        console.log(newProps)
        if(newProps.auth.message === "invalidUser"){
            this.setState({
                showAlert: true,
                title: 'No User',
                text: "This email is not in our system.", 
            })
        }else if(newProps.auth.message === "wrongPassword"){
            this.setState({
                showAlert: true,
                title: 'Wrong Password',
                text: "The password you have entered is incorrect.", 
            })
        }else if(newProps.auth.message === "welcome"){
            this.props.history.push('/search')
        }
    }


    render() {

        return (
            <div>
                <SweetAlert
                    show={this.state.showAlert}
                    title={this.state.title}
                    text={this.state.text}
                    onConfirm={() => this.setState({ showAlert: false })}
                />

                <form onSubmit={this.loginHandler}>
                    <fieldset>
                        <label>Login</label>
                        <div>
                            <label>Email: </label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <button>Submit!</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loginAction: loginAction
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);