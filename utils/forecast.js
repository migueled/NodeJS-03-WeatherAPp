const request = require( 'request' );
const key = require( '../clave' );

const forecast = ( longitude , latitude, callback ) =>{
    const urlWeatherStack = `http://api.weatherstack.com/current?access_key=${ key.keyWeatherStack() }&query=${ latitude },${ longitude }&units=m`;

    request({ url : urlWeatherStack , json : true } , ( error , response ) => {
        if( error ){
            callback( 'Unable to connect to weather service' , undefined );
        } else if( response.body.error ) {
            callback( 'Unable to find location' , undefined );
        } else {
            callback( undefined , {
                temperature : response.body.current.temperature,
                feelslike : response.body.current.feelslike,
                weather_descriptions :response.body.current.weather_descriptions[0]
            } );
        }
    } );
};


module.exports = forecast;