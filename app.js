const request = require('request');
const argv = require('yargs').argv;

let city = argv.city || 'London';

let apiKey = 'your key here';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url, function (error, response, body) {
  if(error){
    console.log('error :',error);
  }
  else {
    let weather = JSON.parse(body);
    console.log(`It's ${weather.main.temp} degrees in ${weather.name}!`);
  }
});
