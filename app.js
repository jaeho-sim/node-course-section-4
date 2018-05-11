const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  }
  else {
    console.log(results.address);
    weather.getWeather(43.66721090000001,-79.3891532, (errorMessage, weatherResults) => {
      if(errorMessage) {
        console.log(errorMessage);
      }
      else {
        console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});
