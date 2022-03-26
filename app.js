const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const address = process.argv[2]
const unit = process.argv[3]
require('dotenv').config()
const fs = require('fs')


if(!address){
    console.log('No address provided');
} else if(!unit){
    console.log('Specify a Unit (c) or (f)');
}else{
    geocode(address, (error, data) =>{
        if(error){
            return console.log(error)
        } 
    
        forecast(data.Latitude, data.Longitude, (error, forecastData) =>{
            let forecastDataUnit
            let message
            if(error){
                return console.log(error)
            }
            if(unit == 'f'){
                forecastDataUnit = 1.8*(forecastData-273) + 32
                 message = `Weather today in ${data.Location} is ${forecastDataUnit.toFixed(2)} degrees Farenheit`; 
            } else if(unit == 'c'){
                forecastDataUnit = forecastData - 273.15 
                message = `Weather today in ${data.Location} is ${forecastDataUnit.toFixed(2)} degrees Celcius`;
            }
            fs.appendFileSync('log.txt', '\n' + message)
            console.log(message)
         })
        
    })
}

