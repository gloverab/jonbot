const unirest = require("unirest")
const { NFL_KEY } = require('./keys.js')

exports.apiCall = (type, url) => new Promise((resolve, reject) => {
  var req = unirest.get(`https://therundown-therundown-v1.p.rapidapi.com/sports/2/${url}`)

  req.query({
    "include": [
      "all_periods",
      "scores"
    ],
    "offset": "240"
  })

  req.headers({
    "x-rapidapi-host": "therundown-therundown-v1.p.rapidapi.com",
    "x-rapidapi-key": NFL_KEY,
    "useQueryString": true
  });
  
  
  req.end(function (res) {
    console.log(res.error)
    if (res.error) {
      let message = `Error with status of ${res.error.status}`
      if (res.error.status === 429) {
        message = `Welp, looks like we've reached our request limit for today. Ask again tomorrow.`
      }
      reject(message)
      // throw new Error(res.error)
    }
  
    resolve(res.body)
  })
})