import axios from 'axios';

export default ()=>{
    console.log('popMoviesAction ran!')
    const loginPromise = axios({
        url: `http://localhost:3000/getPopMovies`,
        method: 'GET'
    })
    console.log(loginPromise)

    return{
        type: 'POP_MOVIE',
        payload: loginPromise
    }

}