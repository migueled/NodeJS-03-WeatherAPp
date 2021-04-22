const request = require( 'request' );
const key = require( './clave' );

const urlWeatherStack = `http://api.weatherstack.com/current?access_key=${ key.keyWeatherStack() }&query=37.8267,-122.4233&units=m`;
const urlMapBox = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${ key.keyMapBox() }&limit=5`;

request({ url : urlWeatherStack , json : true } , ( error , response ) => {
    const temperature = response.body.current.temperature;
    const feelslike = response.body.current.feelslike;
    const weather_descriptions = response.body.current.weather_descriptions[0];
    console.log( `${ weather_descriptions } It is currently ${ temperature } out. It feels like ${ feelslike } degress out.` );
} );

request({ url : urlMapBox , json : true } , ( error , response ) => {
    const long = response.body.features[0].center[0];
    const lat = response.body.features[0].center[1];
    console.log( `Long: ${ long }, Lat: ${ lat }` );
} );