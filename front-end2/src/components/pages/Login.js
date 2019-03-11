import React, { Component } from 'react';
import loginAction from '../../actions/loginAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Login extends Component {

    loginHandler = (e)=>{
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        this.props.loginAction({
            email,
            password
        });
    }
    

    render() {

        return (
            <div>
                <form onSubmit={this.loginHandler}>
                    <fieldset>
                        <label>Login</label>
                        <div>
                            <label>Email: </label>
                            <input type="email" name="email" id="email"/>
                        </div>
                        <div>
                            <label>Password: </label>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <button>Submit!</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        loginAction: loginAction
    },dispatch)
}


export default connect(null, mapDispatchToProps)(Login);