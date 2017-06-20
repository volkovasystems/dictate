
const assert = require( "assert" );
const dictate = require( "./dictate.js" );

assert.equal( Array.isArray( dictate( [ Array, Object, RegExp, Date ], { "RegExp": 0, "Array": 1, "Object": 2 } ) ),
				true, "should return true" );

assert.deepEqual( dictate( [ 1, 2, 3, 4, 5 ], [ 5, 4, 3, 2, 1 ] ),
					[ 5, 4, 3, 2, 1 ], "should follow order" );

console.log( "ok" );
