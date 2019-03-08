import React, { Component } from 'react';


class Login extends Component {

    
    render() {
        const styles = {
            form: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
        return (
            <div>
                <form>
                    <fieldset style={styles.form}>
                        <label>Email</label>
                        <input type="email" />
                        <label>password</label>
                        <input type="password" />
                    </fieldset>
                </form>
            </div>
        )
    }
}




export default Login;
