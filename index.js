console.log( 'Starting' );
const valor =0;
setTimeout(
    () => console.log( '2 Second Timer' )
, 2000 );

setTimeout(
    () => {console.log( '3 Second Timer' ); this.valor =2;}
, 3000 );

setTimeout(
    () => {
        console.log( '0 Second Timer');
        setTimeout(()=> console.log('4 Second timer'),1500);
} 
, 0 );

console.log( 'Stopping ' + valor );

setTimeout(
    () => console.log( '1 Second Timer' )
, 1000 );