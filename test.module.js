"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "dictate",
			"path": "dictate/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/dictate.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"dictate": "dictate"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const dictate = require( "./dictate.js" );
//: @end-server

//: @client:
const dictate = require( "./dictate.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "dictate", ( ) => {

	describe( "`dictate( [ 1, 2, 3, 4, 5 ], [ 5, 4, 3, 2, 1 ] )`", ( ) => {
		it( "should be equal to [ 5, 4, 3, 2, 1 ]", ( ) => {

			assert.deepEqual( dictate( [ 1, 2, 3, 4, 5 ], [ 5, 4, 3, 2, 1 ] ), [ 5, 4, 3, 2, 1 ] );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "dictate", ( ) => {

	describe( "`dictate( [ 1, 2, 3, 4, 5 ], [ 5, 4, 3, 2, 1 ] )`", ( ) => {
		it( "should be equal to [ 5, 4, 3, 2, 1 ]", ( ) => {

			assert.deepEqual( dictate( [ 1, 2, 3, 4, 5 ], [ 5, 4, 3, 2, 1 ] ), [ 5, 4, 3, 2, 1 ] );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "dictate", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`dictate( [ 1, 2, 3, 4, 5 ], [ 5, 4, 3, 2, 1 ] )`", ( ) => {
		it( "should be equal to [ 5, 4, 3, 2, 1 ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( dictate( [ 1, 2, 3, 4, 5 ], [ 5, 4, 3, 2, 1 ] ) );
				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ 5, 4, 3, 2, 1 ] );

		} );
	} );

} );

//: @end-bridge
