// an action is a js function that returns an object, ALWAYS
// that object MUST have at least 1 property
// a property of type


import axios from 'axios';

export default (formData)=>{
    console.log('register action ran!')
    console.log(formData)
    const registerPromise = axios({
        url: `${window.apiHost}register`,
        method: 'POST',
        data: formData
    })

    return{
        type: 'REGISTER_ACTION',
        payload: registerPromise
    }

}