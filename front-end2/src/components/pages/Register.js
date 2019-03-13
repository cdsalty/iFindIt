import React, { Component } from 'react';
import registerAction from '../../actions/registerAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert-react';
import "sweetalert/dist/sweetalert.css";


class Register extends Component {
    constructor(){
        super()
        this.state = {
            showAlert: false,
            title: '',
            text: "", 
        }
    }

    registerHandler = (e)=>{
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        this.props.registerAction({
            email,
            password
        });
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
        if(newProps.auth.message === "emailTaken"){
            this.setState({
                showAlert: true,
                title: 'Email taken!',
                text: "This email is already in our system.", 
            })
        }else if(newProps.auth.message === "regSuccess"){
            this.props.history.push('/search')
        }
    }
    

    render() {
        // console.log(this.props)
        return (
            <div>
                <SweetAlert
                    show={this.state.showAlert}
                    title={this.state.title}
                    text={this.state.text}
                    onConfirm={() => this.setState({ showAlert: false })}
                />
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
function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        registerAction: registerAction
    },dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);
