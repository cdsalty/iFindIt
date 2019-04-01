function resetScrapeReducer(state = null, action){
    if(action.type === "RESET_SCRAPE"){
        console.log("reset scrape ran")
        console.log(action.payload)
        return state
    }else{
        return state
    }
}

export default resetScrapeReducer;