

// This is a reducer.
// To make a reducer:
// 1. make a function that has 2 params:
//     - state (usually set a default)
//     - action
// 2. The state param comtians THIS reducers state. Just like a variable.
// 3. The action param will contain whatever the object the dispatched action sent us
//     - type (REQUIRED)
//     - payload (data/JSON/stuff)
// 4. Check the action.type to see if I care.
// 4a. If I care, return some new state
// 4b. If I don't care, return state (old state)
// when dispatcher runs this function, you HAVE to return something even if no change

function movieReducer(state = null, action){
    if(action.type === "POP_MOVIE"){
        // do stuff
        // console.log(action.payload.data)
        return action.payload.data;
    }else if(action.type === 'MOVIE_SEARCH'){
        console.log(action.payload.data)
        console.log("movie_search reducer hit")
        return action.payload.data;
    }else{
        return state
    }
}

export default movieReducer;