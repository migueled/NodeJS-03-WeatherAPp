const request = require( 'request' );
//--
const geoCode = require( './utils/geocode' );
/*const urlWeatherStack = `http://api.weatherstack.com/current?access_key=${ key.keyWeatherStack() }&query=37.8267,-122.4233&units=m`;
const urlMapBox = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${ key.keyMapBox() }&limit=5`;

request({ url : urlWeatherStack , json : true } , ( error , response ) => {
    if( error ){
        console.log('Unable to connect to weather service');
    } else if( response.body.error ) {
        console.log('Unable to find location');
    } else {
        const temperature = response.body.current.temperature;
        const feelslike = response.body.current.feelslike;
        const weather_descriptions = response.body.current.weather_descriptions[0];
        console.log( `${ weather_descriptions } It is currently ${ temperature } out. It feels like ${ feelslike } degress out.` );
    }
} );

request({ url : urlMapBox , json : true } , ( error , response ) => {
    if( error ){
        console.log('Unable to connect to weather service');
    } else if( response.body.message ) {
        console.log('Not Found location');
    } else {
        const long = response.body.features[0].center[0];
        const lat = response.body.features[0].center[1];
        console.log( `Long: ${ long }, Lat: ${ lat }` );
    }
} );
------------------------*/

//const urlWeatherStack = `http://api.weatherstack.com/current?access_key=${ key.keyWeatherStack() }&query=37.8267,-122.4233&units=m`;



geoCode( 'boston' , ( error , data ) => {
    console.log( 'Error' , error );
    console.log( 'data' , data );
});
