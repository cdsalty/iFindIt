// const axios = require('axios');
// const cheerio = require('cheerio');


// const url = 'https://www.google.com/search?q=tangled&oq=tangled&aqs=chrome..69i57j69i61j69i59j69i60j69i61.1366j0j1&sourceid=chrome&ie=UTF-8';
// // const url ='https://news.ycombinator.com/';


function scraper(movie) {
    const axios = require(`axios`);
    const cheerio = require(`cheerio`);
    const url = `https://www.google.com/search?q=${movie}`;
    const config = {
        headers: {
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',
        }
    };
<<<<<<< HEAD
    return new Promise((resolve, reject) => {
        axios.get(url, config)
            .then(response => {
                const $ = cheerio.load(response.data, {
                    normalizeWhitespace: true,
                    // xmlMode: true
                });


                const results = $('.phXTff').parent().text()

                const splitArray = results.split("Watch")

                // console.log(splitStr)
                const finalArray = splitArray.map((index) => {
                    return index.replace("F", " F")
                })

                console.log(finalArray)

                resolve(finalArray);
                // console.log(response.data);
            })
            .catch(error => {
                console.log(error);
                reject(error)
            })
=======
    return new Promise((resolve, reject)=>{
        axios.get(url,config)
        .then(response=>{
            const $ = cheerio.load(response.data);
            // console.log($)
            const results = $('.phXTff').text();
            // console.log(results)
            // console.log("results " + results)
            resolve(results);
            // console.log(response.data);
        })
        .catch(error=>{
            console.log(error);
            reject(error)
        })
>>>>>>> a53a8eb5e9ba7c0437532f2713f96004c522d7c0
        // console.log(results)
    })
}


// scraper("tangled")

module.exports = scraper;