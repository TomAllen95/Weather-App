const hbs = require('hbs');
const path = require('path')
const express = require('express');
const fs = require('fs');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials')
const getWeather = require('./getWeather')
hbs.registerPartials(partialPath);
const app = express();

const publicDirectory = path.join(__dirname, '../public'); // where you want the static html files to come from
app.use(express.static(publicDirectory)); // how you can access the public directory

app.set('view engine', 'hbs'); //allows youy to use the handlebars template
app.set('views', viewsPath);

app.get('/weather', (req, res)=> {
    res.render('weather'
    , {
        // city: weatherData.name,
        // country: weatherData.sys.country,
        // temp: weatherData.main.temp,
        // humidity: weatherData.main.humidity,
        // weather: weatherData.weather[0].main
    }
    )
}
)
app.get('/api', (req, res)=>{ 
    
    console.log(req.query);
    if(!req.query.city){
        res.send({
            error: "please enter a city name"
        })
    }else{
        getWeather(req.query.city, req.query.country, (response) => {
            if(response.error){
                res.send({
                    error: response.error
                })
            }else{
                res.send({ // how to create an api
                    city: response.name,
                    country: response.sys.country,
                    temp: response.main.temp,
                    humidity: response.main.humidity,
                    weather: response.weather[0].description
                })
            }
        })
    
    }
})

app.get('*', (req, res) => {
    res.send('<h1>404 your page does not exist</h1>')
});
app.listen(3000, () => {
    console.log('server is running ')
})