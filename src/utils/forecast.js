const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6f448357a4dc32d719fa7a1ee8e28144/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude);
    request ({ url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to location services', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. The current uvIndex are : ' + body.currently.uvIndex)
        }
    })
}

module.exports = forecast;