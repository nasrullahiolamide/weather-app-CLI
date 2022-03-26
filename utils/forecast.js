const request = require('request')
const myUnit = process.argv[3]

const forecast = (lat, long, callback) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(long)}&appid=${process.env.WEATHER_API_KEY}&units=standard`
    request({url:url, json: true}, (error, response) =>{
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if( response.body.cod != 200){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,  response.body.main.temp)
        }
    })
}  



module.exports = forecast 