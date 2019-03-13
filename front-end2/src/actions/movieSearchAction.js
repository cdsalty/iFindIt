// an action is a js function that returns an object, ALWAYS
// that object MUST have at least 1 property
// a property of type


import axios from 'axios';

export default (formData)=>{
    // console.log('movie Search action ran!')
    // console.log(formData)
    const moviePromise = axios({
        url: `http://localhost:3000/search`,
        method: 'POST',
        data: formData
    })
    // console.log(moviePromise)
    return{
        type: 'MOVIE_SEARCH',
        payload: moviePromise
    }

}