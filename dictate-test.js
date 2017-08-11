
const assert = require( "assert" );
const dictate = require( "./dictate.js" );

assert.deepEqual( dictate( [ 1, 2, 3, 4, 5 ], [ 5, 4, 3, 2, 1 ] ),
	[ 5, 4, 3, 2, 1 ], "should be equal to [ 5, 4, 3, 2, 1 ]" );

console.log( "ok" );
