const request=require('request')
//const proxy='http://edcguest:edcguest@172.31.100.27:3128'

const geocode=(address,callback) => {
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXl1c2gwOTI3IiwiYSI6ImNrNXRpZjh3ZzBpeHAzbnJ6cWVjenZreTcifQ.Pwux2bebatErUyWrFwnH_w'                                                                    
    request({url:url, json:true},(error,response) => {
        if(error) {
            callback('Unable to connect to location services',undefined)
        } else if(response.body.features.length===0) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }

    })
}

module.exports=geocode