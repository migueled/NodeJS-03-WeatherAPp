const geoCode = require( './utils/geocode' );
const forecast = require( './utils/forecast' );

const ubicacion = process.argv[2];

if( ubicacion ) {
    geoCode( ubicacion , ( error , dataGeoCode ) => {
        if ( error ) { return console.log( error ); }
        forecast( dataGeoCode.longitude , dataGeoCode.latitude , ( error , dataForeCast ) => {
            if ( error ) { return console.log( error ); }
            console.log( dataGeoCode.location );
            console.log( dataForeCast );
          });
    });
}
