// an action is a js function that returns an object, ALWAYS
// that object MUST have at least 1 property
// a property of type


import axios from 'axios';

export default (formData)=>{
    console.log('login action ran!')
    console.log(formData)
    const loginPromise = axios({
        url: `http://localhost:3000/login`,
        method: 'POST',
        data: formData
    })

    return{
        type: 'LOGIN_ACTION',
        payload: loginPromise
    }

}