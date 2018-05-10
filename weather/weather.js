const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/e863c578c1fc96fc05f7b7690da35ed6/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
    else {
      callback('Unable to fetch weather');
    }
  });
}

module.exports.getWeather = getWeather;

// https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525294?start=1020
