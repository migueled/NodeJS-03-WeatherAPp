const geoCode = require( './utils/geocode' );
const forecast = require( './utils/forecast' );

const ubicacion = process.argv[2];

if( ubicacion ) {
    geoCode( ubicacion , ( error , { latitude , longitude , location } = {} ) => {
        if ( error ) { return console.log( error ); }
        forecast( longitude , latitude , ( error , dataForeCast ) => {
            if ( error ) { return console.log( error ); }
            console.log( location );
            console.log( dataForeCast );
          });
    });
}
