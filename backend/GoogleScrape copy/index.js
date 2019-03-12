// const axios = require('axios');
// const cheerio = require('cheerio');


// const url = 'https://www.google.com/search?q=tangled&oq=tangled&aqs=chrome..69i57j69i61j69i59j69i60j69i61.1366j0j1&sourceid=chrome&ie=UTF-8';
// // const url ='https://news.ycombinator.com/';


function scraper(movie){



    const axios = require(`axios`);
    const cheerio = require(`cheerio`);


    const url = `https://www.google.com/search?q=${movie}`;

    const config = {
        headers: {
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',
        }
    };

    axios.get(url,config)
    .then(response=>{
        const $ = cheerio.load(response.data);
        // console.log($)
        const results = $('.phXTff').text()
        console.log(results)
        return results;
        // console.log(response.data);
    })
    .catch(error=>{
        console.log(error);
    })

//     Now we are getting back two different divs; we need to map through the divs to return a list of each.
}

module.exports = scraper;