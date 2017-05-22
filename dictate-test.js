
const assert = require( "assert" );
const dictate = require( "./dictate.js" );

assert.deepEqual( dictate( [ Array, Object, RegExp, Date ], { "RegExp": 0, "Array": 1, "Object": 2 } ), [ RegExp, Array, Object, Date ], "should follow order" );

console.log( "ok" );
