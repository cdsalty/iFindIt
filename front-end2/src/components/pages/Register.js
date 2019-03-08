import React, { Component } from 'react';
import registerAction from '../../actions/registerAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Register extends Component {

    registerHandler = (e)=>{
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        this.props.registerAction({
            email,
            password
        });
    }
    

    render() {

        return (
            <div>
                <form onSubmit={this.registerHandler}>
                    <fieldset>
                        <label>Register</label>
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
        registerAction: registerAction
    },dispatch)
}


export default connect(null, mapDispatchToProps)(Register);
