const string = 'YouTubeFrom $2.99WatchAmazon Prime VideoFrom $2.99WatchVuduFrom $2.99WatchiTunesFrom $2.99WatchGoogle Play Movies & TVFrom $2.99WatchStarzSubscriptionWatch'

const splitStr = string.split("Watch")

// console.log(splitStr)
const finalStr = splitStr.map((index)=>{
    return index.replace("F", " F")
})

console.log(finalStr)