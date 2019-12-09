require('dotenv').config();

const request =require('request');
const {promisify} = require('util');
const fs = require('fs');

const getWeather = async (city, country, callBack) =>{

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${process.env.APPID}`
    
    request({url: weatherUrl, json: true},(error, response) =>{
        if (error){
            console.log('Cannot connect to API services')
        }else if (response.body.name === undefined){
            console.log(`This city doesn't exist `);
            callBack({
                error: "this city doesn't exist"
            });
        }else{
            console.log(response.body.weather[0].main)
            callBack(response.body)
    }});
}

module.exports = getWeather; // node - allows us to use the function in other places

