// an action is a js function that returns an object, ALWAYS
// that object MUST have at least 1 property
// a property of type


import axios from 'axios';

export default (formData)=>{
    // console.log('title action ran!')
    // console.log(formData)
    const scraperPromise = axios({
        url: `${window.apiHost}/scraperResults`,
        method: 'POST',
        data: formData
    })

    return{
        type: 'TITLE_SEARCH',
        payload: scraperPromise
    }

}