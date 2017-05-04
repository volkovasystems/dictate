"use strict";

const assert = require( "assert" );
const dictate = require( "./dictate.js" );

assert.deepEqual( dictate( [ 1, 2 ], [ 2, 1 ] ), [ 2, 1 ] );

console.log( "ok" );
