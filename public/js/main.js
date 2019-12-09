// console.log("Javascript in the front end")

// const weatherForm = document.querySelector('form')
// const searchCity = document.querySelector('#searchCity') // inputs
// const searchCountry = document.querySelector('#searchCountry') //inputs

// const title = document.getElementById('title')
// const city   = document.getElementById('city')
// const country = document.getElementById('country')
// const temp  = document.getElementById('temp')
// const humidity = document.getElementById('humidity')
// const currentConditions = document.getElementById('currentConditions')

// weatherForm.addEventListener('submit', (e)=> {
//   e.preventDefault();

//   const cityIn = searchCity.value
//   const countryIn = searchCountry.value
//   title.textContent = 'Loading......'

//   fetch('http://localhost:3000/api?city=' + cityIn + '&country='+ countryIn).then((response) => {
//     response.json().then((data)=> {
//         console.log(data)
//         if (data.error) {
//           console.log(data.error);
//           title.textContent = data.error;
//           city.textContent = '';
//           country.textContent ='';
//           temp.textContent = '';
//           humidity.textContent ='';
//           currentConditions.textContent = "";
//       } else {
//           title.textContent = 'Current forecast for';
//           city.textContent = data.city;
//           country.textContent = data.country;
//           temp.textContent = 'Temp: ' + data.temp + 'c';
//           humidity.textContent = 'Humidity: ' + data.humidity + '%';
//           currentConditions.textContent = "Current Conditions:" + data.weather
//           console.log(data.city);
//           console.log(data.temp);
//     }
//   })
    
// })
// })
console.log("Javascript in the front end")

const weatherForm = document.querySelector('form')
const searchCity = document.querySelector('#searchCity') // inputs
const searchCountry = document.querySelector('#searchCountry') //inputs

const title = document.getElementById('title')
const city   = document.getElementById('city')
const country = document.getElementById('country')
const temp  = document.getElementById('temp')
const humidity = document.getElementById('humidity')
const currentConditions = document.getElementById('currentConditions')


weatherForm.addEventListener('submit', (e)=> {
  e.preventDefault();

  const cityIn = searchCity.value
  const countryIn = searchCountry.value
  title.textContent = 'Loading......'

  fetch('http://localhost:3000/api?city=' + cityIn + '&country='+ countryIn).then((response) => {
    response.json().then((data)=> {
        console.log(data)
        if (data.error) {
          console.log(data.error);
          title.textContent = data.error;
          city.textContent = '';
          country.textContent ='';
          temp.textContent = '';
          humidity.textContent ='';
          currentConditions.textContent = "";
      } else {
          title.textContent = 'Current forecast for';
          
          city.textContent = 'City: ' + data.city;
          country.textContent = 'Country: '+ data.country;
          temp.textContent = 'Temp: ' + data.temp + 'c';
          humidity.textContent = 'Humidity: ' + data.humidity + '%';
          currentConditions.textContent = "Current Conditions: " + data.weather
          console.log(data.city);
          console.log(data.temp);
    }
  })
    
})
})