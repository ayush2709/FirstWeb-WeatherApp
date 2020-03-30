const request=require('request')
//const proxy='http://edcguest:edcguest@172.31.100.27:3128'

const forecast=(latitude,longitude,callback) => {
    const url='https://api.darksky.net/forecast/7127444ad11503b76b0c948dac8dff10/'+latitude+','+longitude
    request({url, json:true}, (error,response) => {
        if(error) {
            callback('Unable to connect to weather services',undefined)
        } else if(response.body.error) {
            callback('Unable to fetch location',undefined)
        } else {
            callback(undefined,response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports=forecast